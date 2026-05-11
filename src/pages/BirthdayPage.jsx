import { useEffect, useState } from "react";

import BirthdayHero from "../components/BirthdayHero";
import BirthdayCountdown from "../components/BirthdayCountdown";
import BirthdayMessage from "../components/BirthdayMessage";
import BirthdayGallery from "../components/BirthdayGallery";
import BirthdayTimeline from "../components/BirthdayTimeline";
import BirthdayDateCards from "../components/BirthdayDateCards";
import BirthdayMemoryCards from "../components/BirthdayMemoryCards";
import BirthdayVideo from "../components/BirthdayVideo";
import BirthdayGiftReveal from "../components/BirthdayGiftReveal";
import BirthdayFinalWish from "../components/BirthdayFinalWish";
import MusicToggle from "../components/MusicToggle";
import ParticleBackground from "../components/ParticleBackground";
import BirthdayBuilder from "../components/BirthdayBuilder";

import useTheme from "../hooks/useTheme";
import defaultBirthdayData from "../data/birthdayData";

function BirthdayPage() {
  const [birthdayData, setBirthdayData] = useState(() => {
    const savedData = localStorage.getItem("birthdayData");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return defaultBirthdayData;
  });

  const { activeTheme, setActiveTheme } = useTheme(birthdayData?.themes);

  useEffect(() => {
    localStorage.setItem("birthdayData", JSON.stringify(birthdayData));
  }, [birthdayData]);

  const resetBirthdayData = () => {
    localStorage.removeItem("birthdayData");
    setBirthdayData(defaultBirthdayData);

    if (defaultBirthdayData?.themes?.length > 0) {
      setActiveTheme(defaultBirthdayData.themes[0]);
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: activeTheme?.background || "#fff7fb",
        color: activeTheme?.text || "#3b1f2b",
      }}
    >
      <ParticleBackground />

      <BirthdayBuilder
        birthdayData={birthdayData}
        setBirthdayData={setBirthdayData}
        resetBirthdayData={resetBirthdayData}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
      />

      <div className="relative z-10">
        <MusicToggle music={birthdayData.music} />

        <BirthdayHero data={birthdayData} />

        <section id="birthday-content" className="pb-24">
          <BirthdayCountdown date={birthdayData.birthdayDate} />
          <BirthdayMessage messages={birthdayData.messages} />
          <BirthdayGallery gallery={birthdayData.gallery} />
          <BirthdayTimeline timeline={birthdayData.timeline} />
          <BirthdayDateCards dates={birthdayData.specialDates} />
          <BirthdayMemoryCards cards={birthdayData.memoryCards} />
          <BirthdayVideo video={birthdayData.video} />
          <BirthdayGiftReveal gift={birthdayData.gift} />
          <BirthdayFinalWish finalWish={birthdayData.finalWish} />
        </section>
      </div>
    </main>
  );
}

export default BirthdayPage;