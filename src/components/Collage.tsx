"use client";

type CollageItem = {
  src: string;
  alt?: string;
};

export default function Collage({
  images,
  /** Control columns at breakpoints */
  columnsClass = "columns-1 md:columns-2 lg:columns-3",
  /** If true, we apply varied fixed heights with object-cover for a consistent look */
  cropHeights = true,
}: {
  images: CollageItem[];
  columnsClass?: string;
  cropHeights?: boolean;
}) {
  // Subtle “random-ish” look per index
  const patterns = [
    { h: "h-48", rotate: "-rotate-1", offset: "translate-x-1", z: "z-10" },
    { h: "h-64", rotate: "rotate-1", offset: "translate-x-2", z: "z-20" },
    { h: "h-56", rotate: "-rotate-2", offset: "-translate-x-1", z: "z-10" },
    { h: "h-72", rotate: "rotate-1", offset: "translate-x-3", z: "z-30" },
    { h: "h-44", rotate: "-rotate-1", offset: "translate-x-1", z: "z-10" },
    { h: "h-60", rotate: "rotate-2", offset: "-translate-x-2", z: "z-20" },
  ];

  return (
    <section>
      <div className={`${columnsClass} gap-4`}>
        {images.map((img, i) => {
          const p = patterns[i % patterns.length];
          return (
            <figure
              key={img.src + i}
              className={`break-inside-avoid inline-block w-full mb-4 ${p.z}`}
            >
              <img
                src={img.src}
                alt={img.alt ?? "Collage image"}
                loading="lazy"
                className={[
                  "w-full",
                  cropHeights ? p.h : "", // remove to let intrinsic height vary
                  "object-cover",
                  "rounded-2xl",
                  "shadow-xl shadow-black/30",
                  "border border-white/20",
                  "transition-transform duration-300",
                  "hover:scale-[1.02]",
                  p.rotate,
                  p.offset,
                ].join(" ")}
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
