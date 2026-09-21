"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Code2,
  GraduationCap,
  Star,
  Headphones,
  Search,
  SlidersHorizontal,
  MapPin,
  Building2,
  BriefcaseBusiness,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { API_BASE_URL } from "@/lib/site-config";

const benefits = [
  {
    icon: Code2,
    title: "COMPREHENSIVE SOFTWARE\nDEVELOPMENT SERVICES",
    description:
      "We offer a wide range of software development services, including website design, web development, app development, and more. Clients can rely on our experienced team to deliver solutions on time through the development process, from concept to launch.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: GraduationCap,
    title: "EXPERT TRAINING\nPROGRAMS",
    description:
      "We offer a wide range of software development services, including website design, web development, app development, and more. Clients can rely on our experienced team to deliver solutions on time through the development process, from concept to launch.",
    iconBg: "bg-orange-100 mb-20",
    iconColor: "text-orange-500",
  },
  {
    icon: Star,
    title: "FLEXIBLE ENVIRONMENT",
    description:
      "We prioritize finding and delivering innovative software solutions that meet the unique needs of each client. We have always kept up with the latest trends and technologies in the IT industry, and our flexible work environment allows us to produce cutting-edge products.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    icon: Headphones,
    title: "EXCEPTIONAL CUSTOMER\nSERVICE",
    description:
      "We are dedicated to providing exceptional customer service to each and every client. Our team is responsive, communicative, and always willing to go the extra mile to ensure that clients are satisfied with the results.",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
];


function App() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 4;


  useEffect(() => {
    const getJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/jobs`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        
        if (Array.isArray(data)) {
          setJobs(data);
        } else if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else if (Array.isArray(data.data)) {
          setJobs(data.data);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error("GET JOBS ERROR:", err);

        setError(
          "Unable to load jobs. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);


  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      String(job.title || "")
        .toLowerCase()
        .includes(search) ||
      String(job.job_title || "")
        .toLowerCase()
        .includes(search) ||
      String(job.company || "")
        .toLowerCase()
        .includes(search) ||
      String(job.location || "")
        .toLowerCase()
        .includes(search) ||
      String(job.description || "")
        .toLowerCase()
        .includes(search) ||
      String(job.requirements || "")
        .toLowerCase()
        .includes(search) ||
      String(job.job_type || "")
        .toLowerCase()
        .includes(search) ||
      String(job.salary || "")
        .toLowerCase()
        .includes(search)
    );
  });


  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const startIndex = (currentPage - 1) * jobsPerPage;

  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };


  const handleApply = (job) => {
    const jobId = job.id || job._id;

    if (!jobId) {
      alert("Unable to find this job.");
      return;
    }


    router.push(`/apply?jobId=${jobId}`);
  };

  const handleRetry = () => {
    window.location.reload();
  };


  const getRequirements = (requirements) => {
    if (!requirements) {
      return [];
    }

    if (Array.isArray(requirements)) {
      return requirements;
    }

    return String(requirements)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };


  return (
    <>
    <div className="min-h-screen w-full mt-10 overflow-x-hidden bg-white text-[#111827]">

      <section className="relative min-h-[320px] overflow-hidden bg-gradient-to-r from-[#fff9e9] via-[#fffdf6] to-[#fceaf5] sm:min-h-[350px] md:min-h-[390px]">

        <div className="absolute left-[5%] top-[130px] h-[90px] w-[90px] rotate-45 border border-[#f3e4c8] opacity-70 sm:h-[110px] sm:w-[110px]" />

        <div className="absolute left-[22%] top-[35px] h-[60px] w-[60px] rotate-45 border border-[#f1e5c5] opacity-60 sm:h-[75px] sm:w-[75px]" />

        <div className="absolute left-[68%] top-[35px] h-[75px] w-[75px] rotate-45 border border-[#f0e5c9] opacity-60 sm:h-[90px] sm:w-[90px]" />

        <div className="absolute right-[3%] top-[140px] h-[85px] w-[85px] rotate-45 border border-[#f0dce0] opacity-70 sm:h-[105px] sm:w-[105px]" />

        <div className="absolute left-[12%] top-[170px] h-[30px] w-[30px] rotate-45 border border-[#f3e4c8] opacity-50" />

        <div className="absolute left-[74%] top-[80px] h-[32px] w-[32px] rotate-45 border border-[#f0e5cc] opacity-50" />


        <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-6 text-center sm:min-h-[350px] md:min-h-[390px]">
          <h1 className="mb-5 text-[45px] font-Raleway font-bold tracking-[-1.5px] text-[#111] sm:text-[50px] md:text-[58px] lg:text-[64px]">
            Search For Job
          </h1>

          <div className="flex items-center gap-3 text-[13px] text-gray-500 sm:text-[15px]">
            <span>Home</span>

            <span>•</span>

            <span>Career</span>
          </div>
        </div>
      </section>


      <main className="mx-auto w-full max-w-[1400px] px-6 pb-24 sm:px-8 md:px-12 lg:px-16">

        <section className="pt-[90px] sm:pt-[110px]">
          <div className="mb-12">
            <p className="mb-4 text-[14px] font-semibold uppercase tracking-[1px] text-[#ff8a00] sm:text-[16px]">
              Benefits
            </p>

            <h2 className="max-w-[750px] text-[36px] font-semibold leading-[1.12] tracking-[-1.5px] text-[#111] sm:text-[44px] md:text-[50px] lg:text-[54px]">
              Be Among The Tech Maker
              <br />
              Working Toward Innovations
            </h2>

            <p className="mt-6 max-w-[800px] text-[15px] leading-[1.8] text-gray-500 sm:text-[16px] md:text-[17px]">
              We are building a talented team of professionals who are
              passionate about technology, innovation and creating solutions
              that make a real difference.
            </p>
          </div>


          <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div key={index} className="group flex gap-6">
                  <div
                    className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px] ${benefit.iconBg} transition duration-300 group-hover:scale-105 sm:h-[68px] sm:w-[68px]`}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className={benefit.iconColor}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="whitespace-pre-line text-[20px] font-Raleway font-semibold leading-[1.4] text-[#111] sm:text-[20px] md:text-[21px]">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 max-w-[550px] font-Poppins text-[14px] leading-[1.8] text-gray-500 sm:text-[15px] md:text-[16px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-[110px] sm:mt-[130px]">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[32px] font-semibold tracking-[-0.8px] text-[#111] sm:text-[38px] md:text-[42px]">
                Available Jobs
              </h2>

              {!loading && !error && (
                <p className="mt-2 text-sm text-gray-500">
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1 ? "job" : "jobs"} available
                </p>
              )}
            </div>


            <div className="flex w-full items-center gap-3 sm:w-auto">
              <div className="relative w-full sm:w-[300px] md:w-[340px]">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="h-[52px] w-full rounded-[8px] border border-gray-200 bg-white px-5 pr-12 text-[15px] text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                />

                <Search
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>


              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[8px] bg-[#ff9700] text-white transition hover:bg-[#eb8500]"
                title="Clear search"
              >
                <SlidersHorizontal size={21} />
              </button>
            </div>
          </div>

          <section className="mt-14">

            {loading && (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />

                <p className="mt-5 text-sm text-gray-500">
                  Loading available jobs...
                </p>
              </div>
            )}


            {!loading && error && (
              <div className="rounded-[12px] border border-red-100 bg-red-50 p-10 text-center">
                <h3 className="text-xl font-semibold text-red-600">
                  Unable To Load Jobs
                </h3>

                <p className="mx-auto mt-3 max-w-[600px] text-sm leading-7 text-red-500">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={handleRetry}
                  className="mt-6 rounded-[7px] bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Try Again
                </button>
              </div>
            )}


            {!loading && !error && filteredJobs.length === 0 && (
              <div className="rounded-[12px] border border-gray-100 bg-gray-50 p-12 text-center">
                <Search size={40} className="mx-auto text-gray-300" />

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  No Jobs Found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try searching for another job title, company or location.
                </p>

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                    className="mt-5 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}


            {!loading && !error && currentJobs.length > 0 && (
              <div className="space-y-12">
                {currentJobs.map((job, index) => {
                  const requirements = getRequirements(job.requirements);

                  return (
                    <article
                      key={job.id || job._id || index}
                      className="grid grid-cols-1 gap-8 border-b border-gray-100 pb-12 md:grid-cols-[1fr_auto] md:items-center"
                    >

                      <div>

                        <h3 className="text-[23px] font-semibold text-gray-900 sm:text-[26px]">
                          {job.title ||
                            job.job_title ||
                            "Untitled Position"}
                        </h3>


                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                          {job.company && (
                            <div className="flex items-center gap-2">
                              <Building2
                                size={16}
                                className="text-orange-500"
                              />

                              <span>{job.company}</span>
                            </div>
                          )}

                          {job.location && (
                            <div className="flex items-center gap-2">
                              <MapPin
                                size={16}
                                className="text-orange-500"
                              />

                              <span>{job.location}</span>
                            </div>
                          )}

                          {job.job_type && (
                            <div className="flex items-center gap-2">
                              <BriefcaseBusiness
                                size={16}
                                className="text-orange-500"
                              />

                              <span>{job.job_type}</span>
                            </div>
                          )}
                        </div>


                        <p className="mt-5 max-w-[900px] text-[14px] leading-[1.8] text-gray-500 sm:text-[15px] md:text-[16px]">
                          {job.description ||
                            job.job_description ||
                            "No job description available."}
                        </p>


                        {requirements.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {requirements.map(
                              (requirement, requirementIndex) => (
                                <span
                                  key={requirementIndex}
                                  className={`rounded-[6px] px-5 py-2.5 text-[13px] font-medium ${
                                    requirementIndex % 4 === 0
                                      ? "bg-pink-50 text-pink-500"
                                      : requirementIndex % 4 === 1
                                      ? "bg-yellow-50 text-yellow-600"
                                      : requirementIndex % 4 === 2
                                      ? "bg-purple-50 text-purple-500"
                                      : "bg-orange-50 text-orange-500"
                                  }`}
                                >
                                  {typeof requirement === "string"
                                    ? requirement
                                    : requirement?.name ||
                                      requirement?.title ||
                                      "Requirement"}
                                </span>
                              )
                            )}
                          </div>
                        )}


                        {job.salary && (
                          <div className="mt-5 flex items-center gap-2">
                            <DollarSign
                              size={17}
                              className="text-green-600"
                            />

                            <span className="text-sm font-semibold text-gray-900">
                              Salary:
                            </span>

                            <span className="text-sm text-gray-500">
                              {job.salary}
                            </span>
                          </div>
                        )}
                      </div>


                      <div>
                        <button
                          type="button"
                          onClick={() => handleApply(job)}
                          className="w-full rounded-[7px] bg-orange-500 cursor-pointer px-9 py-3.5 text-[14px] font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg sm:w-fit"
                        >
                          Apply Now
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}


            {!loading && !error && totalPages > 1 && (
              <div className="mt-16 flex flex-wrap items-center justify-center gap-3">

                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-[7px] border border-gray-200 text-gray-500 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={18} />
                </button>


                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-11 w-11 items-center justify-center rounded-[7px] text-[14px] font-semibold transition ${
                      currentPage === page
                        ? "bg-fuchsia-600 text-white shadow-sm"
                        : "border border-gray-200 text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}


                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-[7px] border border-gray-200 text-gray-500 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </section>
        </section>


        <section className="mt-24 sm:mt-28">
          <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-r from-fuchsia-600 to-pink-500 px-8 py-16 text-center text-white sm:px-12 md:py-20">

            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/5" />

            <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-white/5" />

            <div className="absolute left-[20%] top-10 h-8 w-8 rounded-full bg-white/5" />

            <div className="absolute bottom-10 right-[25%] h-10 w-10 rounded-full bg-white/5" />

            <div className="relative z-10">
              <h2 className="text-[28px] font-semibold sm:text-[34px] md:text-[40px]">
                HAVE ANY QUESTIONS?
              </h2>

              <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-[1.8] text-white/80 sm:text-[16px]">
                Our team is available to answer your questions and provide
                the information you need. We are always happy to hear from
                talented professionals.
              </p>

              <button
                type="button"
                className="mt-8 rounded-[7px] bg-white px-9 py-3.5 text-[14px] font-semibold text-fuchsia-600 transition hover:bg-gray-100 hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}

export default App;