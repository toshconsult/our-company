import React from 'react'
import Image from 'next/image'

import BG_one from '../../../../public/images/real-estate-bg-1.png'
import realImage1 from '../../../../public/images/real-image-1.png'

const page = () => {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          backgroundImage: `url(${BG_one.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mb-7 flex items-center justify-center p-10"
      >
        <div>
          <h1 className="text-[32px] font-semibold text-fuchsia-600">
            Do You Have A Restaurant And You Are Looking For <br />
            A Way To Increase Your Sales?
          </h1>

          <p className="mt-5 text-[18px] text-gray-600">
            Let’s Help You To Transform Your Restaurant Business By Building
            A Cut-Edge Restaurant Website For Your
            <br />
            Restaurant And Start Receiving Order Online With Seemless Payment
            Solutions!
          </p>
        </div>
      </section>


      {/* ================= ABOUT / INTRO SECTION ================= */}
      <section className="px-[15%] py-[30px] max-md:px-[6%]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-center gap-20 max-md:grid-flow-row-dense">

          <div>
            <h3 className="mb-[25px] text-[35px] max-md:text-[30px] font-bold tracking-wide text-black">
              Award Winning <br />
              Restaurant Website <br />
              Designer
            </h3>

            <p className="mb-7 text-[16px] leading-[1.6] tracking-wide text-gray-500">
              We Help Medium To Large Restaurant Owners Boost Their
              <br />
              Online Sales Through The Help Of Technologies. Is Your
              <br />
              Restaurant Business Not Performing The Way You Want?
              <br />
              Let Us Help You Digitalize Your Business.
            </p>

            <button
              className="w-[470px] cursor-pointer rounded-[6px] bg-orange-400 py-[10px] text-[22px] font-normal tracking-wide text-white transition hover:bg-orange-500"
            >
              Book A Free Consultation ↗
            </button>
          </div>

          <div className="w-full">
            <Image
              src={realImage1}
              alt="Restaurant Website"
              className="h-[430px] w-full object-cover"
            />
          </div>

        </div>
      </section>
      <section className="w-full overflow-hidden bg-[#fffbea] py-6 mt-8">
        <div className="flex w-max animate-scroll items-center gap-16 ">

          <img
            src="/images/Matmos logo.png"
            alt="MATMOS"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/ALPHABILLS STRAIGHT.png"
            alt="AlphaBills"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/adalo.png"
            alt="Tismabiz"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/airrand.png"
            alt="AirRand"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/paytonaira.png"
            alt="Paytonaira"
            className="h-6 w-auto object-contain sm:h-8"
          />

          {/* Duplicate logos for seamless scrolling */}
          <img
            src="/images/Matmos logo.png"
            alt="MATMOS"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/ALPHABILLS STRAIGHT.png"
            alt="AlphaBills"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/adalo.png"
            alt="Tismabiz"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/airrand.png"
            alt="AirRand"
            className="h-6 w-auto object-contain sm:h-8"
          />

          <img
            src="/images/paytonaira.png"
            alt="Paytonaira"
            className="h-6 w-auto object-contain sm:h-8"
          />

        </div>
      </section>
      <section className="bg-white px-[14%] max-md:px-[6%] py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-xl">
            <span className="text-orange-500">
              Portfolio
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-black">
              Here’s Some Of Our Work
            </h2>

            <p className="mt-5 text-[16px] leading-6 text-gray-500">
              We Are Committed To Delivering Exceptional Service And Quality
              Products In Website Design, Web Development, App Development, And
              All Aspects Of Software Development, While Also Providing
              Accessible And Comprehensive Training To Help People Transition
              To Tech Careers.
            </p>
          </div>


          {/* Portfolio Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-10 gap-y-12">

            {/* Card 1 */}
            <div>
              <img
                src="/69.png"
                alt="Mobile App Development"
                className="h-[300px] w-full rounded-xl object-cover"
              />

              <h3 className="mt-8 text-lg font-semibold text-black">
                MOBILE APP DEVELOPMENT
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Eget
                Aenean Accumsan Bibendum Gravida Magenas Augue. Lorem Ipsum
                Dolor Sit Amet, Consectetur Adipiscing.
              </p>

              <button
                className="mt-7 cursor-pointer rounded-xl bg-fuchsia-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-700"
              >
                Visit Website
              </button>
            </div>


            {/* Card 2 */}
            <div>
              <img
                src="/70.png"
                alt="Website Development"
                className="h-[300px] w-full rounded-xl object-cover"
              />

              <h3 className="mt-8 text-lg font-semibold text-black">
                WEBSITE DEVELOPMENT
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Eget
                Aenean Accumsan Bibendum Gravida Magenas Augue. Lorem Ipsum
                Dolor Sit Amet, Consectetur Adipiscing.
              </p>

              <button
                className="mt-7 cursor-pointer rounded-xl bg-orange-500 px-7 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Visit Website
              </button>
            </div>


            {/* Card 3 */}
            <div>
              <img
                src="/71.png"
                alt="UI UX Design"
                className="h-[300px] w-full rounded-xl object-cover"
              />

              <h3 className="mt-8 text-lg font-semibold text-black">
                UI/UX DESIGN
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Eget
                Aenean Accumsan Bibendum Gravida Magenas Augue. Lorem Ipsum
                Dolor Sit Amet, Consectetur Adipiscing.
              </p>

              <button
                className="mt-7 cursor-pointer rounded-xl bg-fuchsia-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-700"
              >
                Visit Website
              </button>
            </div>

          </div>
        </div>
      </section>
      <section className="w-full bg-[#fff9e8] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">
            <span className="text-base font-medium text-orange-500">
              Services
            </span>

            <h2 className="mt-4 text-4xl font-semibold text-black">
              Our Services
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600">
              We help small, medium and large businesses transform their sales
              and increase ROI through our versatile software development and
              digital marketing team. We work closely with you to deliver what
              your audience would love to consume.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="flex min-h-[290px] flex-col items-center rounded-xl bg-white px-8 py-5 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7df] text-orange-500">
                <img
                  src="/vector.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="mt-6 text-base font-semibold text-black">
                WEB DESIGN & DEVELOPMENT
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-5 text-gray-500">
                From custom designs to robust restaurant solutions, we have the
                expertise to deliver a website that will set you apart from the
                competition.
              </p>
              <button
                className="mt-auto w-[145px] cursor-pointer rounded-xl border border-fuchsia-500 py-2.5 text-sm font-medium text-fuchsia-500 transition hover:bg-fuchsia-500 hover:text-white"
              >
                Learn More
              </button>
            </div>
            <div className="flex min-h-[290px] flex-col items-center rounded-xl bg-white px-8 py-5 text-center shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7df] text-orange-500">
                <img
                  src="/vector.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="mt-6 text-base font-semibold text-black">
                MOBILE APP DEVELOPMENT
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-5 text-gray-500">
                With years of experience and a commitment to quality, we'll
                work closely with you to understand your unique needs and
                create an app that perfectly represents your restaurant.
              </p>

              <button
                className="mt-auto w-[145px] cursor-pointer rounded-xl border border-fuchsia-500 py-2.5 text-sm font-medium text-fuchsia-500 transition hover:bg-fuchsia-500 hover:text-white"
              >
                Learn More
              </button>
            </div>
            <div className="flex min-h-[290px] flex-col items-center rounded-xl bg-white px-8 py-5 text-center shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7df] text-orange-500">
                <img
                  src="/vector.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="mt-6 text-base font-semibold text-black">
                DIGITAL MARKETING
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-5 text-gray-500">
                Our team of skilled digital marketers use the latest
                technologies and tools to plan and strategize the success of
                your restaurant.
              </p>

              <button
                className="mt-auto w-[145px] cursor-pointer rounded-xl border border-fuchsia-500 py-2.5 text-sm font-medium text-fuchsia-500 transition hover:bg-fuchsia-500 hover:text-white"
              >
                Learn More
              </button>

            </div>

          </div>


          {/* View All */}
          <div className="mt-14 flex justify-end">
            <button
              className="cursor-pointer rounded-xl bg-orange-500 px-7 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              View All Services
            </button>
          </div>

        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              Technologies We’re Using
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Below is the list of technologies we are using for our
              professional services
            </p>
          </div>


          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 gap-y-16">

            {/* HTML */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/html.png"
                alt="HTML"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                HTML
              </h3>
            </div>


            {/* Tailwind */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/tailwind.png"
                alt="Tailwind CSS"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                TAILWIND CSS
              </h3>
            </div>


            {/* JavaScript */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/javascript.png"
                alt="JavaScript"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                JAVASCRIPT
              </h3>
            </div>


            {/* React */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/react.png"
                alt="React.js"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                REACT.JS
              </h3>
            </div>


            {/* Python */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/python.png"
                alt="Python"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                PYTHON
              </h3>
            </div>


            {/* Java */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/java.png"
                alt="Java"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                JAVA
              </h3>
            </div>


            {/* React Native */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/react-native.png"
                alt="React Native"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                REACT NATIVE
              </h3>
            </div>


            {/* WordPress */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/wordpress.png"
                alt="WordPress"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                WORDPRESS
              </h3>
            </div>


            {/* PHP */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/php.png"
                alt="PHP"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                PHP
              </h3>
            </div>


            {/* ASP.NET */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/csharp.png"
                alt="ASP.NET"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                ASP.NET
              </h3>
            </div>


            {/* Shopify */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/shopify.png"
                alt="Shopify"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-5 text-lg font-medium text-orange-500">
                SHOPIFY
              </h3>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">

          {/* Mission */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-x-20 gap-y-10">

            {/* Mission Text */}
            <div className="order-2 max-w-xl lg:order-1">
              <span className="text-base font-medium text-orange-500">
                Mission
              </span>

              <h2 className="mt-5 text-3xl font-semibold text-black md:text-4xl">
                Why Toshconsult
              </h2>

              <p className="mt-5 text-sm leading-5 text-gray-500">
                At Toshconsult Inc, our mission is to deliver exceptional
                software solutions that redefine industry standards and exceed
                customer expectations. We are dedicated to innovation, customer
                satisfaction, global impact, social responsibility, agile
                adaptability and quality excellent.
              </p>
            </div>
            <div className="order-1 w-full lg:order-2">
              <img
                src="/images/Rectangle.png"
                alt="Toshconsult Mission"
                className="h-[340px] w-full rounded-[28px] object-cover"
              />
            </div>

          </div>
          <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-x-20 gap-y-10">
            <div className="order-1 w-full">
              <img
                src="/images/vision.png"
                alt="Toshconsult Vision"
                className="h-[340px] w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="order-2 max-w-xl">
              <span className="text-base font-medium text-orange-500">
                Vision
              </span>

              <h2 className="mt-5 text-3xl font-semibold text-black md:text-4xl">
                Our Vision
              </h2>

              <p className="mt-5 text-sm leading-5 text-gray-500">
                We envision a future where technology seamlessly integrates
                with human potential, empowering individuals and organizations
                to achieve their fullest capabilities. Our vision is to be at
                the forefront of innovation, driving positive change through
                cutting-edge software solutions that enhance efficiency,
                foster creativity, and elevate the human experience.
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className="w-full bg-[#fff9e8] py-16">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-black">
              What People Are Saying
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="min-h-[200px] rounded-xl bg-white px-10 py-8">

              <div className="flex items-center">
                <img
                  src="/mo.png"
                  alt="Oladipo Matthew"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-sm font-semibold text-black">
                OLADIPO MATTHEW
              </h3>

              <p className="mt-3 max-w-md text-xs italic leading-5 text-gray-500">
                “Toshconsult Technologies built our restaurant Management
                software and also increases our monthly revenue by 300x.”
              </p>

            </div>
            <div className="min-h-[200px] rounded-xl bg-white px-10 py-8">

              <div className="flex items-center">
                <img
                  src="/ib.png"
                  alt="Korede Mohammed"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-sm font-semibold text-black">
                KOREDE MOHAMMED
              </h3>

              <p className="mt-3 max-w-md text-xs italic leading-5 text-gray-500">
                “Our restaurant sales got skyrocket after Toshconsult
                restructure our existing software and gave us a targeted ads.”
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between">

            <div className="flex flex-1 justify-center gap-1">
              <span className="h-3 w-3 rounded-full bg-orange-500"></span>
              <span className="h-2 w-2 rounded-full bg-orange-100"></span>
              <span className="h-2 w-2 rounded-full bg-orange-100"></span>
            </div>
            <a
              href="#reviews"
              className="cursor-pointer text-sm font-medium text-fuchsia-500 underline underline-offset-2"
            >
              View All Reviews
            </a>

          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-2xl bg-[#f9e7fa] px-6 py-10 text-center md:px-10 md:py-12">

            <h2 className="text-2xl font-semibold text-black md:text-3xl">
              Schedule A 30 Minutes Project Consultation!
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-xs leading-5 text-gray-500 md:text-sm">
              Are you a business owner, having low revenue or looking forward
              to increase your online sales? Worry no more!
              <br />
              Our skilled engineers are ready to transform your business
            </p>

            <div className="mt-7 flex justify-center">
              <button
                className="flex cursor-pointer items-center justify-center gap-4 rounded-xl bg-fuchsia-600 px-7 py-3 text-xs font-medium text-white transition hover:bg-fuchsia-700"
              >
                <span>
                  Book a free consultation
                </span>

                <span className="text-3xl leading-none">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page