import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Academy subdomain routing.
 *
 * The Academy lives at academy.<domain> as its own product, separate from
 * the main agency site. The underlying pages still live under app/academy/*
 * in this codebase (a genuinely separate deployment/repo is the cleaner
 * long-term answer — see the report for that trade-off) — this middleware
 * is what makes academy.<domain>/courses transparently serve
 * app/academy/courses/page.jsx without the /academy prefix ever showing
 * up in the browser's URL bar, and permanently redirects anyone who hits
 * an old /academy/* URL on the main domain out to the subdomain instead,
 * so the main site's nav, sitemap, and canonical URLs never need to
 * mention /academy at all.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const isAcademyHost = hostname.startsWith("academy.");

  // On the academy subdomain: rewrite unprefixed paths to /academy/* so
  // the existing app/academy/* pages serve them, invisibly to the visitor.
  if (isAcademyHost) {
    if (!url.pathname.startsWith("/academy")) {
      const rewritten = url.clone();
      rewritten.pathname = `/academy${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(rewritten);
    }
    return NextResponse.next();
  }

  // On the main domain: any lingering /academy/* link (an old bookmark,
  // an indexed search result, a stray internal link) is permanently
  // redirected out to the subdomain rather than served directly, so the
  // Academy never appears as part of the main agency site.
  if (url.pathname.startsWith("/academy")) {
    const target = url.clone();
    target.hostname = `academy.${hostname.replace(/^www\./, "")}`;
    target.pathname = url.pathname.replace(/^\/academy/, "") || "/";
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - _next static/image files
     * - favicon and other static assets in /public
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.(?:png|jpg|jpeg|svg|webp|ico)$).*)",
  ],
};
