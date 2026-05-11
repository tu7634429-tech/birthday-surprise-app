import { useState } from "react";
import { FaDownload, FaCopy, FaCheckCircle, FaFileCode } from "react-icons/fa";

function BirthdayDataExport({ birthdayData }) {
  const [copyStatus, setCopyStatus] = useState("");

  const getSafeFileName = () => {
    const name = birthdayData?.name || "birthday-surprise";

    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const getFormattedData = () => {
    return JSON.stringify(birthdayData, null, 2);
  };

  const downloadJsonFile = () => {
    const jsonData = getFormattedData();
    const blob = new Blob([jsonData], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${getSafeFileName()}-data.json`;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyJsonData = async () => {
    try {
      await navigator.clipboard.writeText(getFormattedData());
      setCopyStatus("Copied JSON data");

      setTimeout(() => {
        setCopyStatus("");
      }, 2500);
    } catch (error) {
      console.log("Copy failed:", error);
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
          <FaFileCode />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-800">Export Page Data</p>
          <p className="text-xs text-gray-500">
            Download or copy this birthday page as JSON
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl bg-white/90 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Export Summary
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

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          onClick={downloadJsonFile}
          className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 theme-primary-bg"
        >
          <FaDownload />
          Download JSON
        </button>

        <button
          onClick={copyJsonData}
          className="flex items-center justify-center gap-2 rounded-2xl border border-pink-100 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-pink-50"
        >
          <FaCopy />
          Copy JSON
        </button>
      </div>

      {copyStatus && (
        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-xs font-semibold text-green-600">
          <FaCheckCircle />
          {copyStatus}
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        Note: Uploaded images, videos, and music are stored as base64 data in
        this JSON. Large files can make the exported file very large.
      </p>
    </div>
  );
}

export default BirthdayDataExport;