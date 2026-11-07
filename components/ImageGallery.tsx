"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { useLanguage } from "./LanguageContext";

interface ImageGalleryProps {
  images: string[];
  fabricName: string;
  type: string;
  composition?: string;
}

export function ImageGallery({
  images,
  fabricName,
  type,
  composition,
}: ImageGalleryProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1.5);
  const scrollRef = useRef<HTMLDivElement>(null);

  const validImages =
    images.length > 0
      ? images
      : [
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
        ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth > 0) {
      const idx = Math.min(
        validImages.length,
        Math.max(1, Math.round(scrollLeft / clientWidth) + 1)
      );
      setCurrentIndex(idx);
    }
  };

  return (
    <>
      <div className="relative w-full bg-linen overflow-hidden">
        {/* Swipeable Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative w-full aspect-square flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-pointer"
          onClick={() => setIsZoomOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`${t.tapToZoom} for ${fabricName}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsZoomOpen(true);
          }}
        >
          {validImages.map((src, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 snap-center relative aspect-square"
            >
              <Image
                src={src}
                alt={`${fabricName} view ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover select-none"
              />
            </div>
          ))}
        </div>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          {composition && (
            <span className="bg-surface/95 backdrop-blur-sm text-indigo text-xs font-semibold px-2.5 py-1 rounded-full shadow-subtle">
              {composition}
            </span>
          )}
          <span className="bg-surface/95 backdrop-blur-sm text-text-secondary text-xs font-medium px-2 py-1 rounded-full shadow-subtle">
            {type}
          </span>
        </div>

        {/* Zoom Hint Indicator */}
        <div
          onClick={() => setIsZoomOpen(true)}
          className="absolute bottom-3 left-3 bg-surface/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-indigo shadow-subtle cursor-pointer active:scale-95 transition-transform"
        >
          <Icon name="zoom_in" className="w-4 h-4 text-indigo" />
          <span className="text-[11px] font-semibold tracking-tight">
            {t.tapToZoom}
          </span>
        </div>

        {/* Counter Pill */}
        {validImages.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-indigo/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-text-on-primary text-xs font-medium tracking-wider shadow-subtle">
            {currentIndex} / {validImages.length}
          </div>
        )}
      </div>

      {/* Tap-to-Zoom Fullscreen Modal */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Zoom Inspector"
          className="fixed inset-0 z-50 bg-indigo/95 backdrop-blur-md flex flex-col items-center justify-between p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="w-full flex items-center justify-between text-text-on-primary pt-safe">
            <span className="text-xs font-semibold tracking-wide">
              {fabricName} ({currentIndex} / {validImages.length})
            </span>
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="w-10 h-10 rounded-full bg-surface/20 flex items-center justify-center text-text-on-primary hover:bg-surface/30 active:scale-95 transition-all"
              aria-label="Close zoom modal"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative w-full max-w-lg aspect-square overflow-hidden rounded-xl border border-thread/40 my-auto cursor-zoom-out"
            onClick={(e) => {
              e.stopPropagation();
              setZoomScale((prev) => (prev === 1.5 ? 2.5 : 1.5));
            }}
          >
            <Image
              src={validImages[currentIndex - 1]}
              alt={`${fabricName} zoomed weave texture`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ transform: `scale(${zoomScale})` }}
              className="object-cover transition-transform duration-200 select-none"
            />
          </div>

          <div className="text-center text-text-on-primary/80 text-xs pb-safe">
            Tap image to switch magnification • Tap outside to close
          </div>
        </div>
      )}
    </>
  );
}

