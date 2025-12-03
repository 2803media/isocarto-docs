import clsx from "clsx";

export default function VimeoVideo({ videoId, className }) {
  return (
    <div
      className={clsx(
        "my-10 aspect-video w-full overflow-hidden rounded-xl shadow-2xl dark:shadow-black/50",
        className
      )}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0`}
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        title="Vidéo Isocarto"
      ></iframe>
    </div>
  );
}
