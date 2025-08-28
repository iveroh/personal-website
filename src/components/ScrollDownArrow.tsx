"use client";

export default function ScrollDownArrow({ subtract = 0 }: { subtract?: number }) {
  const handleClick = () => {
    const amount = Math.max(0, window.innerHeight - subtract);
    window.scrollBy({ top: amount, behavior: "smooth" });
  };

  return (
    <>
      <button
        type="button"
        aria-label="Scroll down"
        onClick={handleClick}
        className="group absolute left-1/2 -translate-x-1/2 bottom-6 z-30 rounded-full border border-white/40 backdrop-blur bg-white/10 hover:bg-white/20 p-3 shadow-lg shadow-black/30 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 active:scale-95 flex items-center justify-center"
        style={{
          animation: "nudge 2.4s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style jsx>{`
        @keyframes nudge {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </>
  );
}