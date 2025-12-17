import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export default function VimeoVideo({ videoId, className }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Empêcher le scroll quand zoomé
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isZoomed) {
        setIsZoomed(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isZoomed]);

  return (
    <>
      {/* Version normale */}
      <div
        className={clsx(
          "group relative my-10 aspect-video w-full overflow-hidden rounded-xl shadow-2xl dark:shadow-black/50",
          className,
          isZoomed && "invisible"
        )}
      >
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
          title="Vidéo Isocarto"
        ></iframe>

        <button
          onClick={toggleZoom}
          className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-200 hover:bg-black/70 group-hover:opacity-100"
          aria-label="Agrandir la vidéo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>

      {/* Version zoomée (overlay) */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={toggleZoom}
        >
          <div
            className="relative w-full max-w-7xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0`}
              className="h-full w-full rounded-xl"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Vidéo Isocarto"
            ></iframe>

            <button
              onClick={toggleZoom}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Fermer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
