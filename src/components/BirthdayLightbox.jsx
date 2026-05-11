import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function BirthdayLightbox({ images, isOpen, selectedIndex, onClose }) {
  const slides = images.map((item) => ({
    src: item.image,
    alt: item.caption,
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={selectedIndex}
      slides={slides}
    />
  );
}

export default BirthdayLightbox;