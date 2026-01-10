// my image carousel logic

"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "https://picsum.photos/id/600/600/400",
      alt: "Forest",
    },
    {
      src: "https://picsum.photos/id/100/600/400",
      alt: "Beach",
    },
    {
      src: "https://picsum.photos/id/200/600/400",
      alt: "Yak",
    },
    {
      src: "https://picsum.photos/id/300/600/400",
      alt: "Hay",
    },
    {
      src: "https://picsum.photos/id/400/600/400",
      alt: "Plants",
    },
    {
      src: "https://picsum.photos/id/500/600/400",
      alt: "Building",
    },
  ];
  return (
    <div className="flex items-center justify-center h-screen">
      {currentImage > 0 && (
        <div onClick={() => setCurrentImage((prev) => prev - 1)}>
          <ArrowLeft />
        </div>
      )}
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        key={currentImage}
        className="w-[600px] h-[400px] object-contain mx-2"
      />
      {currentImage < images.length - 1 && (
        <div onClick={() => setCurrentImage((prev) => prev + 1)}>
          <ArrowRight />
        </div>
      )}
    </div>
  );
};
export default ImageCarousel;
