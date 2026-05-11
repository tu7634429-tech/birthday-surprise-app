import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPen,
  FaChevronDown,
  FaChevronUp,
  FaImage,
  FaPlus,
  FaTrash,
  FaClock,
  FaCalendarAlt,
  FaStickyNote,
  FaVideo,
  FaMusic,
} from "react-icons/fa";

import ThemeEditor from "./ThemeEditor";
import BirthdayDataExport from "./BirthdayDataExport";
import BirthdayDataImport from "./BirthdayDataImport";
import BirthdayPublish from "./BirthdayPublish";

function BirthdayBuilder({
  birthdayData,
  setBirthdayData,
  resetBirthdayData,
  activeTheme,
  setActiveTheme,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const updateField = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateHero = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  const updateMessage = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      messages: [
        {
          ...prev.messages?.[0],
          [field]: value,
        },
      ],
    }));
  };

  const updateGift = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      gift: {
        ...prev.gift,
        [field]: value,
      },
    }));
  };

  const updateFinalWish = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      finalWish: {
        ...prev.finalWish,
        [field]: value,
      },
    }));
  };

  const updateVideo = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      video: {
        ...prev.video,
        [field]: value,
      },
    }));
  };

  const handleVideoUpload = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateVideo("url", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const updateMusic = (field, value) => {
    setBirthdayData((prev) => ({
      ...prev,
      music: {
        ...prev.music,
        [field]: value,
      },
    }));
  };

  const handleMusicUpload = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateMusic("url", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const updateGalleryItem = (index, field, value) => {
    setBirthdayData((prev) => {
      const updatedGallery = [...(prev.gallery || [])];

      updatedGallery[index] = {
        ...updatedGallery[index],
        [field]: value,
      };

      return {
        ...prev,
        gallery: updatedGallery,
      };
    });
  };

  const handleGalleryImageUpload = (index, file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateGalleryItem(index, "image", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const addGalleryItem = () => {
    setBirthdayData((prev) => ({
      ...prev,
      gallery: [
        ...(prev.gallery || []),
        {
          image: "",
          caption: "New memory",
        },
      ],
    }));
  };

  const removeGalleryItem = (index) => {
    setBirthdayData((prev) => ({
      ...prev,
      gallery: (prev.gallery || []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  const updateTimelineItem = (index, field, value) => {
    setBirthdayData((prev) => {
      const updatedTimeline = [...(prev.timeline || [])];

      updatedTimeline[index] = {
        ...updatedTimeline[index],
        [field]: value,
      };

      return {
        ...prev,
        timeline: updatedTimeline,
      };
    });
  };

  const handleTimelineImageUpload = (index, file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateTimelineItem(index, "image", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const addTimelineItem = () => {
    setBirthdayData((prev) => ({
      ...prev,
      timeline: [
        ...(prev.timeline || []),
        {
          date: "New Date",
          title: "New Memory",
          description: "Write something special about this memory.",
          image: "",
        },
      ],
    }));
  };

  const removeTimelineItem = (index) => {
    setBirthdayData((prev) => ({
      ...prev,
      timeline: (prev.timeline || []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  const updateSpecialDateItem = (index, field, value) => {
    setBirthdayData((prev) => {
      const updatedDates = [...(prev.specialDates || [])];

      updatedDates[index] = {
        ...updatedDates[index],
        [field]: value,
      };

      return {
        ...prev,
        specialDates: updatedDates,
      };
    });
  };

  const addSpecialDateItem = () => {
    setBirthdayData((prev) => ({
      ...prev,
      specialDates: [
        ...(prev.specialDates || []),
        {
          title: "New Special Date",
          date: "New Date",
          note: "Write why this date is special.",
        },
      ],
    }));
  };

  const removeSpecialDateItem = (index) => {
    setBirthdayData((prev) => ({
      ...prev,
      specialDates: (prev.specialDates || []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  const updateMemoryCardItem = (index, field, value) => {
    setBirthdayData((prev) => {
      const updatedMemoryCards = [...(prev.memoryCards || [])];

      updatedMemoryCards[index] = {
        ...updatedMemoryCards[index],
        [field]: value,
      };

      return {
        ...prev,
        memoryCards: updatedMemoryCards,
      };
    });
  };

  const addMemoryCardItem = () => {
    setBirthdayData((prev) => ({
      ...prev,
      memoryCards: [
        ...(prev.memoryCards || []),
        {
          title: "New Memory Card",
          text: "Write something meaningful here.",
        },
      ],
    }));
  };

  const removeMemoryCardItem = (index) => {
    setBirthdayData((prev) => ({
      ...prev,
      memoryCards: (prev.memoryCards || []).filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  return (
    <motion.div
      className="fixed left-4 top-4 z-[60] w-[calc(100%-2rem)] max-w-md rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur md:left-6 md:top-6"
      initial={{ opacity: 0, y: -20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-white theme-primary-bg">
            <FaPen />
          </div>

          <div>
            <p className="text-sm font-bold text-gray-800">
              Birthday Builder
            </p>
            <p className="text-xs text-gray-500">Edit content live</p>
          </div>
        </div>

        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="max-h-[75vh] overflow-y-auto px-5 pb-5">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Name
              </label>
              <input
                value={birthdayData.name || ""}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Birthday person name"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Birthday Date
              </label>
              <input
                type="date"
                value={birthdayData.birthdayDate || ""}
                onChange={(e) => updateField("birthdayDate", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Hero Title
              </label>
              <input
                value={birthdayData.hero?.title || ""}
                onChange={(e) => updateHero("title", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Happy Birthday, Amaya"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Hero Subtitle
              </label>
              <textarea
                value={birthdayData.hero?.subtitle || ""}
                onChange={(e) => updateHero("subtitle", e.target.value)}
                rows="3"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="A little surprise made with love..."
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Button Text
              </label>
              <input
                value={birthdayData.hero?.buttonText || ""}
                onChange={(e) => updateHero("buttonText", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Open Your Surprise"
              />
            </div>

            <ThemeEditor
              birthdayData={birthdayData}
              setBirthdayData={setBirthdayData}
              activeTheme={activeTheme}
              setActiveTheme={setActiveTheme}
            />

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                    <FaImage />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Gallery Images
                    </p>
                    <p className="text-xs text-gray-500">
                      Upload and preview memories
                    </p>
                  </div>
                </div>

                <button
                  onClick={addGalleryItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg"
                  title="Add image"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="space-y-4">
                {(birthdayData.gallery || []).map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white bg-white/90 p-3 shadow-sm"
                  >
                    <div className="mb-3 overflow-hidden rounded-xl bg-gray-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.caption || `Gallery ${index + 1}`}
                          className="h-36 w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-36 w-full items-center justify-center text-xs text-gray-400">
                          No image selected
                        </div>
                      )}
                    </div>

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Upload Image
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleGalleryImageUpload(index, e.target.files[0])
                      }
                      className="mb-3 w-full text-xs text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-pink-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-pink-600"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Caption
                    </label>

                    <input
                      value={item.caption || ""}
                      onChange={(e) =>
                        updateGalleryItem(index, "caption", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="Write image caption"
                    />

                    <button
                      onClick={() => removeGalleryItem(index)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                    >
                      <FaTrash />
                      Remove Image
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Timeline Memories
                    </p>
                    <p className="text-xs text-gray-500">
                      Edit important moments
                    </p>
                  </div>
                </div>

                <button
                  onClick={addTimelineItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg"
                  title="Add timeline memory"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="space-y-4">
                {(birthdayData.timeline || []).map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white bg-white/90 p-3 shadow-sm"
                  >
                    <div className="mb-3 overflow-hidden rounded-xl bg-gray-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title || `Timeline ${index + 1}`}
                          className="h-36 w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-36 w-full items-center justify-center text-xs text-gray-400">
                          No timeline image selected
                        </div>
                      )}
                    </div>

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Upload Timeline Image
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleTimelineImageUpload(index, e.target.files[0])
                      }
                      className="mb-3 w-full text-xs text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-pink-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-pink-600"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Date
                    </label>

                    <input
                      value={item.date || ""}
                      onChange={(e) =>
                        updateTimelineItem(index, "date", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="10 January 2022"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Title
                    </label>

                    <input
                      value={item.title || ""}
                      onChange={(e) =>
                        updateTimelineItem(index, "title", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="The Day We Met"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Description
                    </label>

                    <textarea
                      value={item.description || ""}
                      onChange={(e) =>
                        updateTimelineItem(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows="3"
                      className="mb-3 w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="Write timeline memory description"
                    />

                    <button
                      onClick={() => removeTimelineItem(index)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                    >
                      <FaTrash />
                      Remove Timeline Memory
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Special Dates
                    </p>
                    <p className="text-xs text-gray-500">
                      Edit meaningful date cards
                    </p>
                  </div>
                </div>

                <button
                  onClick={addSpecialDateItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg"
                  title="Add special date"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="space-y-4">
                {(birthdayData.specialDates || []).map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white bg-white/90 p-3 shadow-sm"
                  >
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Title
                    </label>

                    <input
                      value={item.title || ""}
                      onChange={(e) =>
                        updateSpecialDateItem(index, "title", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="First Met"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Date
                    </label>

                    <input
                      value={item.date || ""}
                      onChange={(e) =>
                        updateSpecialDateItem(index, "date", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="10 January 2022"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Note
                    </label>

                    <textarea
                      value={item.note || ""}
                      onChange={(e) =>
                        updateSpecialDateItem(index, "note", e.target.value)
                      }
                      rows="3"
                      className="mb-3 w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="Write why this date is special"
                    />

                    <button
                      onClick={() => removeSpecialDateItem(index)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                    >
                      <FaTrash />
                      Remove Special Date
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                    <FaStickyNote />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Memory Cards
                    </p>
                    <p className="text-xs text-gray-500">
                      Edit emotional note cards
                    </p>
                  </div>
                </div>

                <button
                  onClick={addMemoryCardItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg"
                  title="Add memory card"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="space-y-4">
                {(birthdayData.memoryCards || []).map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white bg-white/90 p-3 shadow-sm"
                  >
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Card Title
                    </label>

                    <input
                      value={item.title || ""}
                      onChange={(e) =>
                        updateMemoryCardItem(index, "title", e.target.value)
                      }
                      className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="Something I admire about you"
                    />

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Card Text
                    </label>

                    <textarea
                      value={item.text || ""}
                      onChange={(e) =>
                        updateMemoryCardItem(index, "text", e.target.value)
                      }
                      rows="3"
                      className="mb-3 w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                      placeholder="Write the memory card message"
                    />

                    <button
                      onClick={() => removeMemoryCardItem(index)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                    >
                      <FaTrash />
                      Remove Memory Card
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                  <FaVideo />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Video Message
                  </p>
                  <p className="text-xs text-gray-500">
                    Upload and edit birthday video
                  </p>
                </div>
              </div>

              <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100">
                {birthdayData.video?.url ? (
                  <video
                    src={birthdayData.video.url}
                    className="h-44 w-full object-cover"
                    controls
                    playsInline
                  />
                ) : (
                  <div className="flex h-44 w-full items-center justify-center text-xs text-gray-400">
                    No video selected
                  </div>
                )}
              </div>

              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Upload Video
              </label>

              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleVideoUpload(e.target.files[0])}
                className="mb-3 w-full text-xs text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-pink-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-pink-600"
              />

              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Video Title
              </label>

              <input
                value={birthdayData.video?.title || ""}
                onChange={(e) => updateVideo("title", e.target.value)}
                className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="A small video message"
              />

              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Video Subtitle
              </label>

              <textarea
                value={birthdayData.video?.subtitle || ""}
                onChange={(e) => updateVideo("subtitle", e.target.value)}
                rows="3"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="A little moment made just for you."
              />
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
                  <FaMusic />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Background Music
                  </p>
                  <p className="text-xs text-gray-500">
                    Upload or update music URL
                  </p>
                </div>
              </div>

              {birthdayData.music?.url ? (
                <audio
                  src={birthdayData.music.url}
                  className="mb-4 w-full"
                  controls
                />
              ) : (
                <div className="mb-4 flex h-20 w-full items-center justify-center rounded-2xl bg-gray-100 text-xs text-gray-400">
                  No music selected
                </div>
              )}

              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Upload Music
              </label>

              <input
                type="file"
                accept="audio/*"
                onChange={(e) => handleMusicUpload(e.target.files[0])}
                className="mb-3 w-full text-xs text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-pink-100 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-pink-600"
              />

              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Music URL / Path
              </label>

              <input
                value={birthdayData.music?.url || ""}
                onChange={(e) => updateMusic("url", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="/music/birthday/background.mp3"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Message Title
              </label>
              <input
                value={birthdayData.messages?.[0]?.title || ""}
                onChange={(e) => updateMessage("title", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="A message for you"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Personal Message
              </label>
              <textarea
                value={birthdayData.messages?.[0]?.text || ""}
                onChange={(e) => updateMessage("text", e.target.value)}
                rows="4"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Write your birthday message..."
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Message Signature
              </label>
              <input
                value={birthdayData.messages?.[0]?.signature || ""}
                onChange={(e) => updateMessage("signature", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="With love"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Gift Title
              </label>
              <input
                value={birthdayData.gift?.title || ""}
                onChange={(e) => updateGift("title", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="One last surprise"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Gift Subtitle
              </label>
              <textarea
                value={birthdayData.gift?.subtitle || ""}
                onChange={(e) => updateGift("subtitle", e.target.value)}
                rows="2"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Tap the gift and reveal a little secret..."
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Gift Button Text
              </label>
              <input
                value={birthdayData.gift?.buttonText || ""}
                onChange={(e) => updateGift("buttonText", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Reveal Your Gift"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Gift Message
              </label>
              <textarea
                value={birthdayData.gift?.hiddenMessage || ""}
                onChange={(e) => updateGift("hiddenMessage", e.target.value)}
                rows="3"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Your hidden surprise message..."
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Final Wish Title
              </label>
              <input
                value={birthdayData.finalWish?.title || ""}
                onChange={(e) => updateFinalWish("title", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Happy Birthday Again"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Final Wish Message
              </label>
              <textarea
                value={birthdayData.finalWish?.message || ""}
                onChange={(e) => updateFinalWish("message", e.target.value)}
                rows="3"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Final birthday wish..."
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Final Button Text
              </label>
              <input
                value={birthdayData.finalWish?.buttonText || ""}
                onChange={(e) => updateFinalWish("buttonText", e.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Replay Surprise"
              />
            </div>

            <BirthdayPublish birthdayData={birthdayData} />

            <BirthdayDataImport
              setBirthdayData={setBirthdayData}
              setActiveTheme={setActiveTheme}
            />

            <BirthdayDataExport birthdayData={birthdayData} />

            <button
              onClick={resetBirthdayData}
              className="w-full rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100"
            >
              Reset All Changes
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default BirthdayBuilder;