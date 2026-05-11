import { useRef, useState } from "react";
import {
  FaUpload,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileImport,
} from "react-icons/fa";

function BirthdayDataImport({ setBirthdayData, setActiveTheme }) {
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState("");
  const [importError, setImportError] = useState("");

  const validateBirthdayData = (data) => {
    if (!data || typeof data !== "object") {
      return false;
    }

    const requiredFields = [
      "name",
      "birthdayDate",
      "hero",
      "gallery",
      "timeline",
      "specialDates",
      "memoryCards",
      "messages",
      "gift",
      "finalWish",
      "themes",
    ];

    return requiredFields.every((field) => field in data);
  };

  const resetMessages = () => {
    setTimeout(() => {
      setImportStatus("");
      setImportError("");
    }, 3000);
  };

  const restoreBirthdayData = (data) => {
    setBirthdayData(data);

    if (data.themes?.length > 0) {
      setActiveTheme(data.themes[0]);
    }

    setImportStatus("Birthday page restored successfully");
    setImportError("");
    resetMessages();
  };

  const handleJsonFileImport = (file) => {
    if (!file) return;

    if (!file.name.endsWith(".json")) {
      setImportError("Please upload a valid JSON file");
      setImportStatus("");
      resetMessages();
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const fileContent = event.target.result;
        const parsedData = JSON.parse(fileContent);

        const isValidData = validateBirthdayData(parsedData);

        if (!isValidData) {
          setImportError("This JSON file does not match the birthday page format");
          setImportStatus("");
          resetMessages();
          return;
        }

        restoreBirthdayData(parsedData);
      } catch (error) {
        console.log("JSON import failed:", error);
        setImportError("Could not read this JSON file");
        setImportStatus("");
        resetMessages();
      }
    };

    reader.readAsText(file);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
          <FaFileImport />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-800">
            Import Page Data
          </p>
          <p className="text-xs text-gray-500">
            Restore a birthday page from JSON
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl bg-white/90 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Restore Instructions
        </p>

        <p className="text-xs leading-relaxed text-gray-500">
          Upload a JSON file that was previously exported from this birthday
          builder. This will replace the current page data with the imported
          content.
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        onChange={(e) => handleJsonFileImport(e.target.files[0])}
        className="hidden"
      />

      <button
        onClick={openFilePicker}
        className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 theme-primary-bg"
      >
        <FaUpload />
        Upload JSON File
      </button>

      {importStatus && (
        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-xs font-semibold text-green-600">
          <FaCheckCircle />
          {importStatus}
        </div>
      )}

      {importError && (
        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-500">
          <FaExclamationTriangle />
          {importError}
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        Note: Importing will overwrite the current builder content.
      </p>
    </div>
  );
}

export default BirthdayDataImport;