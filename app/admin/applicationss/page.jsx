"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const JOBS_URL = `${API_BASE_URL}/jobs`;

export default function ApplicationNotificationPage() {
  const router = useRouter();

  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [deletingId, setDeletingId] = useState(null);

  // =========================================================
  // LOAD PAGE
  // =========================================================

  // =========================================================
  // LOAD JOBS FIRST
  // =========================================================

  const loadJobsAndApplications = async (token) => {
    try {
      setLoading(true);
      setError("");

      if (!token) {
        localStorage.removeItem("admin_token");
        router.replace("/admin?redirect=/admin/applicationss");
        return;
      }

      // -------------------------------------------------------
      // GET JOBS
      // -------------------------------------------------------

      
      const jobsResponse = await fetch(JOBS_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      let jobsData = null;

      try {
        jobsData = await jobsResponse.json();
      } catch {
        jobsData = null;
      }

            
      // -------------------------------------------------------
      // AUTH ERROR
      // -------------------------------------------------------

      if (
        jobsResponse.status === 401 ||
        jobsResponse.status === 403
      ) {
        localStorage.removeItem("admin_token");

        router.replace("/admin?redirect=/admin/applicationss");

        return;
      }

      // -------------------------------------------------------
      // JOB ERROR
      // -------------------------------------------------------

      if (!jobsResponse.ok) {
        let message =
          `Failed to load jobs: ${jobsResponse.status}`;

        if (jobsData?.detail) {
          message =
            typeof jobsData.detail === "string"
              ? jobsData.detail
              : JSON.stringify(
                  jobsData.detail,
                  null,
                  2
                );
        }

        throw new Error(message);
      }

      // -------------------------------------------------------
      // EXTRACT JOBS
      // -------------------------------------------------------

      let jobsList = [];

      if (Array.isArray(jobsData)) {
        jobsList = jobsData;
      } else if (Array.isArray(jobsData?.jobs)) {
        jobsList = jobsData.jobs;
      } else if (Array.isArray(jobsData?.data)) {
        jobsList = jobsData.data;
      } else if (Array.isArray(jobsData?.results)) {
        jobsList = jobsData.results;
      } else if (Array.isArray(jobsData?.items)) {
        jobsList = jobsData.items;
      }

      
      setJobs(jobsList);

      // -------------------------------------------------------
      // NO JOBS
      // -------------------------------------------------------

      if (jobsList.length === 0) {
        setApplications([]);
        setLoading(false);
        return;
      }

      // -------------------------------------------------------
      // GET APPLICATIONS FOR EACH JOB
      // -------------------------------------------------------

      const allApplications = [];

      for (const job of jobsList) {
        if (!job?.id) {
          continue;
        }

        const jobId = Number(job.id);

        if (!Number.isInteger(jobId)) {
          console.warn(
            "Invalid job ID:",
            job.id
          );

          continue;
        }

        const applicationsUrl =
          `${API_BASE_URL}/jobs/${jobId}/applications`;

        
        try {
          const applicationsResponse =
            await fetch(applicationsUrl, {
              method: "GET",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
              },
              cache: "no-store",
            });

          let applicationsData = null;

          try {
            applicationsData =
              await applicationsResponse.json();
          } catch {
            applicationsData = null;
          }

          
          
          // ---------------------------------------------------
          // AUTH ERROR
          // ---------------------------------------------------

          if (
            applicationsResponse.status === 401 ||
            applicationsResponse.status === 403
          ) {
            localStorage.removeItem("admin_token");

            router.replace(
              "/admin?redirect=/admin/applicationss"
            );

            return;
          }

          // ---------------------------------------------------
          // SKIP JOB IF APPLICATION REQUEST FAILS
          // ---------------------------------------------------

          if (!applicationsResponse.ok) {
            console.warn(
              `Could not load applications for job ${jobId}:`,
              applicationsData
            );

            continue;
          }

          // ---------------------------------------------------
          // EXTRACT APPLICATIONS
          // ---------------------------------------------------

          let jobApplications = [];

          if (Array.isArray(applicationsData)) {
            jobApplications = applicationsData;
          } else if (
            Array.isArray(
              applicationsData?.applications
            )
          ) {
            jobApplications =
              applicationsData.applications;
          } else if (
            Array.isArray(applicationsData?.data)
          ) {
            jobApplications =
              applicationsData.data;
          } else if (
            Array.isArray(applicationsData?.results)
          ) {
            jobApplications =
              applicationsData.results;
          } else if (
            Array.isArray(applicationsData?.items)
          ) {
            jobApplications =
              applicationsData.items;
          }

          // ---------------------------------------------------
          // ADD JOB INFORMATION TO EACH APPLICATION
          // ---------------------------------------------------

          const applicationsWithJob =
            jobApplications.map(
              (application) => ({
                ...application,
                job_id: jobId,
                job_title:
                  job?.title ||
                  job?.name ||
                  job?.position ||
                  "Job",
              })
            );

          allApplications.push(
            ...applicationsWithJob
          );
        } catch (jobError) {
          console.error(
            `Error loading applications for job ${jobId}:`,
            jobError
          );
        }
      }

      // -------------------------------------------------------
      // SET ALL APPLICATIONS
      // -------------------------------------------------------

      
      setApplications(allApplications);
    } catch (err) {
      console.error(
        "APPLICATION PAGE ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to load applications. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      router.replace("/admin?redirect=/admin/applicationss");
      return;
    }

    loadJobsAndApplications(token);
  }, [router]);

  // =========================================================
  // DELETE APPLICATION
  // =========================================================

  const handleDeleteApplication = async (
    applicationId,
    jobId
  ) => {
    if (!applicationId) {
      setError("Application ID is missing.");
      return;
    }

    if (!jobId) {
      setError("Job ID is missing.");
      return;
    }

    try {
      setDeletingId(applicationId);
      setError("");

      const token =
        localStorage.getItem("admin_token");

      if (!token) {
        router.replace(
          "/admin?redirect=/admin/applicationss"
        );
        return;
      }

      const deleteUrl =
        `${API_BASE_URL}/jobs/${jobId}/applications/${applicationId}`;

      
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      
      
      // -------------------------------------------------------
      // AUTH ERROR
      // -------------------------------------------------------

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("admin_token");

        router.replace(
          "/admin?redirect=/admin/applicationss"
        );

        return;
      }

      // -------------------------------------------------------
      // DELETE ERROR
      // -------------------------------------------------------

      if (
        !response.ok &&
        response.status !== 204
      ) {
        let message =
          `Failed to delete application: ${response.status}`;

        if (data?.detail) {
          message =
            typeof data.detail === "string"
              ? data.detail
              : JSON.stringify(
                  data.detail,
                  null,
                  2
                );
        }

        throw new Error(message);
      }

      // -------------------------------------------------------
      // REMOVE APPLICATION FROM SCREEN
      // -------------------------------------------------------

      setApplications(
        (previousApplications) =>
          previousApplications.filter(
            (application) =>
              application?.id !==
              applicationId
          )
      );

      setShowModal(false);
      setSelectedMessage(null);
    } catch (err) {
      console.error(
        "DELETE APPLICATION ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to delete application. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =========================================================
  // VIEW MESSAGE
  // =========================================================

  const handleViewMessage = (
    application
  ) => {
    setSelectedMessage(application);
    setShowModal(true);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  // =========================================================
  // APPLICANT NAME
  // =========================================================

  const getApplicantName = (
    application
  ) => {
    return (
      application?.full_name ||
      application?.name ||
      application?.applicant_name ||
      "Applicant"
    );
  };

  // =========================================================
  // EMAIL
  // =========================================================

  const getApplicantEmail = (
    application
  ) => {
    return (
      application?.email ||
      application?.applicant_email ||
      "No email provided"
    );
  };

  // =========================================================
  // DATE
  // =========================================================

  const getApplicationDate = (
    application
  ) => {
    const dateValue =
      application?.created_at ||
      application?.date_created ||
      application?.date ||
      application?.submitted_at;

    if (!dateValue) {
      return "Unknown Date";
    }

    try {
      const date = new Date(dateValue);

      if (Number.isNaN(date.getTime())) {
        return "Unknown Date";
      }

      return date
        .toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, " - ");
    } catch {
      return "Unknown Date";
    }
  };

  // =========================================================
  // MESSAGE
  // =========================================================

  const getApplicationMessage = (
    application
  ) => {
    return (
      application?.cover_letter ||
      application?.message ||
      application?.description ||
      application?.coverLetter ||
      "No message provided."
    );
  };

  // =========================================================
  // STATUS
  // =========================================================

  const getApplicationStatus = (
    application
  ) => {
    return (
      application?.status ||
      application?.application_status ||
      "Pending"
    );
  };

  // =========================================================
  // RESUME
  // =========================================================

  const getResumeUrl = (
    application
  ) => {
    return (
      application?.resume_url ||
      application?.resume ||
      application?.cv_url ||
      application?.cv ||
      null
    );
  };

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <main className="min-h-screen w-full bg-white text-[#111111]">

      <div className="mx-auto w-full max-w-[1400px] px-[40px] pb-[80px] max-[700px]:px-[20px]">

        {/* PAGE HEADER */}

        <section className="pt-[100px]">

          <h1 className="text-[34px] font-[700] leading-[1.2] tracking-[-1px] text-[#111111] md:text-[40px]">
            Applicant&apos;s Information
          </h1>

          <div className="mt-[12px] flex items-center gap-[8px] text-[14px] text-[#777777]">

            <Link
              href="/"
              className="transition hover:text-black"
            >
              Home
            </Link>

            <span>&gt;</span>

            <span className="text-[#111111]">
              Application
            </span>

          </div>

        </section>

        {/* LOADING */}

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-[40px] w-[40px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#FF9900]" />

              <p className="mt-[15px] text-[14px] text-[#777777]">
                Loading applications...
              </p>

            </div>

          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="mt-[50px] rounded-[12px] border border-red-200 bg-red-50 p-[25px]">

            <p className="whitespace-pre-wrap text-[15px] font-[500] leading-[24px] text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => {
                const token =
                  localStorage.getItem(
                    "admin_token"
                  );

                if (!token) {
                  router.replace(
                    "/admin?redirect=/admin/applicationss"
                  );
                  return;
                }

                loadJobsAndApplications(
                  token
                );
              }}
              className="mt-[15px] rounded-[10px] bg-[#FF9900] px-[22px] py-[11px] text-[14px] font-[600] text-white transition hover:bg-[#e88a00]"
            >
              Try Again
            </button>

          </div>
        )}

        {/* APPLICATION LIST */}

        {!loading &&
          !error &&
          applications.length > 0 && (
            <>

              {/* TABLE HEADER */}

              <div className="mt-[50px] grid grid-cols-[1fr_180px_180px] gap-[20px] border-b border-[#e5e5e5] pb-[15px] max-[800px]:grid-cols-[1fr_120px_120px] max-[600px]:grid-cols-1">

                <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222]">
                  Basic Info
                </h3>

                <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222] max-[600px]:hidden">
                  Date Created
                </h3>

                <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222] max-[600px]:hidden">
                  Actions
                </h3>

              </div>

              {/* APPLICATIONS */}

              <div className="mt-[20px]">

                {applications.map(
                  (application, index) => {

                    const applicationId =
                      application?.id ??
                      index;

                    return (
                      <div
                        key={applicationId}
                        className="grid grid-cols-[1fr_180px_180px] items-center gap-[20px] border-b border-[#e5e5e5] py-[25px] max-[800px]:grid-cols-[1fr_120px_120px] max-[600px]:grid-cols-1 max-[600px]:gap-[15px]"
                      >

                        {/* BASIC INFO */}

                        <div>

                          <h4 className="text-[16px] font-[600] text-[#222222]">
                            {getApplicantEmail(
                              application
                            )}
                          </h4>

                          <p className="mt-[5px] text-[14px] text-[#777777]">
                            Status:{" "}
                            {getApplicationStatus(
                              application
                            )}
                          </p>

                          <p className="mt-[3px] text-[13px] text-[#999999]">
                            {getApplicantName(
                              application
                            )}
                          </p>

                          {application?.job_title && (
                            <p className="mt-[3px] text-[13px] font-[500] text-[#FF9900]">
                              Job:{" "}
                              {
                                application.job_title
                              }
                            </p>
                          )}

                        </div>

                        {/* DATE */}

                        <div className="max-[600px]:hidden">

                          <span className="text-[14px] text-[#777777]">
                            {getApplicationDate(
                              application
                            )}
                          </span>

                        </div>

                        {/* ACTION */}

                        <div className="max-[600px]:hidden">

                          <button
                            type="button"
                            onClick={() =>
                              handleViewMessage(
                                application
                              )
                            }
                            className="rounded-[8px] bg-[#FF9900] px-[22px] py-[10px] text-[14px] font-[500] text-white transition duration-200 hover:bg-[#e88a00] active:scale-[0.97]"
                          >
                            View Message
                          </button>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

              {/* MOBILE */}

              <div className="mt-[20px] hidden space-y-[30px] max-[600px]:block">

                {applications.map(
                  (application, index) => {

                    const applicationId =
                      application?.id ??
                      index;

                    return (
                      <div
                        key={applicationId}
                        className="border-b border-[#e5e5e5] pb-[25px]"
                      >

                        <h4 className="text-[16px] font-[600] text-[#222222]">
                          {getApplicantEmail(
                            application
                          )}
                        </h4>

                        <p className="mt-[5px] text-[14px] text-[#777777]">
                          Status:{" "}
                          {getApplicationStatus(
                            application
                          )}
                        </p>

                        <p className="mt-[3px] text-[13px] text-[#999999]">
                          {getApplicantName(
                            application
                          )}
                        </p>

                        {application?.job_title && (
                          <p className="mt-[3px] text-[13px] font-[500] text-[#FF9900]">
                            Job:{" "}
                            {
                              application.job_title
                            }
                          </p>
                        )}

                        <p className="mt-[5px] text-[12px] text-[#999999]">
                          {getApplicationDate(
                            application
                          )}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            handleViewMessage(
                              application
                            )
                          }
                          className="mt-[15px] rounded-[8px] bg-[#FF9900] px-[22px] py-[10px] text-[14px] font-[500] text-white transition hover:bg-[#e88a00]"
                        >
                          View Message
                        </button>

                      </div>
                    );
                  }
                )}

              </div>

            </>
          )}

        {/* EMPTY */}

        {!loading &&
          !error &&
          applications.length === 0 && (
            <div className="flex min-h-[300px] items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f5f5f5]">

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#999999]"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>

                </div>

                <h3 className="mt-[18px] text-[18px] font-[700] text-[#222222]">
                  No applications found
                </h3>

                <p className="mt-[8px] text-[14px] text-[#888888]">
                  There are currently no applications available.
                </p>

              </div>

            </div>
          )}

      </div>

      {/* MESSAGE MODAL */}

      {showModal &&
        selectedMessage && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-[20px]"
            onClick={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeModal();
              }
            }}
          >

            <div className="max-h-[90vh] w-full max-w-[550px] overflow-y-auto rounded-[16px] bg-white p-[30px] shadow-2xl">

              {/* HEADER */}

              <div className="flex items-center justify-between">

                <h3 className="text-[20px] font-[700] text-[#111111]">
                  Application Message
                </h3>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#f4f4f4] text-[#777777] transition hover:bg-[#eeeeee]"
                  aria-label="Close modal"
                >

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </button>

              </div>

              {/* APPLICANT DETAILS */}

              <div className="mt-[20px]">

                <p className="text-[15px] font-[600] text-[#222222]">
                  {getApplicantName(
                    selectedMessage
                  )}
                </p>

                <p className="mt-[5px] text-[14px] text-[#777777]">
                  {getApplicantEmail(
                    selectedMessage
                  )}
                </p>

                {selectedMessage?.job_title && (
                  <p className="mt-[5px] text-[14px] font-[500] text-[#FF9900]">
                    Job:{" "}
                    {
                      selectedMessage.job_title
                    }
                  </p>
                )}

                <p className="mt-[5px] text-[14px] text-[#777777]">
                  Status:{" "}
                  {getApplicationStatus(
                    selectedMessage
                  )}
                </p>

                <p className="mt-[5px] text-[13px] text-[#999999]">
                  {getApplicationDate(
                    selectedMessage
                  )}
                </p>

                {/* RESUME */}

                {getResumeUrl(
                  selectedMessage
                ) && (
                  <a
                    href={getResumeUrl(
                      selectedMessage
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-[12px] inline-block text-[14px] font-[500] text-[#FF9900] hover:underline"
                  >
                    View Resume
                  </a>
                )}

              </div>

              {/* MESSAGE */}

              <div className="mt-[20px] rounded-[12px] bg-[#fafafa] p-[20px]">

                <p className="whitespace-pre-wrap text-[14px] leading-[22px] text-[#555555]">
                  {getApplicationMessage(
                    selectedMessage
                  )}
                </p>

              </div>

              {/* BUTTONS */}

              <div className="mt-[25px] flex justify-end gap-[12px] max-[500px]:flex-col">

                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-[8px] border border-[#e5e5e5] bg-white px-[22px] py-[10px] text-[14px] font-[500] text-[#555555] transition hover:bg-[#f4f4f4]"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteApplication(
                      selectedMessage.id,
                      selectedMessage.job_id
                    )
                  }
                  disabled={
                    deletingId ===
                    selectedMessage.id
                  }
                  className="rounded-[8px] bg-[#ff4444] px-[22px] py-[10px] text-[14px] font-[500] text-white transition hover:bg-[#cc0000] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deletingId ===
                  selectedMessage.id
                    ? "Deleting..."
                    : "Delete"}
                </button>

              </div>

            </div>

          </div>
        )}

    </main>
  );
}