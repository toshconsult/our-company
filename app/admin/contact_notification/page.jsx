"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/contact/`;

export default function ContactNotificationPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchContacts = async (token) => {
    try {
      setLoading(true);
      setError("");

      if (!token) {
        localStorage.removeItem("admin_token");
        router.replace("/admin?redirect=/admin/contact_notification");
        return;
      }

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("admin_token");
        router.replace("/admin?redirect=/admin/contact_notification");
        return;
      }

      if (!response.ok) {
        throw new Error(`Failed to load contacts: ${response.status}`);
      }

      const data = await response.json();

      let contactsData = data;

      if (!Array.isArray(contactsData)) {
        if (Array.isArray(data?.contacts)) {
          contactsData = data.contacts;
        } else if (Array.isArray(data?.data)) {
          contactsData = data.data;
        } else if (Array.isArray(data?.results)) {
          contactsData = data.results;
        }
      }

      if (!Array.isArray(contactsData)) {
        throw new Error("Invalid contact data received from server.");
      }

      setContacts(contactsData);
    } catch (err) {
      console.error("CONTACT API ERROR:", err);
      setError(err?.message || "Unable to load contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.replace("/admin?redirect=/admin/contact_notification");
      return;
    }
    fetchContacts(token);
  }, []);

  const handleDeleteContact = async (contactId) => {
    try {
      setDeletingId(contactId);
      setError("");

      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.replace("/admin?redirect=/admin/contact_notification");
        return;
      }

      const response = await fetch(`${API_URL}${contactId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("admin_token");
        router.replace("/admin?redirect=/admin/contact_notification");
        return;
      }

      if (!response.ok && response.status !== 204) {
        throw new Error(`Failed to delete contact: ${response.status}`);
      }

      // Remove contact from local state
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );

      // Close modal if the deleted contact was selected
      if (selectedMessage?.id === contactId) {
        setShowModal(false);
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error("DELETE CONTACT ERROR:", err);
      setError(err?.message || "Unable to delete contact. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewMessage = (contact) => {
    setSelectedMessage(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  const getContactName = (contact) => {
    return contact?.full_name || contact?.name || "Unknown";
  };

  const getContactEmail = (contact) => {
    return contact?.email || "No email provided";
  };

  const getContactDate = (contact) => {
    const dateValue = contact?.created_at || contact?.date;
    
    if (!dateValue) {
      return "Unknown Date";
    }

    try {
      const date = new Date(dateValue);
      
      if (Number.isNaN(date.getTime())) {
        return "Unknown Date";
      }

      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).replace(/\//g, " - ");
    } catch {
      return "Unknown Date";
    }
  };

  const getContactMessage = (contact) => {
    return contact?.message || "No message provided.";
  };

  return (
    <main className="min-h-screen w-full bg-white text-[#111111]">
      {/* NAVBAR */}
      {/* MAIN CONTENT */}
      <div className="mx-auto w-full max-w-[1400px] px-[40px] pb-[80px] max-[700px]:px-[20px]">
        {/* =================================================
            PAGE HEADER
        ================================================= */}
        <section className="pt-[100px]">
          {/* TITLE */}
          <h1 className="text-[34px] font-[700] leading-[1.2] tracking-[-1px] text-[#111111] md:text-[40px]">
            Contact Notification
          </h1>

          {/* BREADCRUMB */}
          <div className="mt-[12px] flex items-center gap-[8px] text-[14px] text-[#777777]">
            <Link
              href="/"
              className="transition hover:text-black"
            >
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#111111]">Contact</span>
          </div>
        </section>

        {/* =================================================
            LOADING STATE
        ================================================= */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-[40px] w-[40px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#FF9900]" />
              <p className="mt-[15px] text-[14px] text-[#777777]">
                Loading contacts...
              </p>
            </div>
          </div>
        )}

        {/* =================================================
            ERROR STATE
        ================================================= */}
        {!loading && error && (
          <div className="mt-[50px] rounded-[12px] border border-red-200 bg-red-50 p-[25px] text-center">
            <p className="text-[15px] font-[500] text-red-600">{error}</p>
            <button
              type="button"
              onClick={() => {
                const token = localStorage.getItem("admin_token");
                if (!token) {
                  router.replace("/admin?redirect=/admin/contact_notification");
                  return;
                }
                fetchContacts(token);
              }}
              className="mt-[15px] rounded-[10px] bg-[#FF9900] px-[22px] py-[11px] text-[14px] font-[600] text-white transition hover:bg-[#e88a00]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* =================================================
            TABLE HEADER
        ================================================= */}
        {!loading && !error && contacts.length > 0 && (
          <>
            <div className="mt-[50px] grid grid-cols-[1fr_180px_180px_120px] gap-[20px] border-b border-[#e5e5e5] pb-[15px] max-[800px]:grid-cols-[1fr_120px_120px_100px] max-[600px]:grid-cols-1">
              <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222]">
                Basic Info
              </h3>
              <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222] max-[600px]:hidden">
                Date Created
              </h3>
              <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222] max-[600px]:hidden">
                Actions
              </h3>
              <h3 className="text-[14px] font-[600] uppercase tracking-wide text-[#222222] max-[600px]:hidden">
                Delete
              </h3>
            </div>

            {/* =================================================
                CONTACT LIST
            ================================================= */}
            <div className="mt-[20px]">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="grid grid-cols-[1fr_180px_180px_120px] items-center gap-[20px] border-b border-[#e5e5e5] py-[25px] max-[800px]:grid-cols-[1fr_120px_120px_100px] max-[600px]:grid-cols-1 max-[600px]:gap-[15px]"
                >
                  {/* BASIC INFO (Name + Email) - No profile pic */}
                  <div>
                    <h4 className="text-[16px] font-[600] text-[#222222]">
                      {getContactName(contact)}
                    </h4>
                    <p className="mt-[5px] text-[14px] text-[#777777]">
                      {getContactEmail(contact)}
                    </p>
                  </div>

                  {/* DATE CREATED */}
                  <div className="max-[600px]:hidden">
                    <span className="text-[14px] text-[#777777]">
                      {getContactDate(contact)}
                    </span>
                  </div>

                  {/* ACTIONS - View Message */}
                  <div className="max-[600px]:hidden">
                    <button
                      type="button"
                      onClick={() => handleViewMessage(contact)}
                      className="
                        rounded-[8px]
                        bg-[#FF9900]
                        px-[22px]
                        py-[10px]
                        text-[14px]
                        font-[500]
                        text-white
                        transition
                        duration-200
                        hover:bg-[#e88a00]
                        active:scale-[0.97]
                      "
                    >
                      View Message
                    </button>
                  </div>

                  {/* DELETE BUTTON */}
                  <div className="max-[600px]:hidden">
                    <button
                      type="button"
                      onClick={() => handleDeleteContact(contact.id)}
                      disabled={deletingId === contact.id}
                      className="
                        rounded-[8px]
                        bg-[#ff4444]
                        px-[22px]
                        py-[10px]
                        text-[14px]
                        font-[500]
                        text-white
                        transition
                        duration-200
                        hover:bg-[#cc0000]
                        active:scale-[0.97]
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                    >
                      {deletingId === contact.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* =================================================
                MOBILE - ACTION BUTTONS (Only shown on mobile)
            ================================================= */}
            <div className="mt-[20px] space-y-[30px] max-[600px]:block hidden">
              {contacts.map((contact) => (
                <div key={contact.id} className="border-b border-[#e5e5e5] pb-[25px]">
                  <h4 className="text-[16px] font-[600] text-[#222222]">
                    {getContactName(contact)}
                  </h4>
                  <p className="mt-[5px] text-[14px] text-[#777777]">
                    {getContactEmail(contact)}
                  </p>
                  <p className="mt-[5px] text-[12px] text-[#999999]">
                    {getContactDate(contact)}
                  </p>
                  <div className="mt-[15px] flex gap-[10px]">
                    <button
                      type="button"
                      onClick={() => handleViewMessage(contact)}
                      className="
                        rounded-[8px]
                        bg-[#FF9900]
                        px-[22px]
                        py-[10px]
                        text-[14px]
                        font-[500]
                        text-white
                        transition
                        duration-200
                        hover:bg-[#e88a00]
                      "
                    >
                      View Message
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteContact(contact.id)}
                      disabled={deletingId === contact.id}
                      className="
                        rounded-[8px]
                        bg-[#ff4444]
                        px-[22px]
                        py-[10px]
                        text-[14px]
                        font-[500]
                        text-white
                        transition
                        duration-200
                        hover:bg-[#cc0000]
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                    >
                      {deletingId === contact.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* =================================================
            EMPTY STATE
        ================================================= */}
        {!loading && !error && contacts.length === 0 && (
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
                No contacts found
              </h3>
              <p className="mt-[8px] text-[14px] text-[#888888]">
                There are currently no contact messages available.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          MESSAGE MODAL
      ================================================= */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-[20px]">
          <div className="w-full max-w-[550px] rounded-[16px] bg-white p-[30px] shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-[700] text-[#111111]">
                Contact Message
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#f4f4f4] text-[#777777] transition hover:bg-[#eeeeee]"
                aria-label="Close modal"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

            <div className="mt-[20px]">
              <p className="text-[14px] font-[600] text-[#222222]">
                {getContactName(selectedMessage)}
              </p>
              <p className="mt-[5px] text-[14px] text-[#777777]">
                {getContactEmail(selectedMessage)}
              </p>
            </div>

            <div className="mt-[20px] rounded-[12px] bg-[#fafafa] p-[20px]">
              <p className="text-[14px] leading-[22px] text-[#555555]">
                {getContactMessage(selectedMessage)}
              </p>
            </div>

            <div className="mt-[25px] flex justify-end gap-[12px]">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-[8px] border border-[#e5e5e5] bg-white px-[22px] py-[10px] text-[14px] font-[500] text-[#555555] transition hover:bg-[#f4f4f4]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleDeleteContact(selectedMessage.id)}
                disabled={deletingId === selectedMessage.id}
                className="rounded-[8px] bg-[#ff4444] px-[22px] py-[10px] text-[14px] font-[500] text-white transition hover:bg-[#cc0000] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingId === selectedMessage.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      {/* <Footer /> */}
    </main>
  );
}