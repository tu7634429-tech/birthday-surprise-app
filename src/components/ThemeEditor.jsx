import { FaPalette } from "react-icons/fa";

function ThemeEditor({
  birthdayData,
  setBirthdayData,
  activeTheme,
  setActiveTheme,
}) {
  const updateActiveTheme = (field, value) => {
    if (!activeTheme) return;

    const updatedTheme = {
      ...activeTheme,
      [field]: value,
    };

    setActiveTheme(updatedTheme);

    setBirthdayData((prev) => ({
      ...prev,
      themes: (prev.themes || []).map((theme) =>
        theme.id === activeTheme.id ? updatedTheme : theme
      ),
    }));
  };

  if (!activeTheme) return null;

  return (
    <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full text-white theme-primary-bg">
          <FaPalette />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-800">Theme Editor</p>
          <p className="text-xs text-gray-500">
            Customise colours for this surprise
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl bg-white/90 p-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Current Theme Preview
        </p>

        <div
          className="rounded-2xl p-4"
          style={{
            backgroundColor: activeTheme.background,
            color: activeTheme.text,
          }}
        >
          <div
            className="mb-3 h-10 w-10 rounded-full"
            style={{ backgroundColor: activeTheme.primary }}
          />

          <p className="text-sm font-bold">{activeTheme.name}</p>
          <p className="text-xs opacity-70">
            This is how your theme colours will feel.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Theme Name
          </label>

          <input
            value={activeTheme.name || ""}
            onChange={(e) => updateActiveTheme("name", e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
            placeholder="My Custom Theme"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Primary Colour
          </label>

          <div className="flex gap-3">
            <input
              type="color"
              value={activeTheme.primary || "#ec4899"}
              onChange={(e) => updateActiveTheme("primary", e.target.value)}
              className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-white p-1"
            />

            <input
              value={activeTheme.primary || ""}
              onChange={(e) => updateActiveTheme("primary", e.target.value)}
              className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
              placeholder="#ec4899"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Secondary Colour
          </label>

          <div className="flex gap-3">
            <input
              type="color"
              value={activeTheme.secondary || "#fce7f3"}
              onChange={(e) => updateActiveTheme("secondary", e.target.value)}
              className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-white p-1"
            />

            <input
              value={activeTheme.secondary || ""}
              onChange={(e) => updateActiveTheme("secondary", e.target.value)}
              className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
              placeholder="#fce7f3"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Background Colour
          </label>

          <div className="flex gap-3">
            <input
              type="color"
              value={activeTheme.background || "#fff7fb"}
              onChange={(e) => updateActiveTheme("background", e.target.value)}
              className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-white p-1"
            />

            <input
              value={activeTheme.background || ""}
              onChange={(e) => updateActiveTheme("background", e.target.value)}
              className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
              placeholder="#fff7fb"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Text Colour
          </label>

          <div className="flex gap-3">
            <input
              type="color"
              value={activeTheme.text || "#3b1f2b"}
              onChange={(e) => updateActiveTheme("text", e.target.value)}
              className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-white p-1"
            />

            <input
              value={activeTheme.text || ""}
              onChange={(e) => updateActiveTheme("text", e.target.value)}
              className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
              placeholder="#3b1f2b"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeEditor;