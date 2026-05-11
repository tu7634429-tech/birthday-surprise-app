import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaCopy,
  FaExternalLinkAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

import { saveBirthdayPage } from "../services/birthdayService";

function BirthdayPublish({ birthdayData }) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedPage, setPublishedPage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const getShareUrl = (slug) => {
    return `${window.location.origin}/birthday/${slug}`;
  };

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      setErrorMessage("");
      setCopyStatus("");

      const savedPage = await saveBirthdayPage(birthdayData);

      setPublishedPage(savedPage);
    } catch (error) {
      console.log("Publish failed:", error);
      setErrorMessage(
        error?.message || "Something went wrong while publishing the page"
      );
    } finally {
      setIsPublishing(false);
    }
  };

  const handleCopyLink = async () => {
    if (!publishedPage?.slug) return;

    const shareUrl = getShareUrl(publishedPage.slug);

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Link copied");

      setTimeout(() => {
        setCopyStatus("");
      }, 2500);
    } catch (error) {
      console.log("Copy link failed:", error);
      setCopyStatus("Copy failed");

      setTimeout(() => {
        setCopyStatus("");
      }, 2500);
    }
  };

  return (
    <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
          <FaCloudUploadAlt />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-800">
            Publish Surprise Page
          </p>
          <p className="text-xs text-gray-500">
            Save this birthday page and generate a share link
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl bg-white/90 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Publish Summary
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
          <div className="rounded-xl bg-pink-50 p-3">
            <p className="font-semibold text-gray-800">Name</p>
            <p>{birthdayData?.name || "Not added"}</p>
          </div>

          <div className="rounded-xl bg-pink-50 p-3">
            <p className="font-semibold text-gray-800">Gallery</p>
            <p>{birthdayData?.gallery?.length || 0} images</p>
          </div>

          <div className="rounded-xl bg-pink-50 p-3">
            <p className="font-semibold text-gray-800">Timeline</p>
            <p>{birthdayData?.timeline?.length || 0} memories</p>
          </div>

          <div className="rounded-xl bg-pink-50 p-3">
            <p className="font-semibold text-gray-800">Memory Cards</p>
            <p>{birthdayData?.memoryCards?.length || 0} cards</p>
          </div>
        </div>
      </div>

      <button
        onClick={handlePublish}
        disabled={isPublishing}
        className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 theme-primary-bg"
      >
        <FaCloudUploadAlt />
        {isPublishing ? "Publishing..." : "Publish Birthday Page"}
      </button>

      {publishedPage?.slug && (
        <div className="mt-4 rounded-2xl bg-green-50 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-green-600">
            <FaCheckCircle />
            Birthday page published successfully
          </div>

          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Share Link
          </label>

          <div className="mb-3 rounded-xl bg-white p-3 text-xs text-gray-600 break-all">
            {getShareUrl(publishedPage.slug)}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-gray-700 transition hover:bg-green-100"
            >
              <FaCopy />
              Copy Link
            </button>

            <a
              href={getShareUrl(publishedPage.slug)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-gray-700 transition hover:bg-green-100"
            >
              <FaExternalLinkAlt />
              Open Link
            </a>
          </div>

          {copyStatus && (
            <p className="mt-3 text-xs font-semibold text-green-600">
              {copyStatus}
            </p>
          )}
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-500">
          <FaExclamationTriangle />
          {errorMessage}
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        Note: The generated link will fully work after we create the public
        birthday page route in the next step.
      </p>
    </div>
  );
}

export default BirthdayPublish;