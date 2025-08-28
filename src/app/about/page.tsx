"use client";

import { useState } from "react";

import StickyNavbar from "@/components/StickyNavbar";
import Collage from "@/components/Collage";
import StudyProgress from "@/components/StudyProgress";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <section>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-blue-950">
        <StickyNavbar currentPage="about" />

        {/* Full screen animated background */}
        <div className="absolute inset-0 overflow-hidden">
        
          {/* Moving grid overlay */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
        linear-gradient(rgba(147, 197, 253, 0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(147, 197, 253, 0.4) 1px, transparent 1px)
      `,
              backgroundSize: "40px 40px",
              animation: "gridMoveComplex 18s linear infinite",
              willChange: "transform",
            }}
          />

          {/* Secondary diagonal grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
        linear-gradient(45deg, rgba(147, 197, 253, 0.3) 1px, transparent 1px),
        linear-gradient(-45deg, rgba(147, 197, 253, 0.3) 1px, transparent 1px)
      `,
              backgroundSize: "60px 60px",
              animation: "gridMoveDiagonal 14s linear infinite reverse",
              willChange: "transform",
            }}
          />

          {/* Tiny fading dots layer */}
          {[...Array(60)].map((_, i) => {
            const size = 3 + (i % 2); // pixel size
            const left = (i * 17) % 100; // spread
            const top = (i * 29) % 100; // spread
            const drift = 30 + (i % 20); // distance
            const dur = 6 + (i % 5); // life duration
            const delay = (i * 0.37) % 8;

            // direction adjustments
            const dirX = i % 2 === 0 ? 1 : -1;
            const dirY = i % 3 === 0 ? -1 : 1;

            return (
              <div
                key={`tiny-${i}`}
                className="absolute rounded-full bg-blue-200/90"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  filter: "drop-shadow(0 0 2px rgba(147,197,253,0.65))",
                  animation: `dotDrift ${dur}s ease-in-out ${delay}s infinite, dotFade ${dur}s ease-in-out ${delay}s infinite`,

                  ["--dx" as any]: `${dirX * drift}px`,
                  ["--dy" as any]: `${dirY * drift}px`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}

          {/* Particles with connecting lines */}
          {[...Array(12)].map((_, i) => {
            const leftPos = 20 + ((i * 7) % 60);
            const topPos = 20 + ((i * 11) % 60);
            const lineWidth = 40 + ((i * 13) % 80);
            const lineLeftPos = 20 + ((i * 9) % 60);
            const lineTopPos = 20 + ((i * 17) % 60);
            const animationDelay = (i * 0.5) % 5;
            const lineAnimationDelay = (i * 0.7) % 4;

            return (
              <div key={`particle-${i}`} className="absolute">
                <div
                  className="absolute rounded-full bg-blue-300 opacity-90 shadow-lg shadow-blue-400/50"
                  style={{
                    width: "6px",
                    height: "6px",
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    animation: `floatMulti${i % 4} ${
                      4.5 + (i % 4)
                    }s ease-in-out ${animationDelay}s infinite`,
                    willChange: "transform, opacity",
                  }}
                />

                {/* Connecting lines */}
                <div
                  className="absolute bg-gradient-to-r from-blue-300 via-blue-200 to-transparent opacity-30"
                  style={{
                    width: `${lineWidth}px`,
                    height: "1px",
                    left: `${lineLeftPos}%`,
                    top: `${lineTopPos}%`,
                    transformOrigin: "left center",
                    animation: `lineConnect${i % 3} ${
                      4 + (i % 6)
                    }s ease-in-out ${lineAnimationDelay}s infinite`,
                    willChange: "transform, opacity",
                  }}
                />

                {/* Secondary line */}
                {i % 3 === 0 && (
                  <div
                    className="absolute bg-gradient-to-r from-transparent via-blue-200 to-blue-300 opacity-25"
                    style={{
                      width: `${30 + ((i * 7) % 60)}px`,
                      height: "1px",
                      left: `${20 + ((i * 5) % 60)}%`,
                      top: `${20 + ((i * 13) % 60)}%`,
                      transformOrigin: "right center",
                      animation: `lineConnect${(i + 1) % 3} ${
                        5 + (i % 8)
                      }s ease-in-out ${(i * 0.9) % 6}s infinite`,
                      willChange: "transform, opacity",
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Orbiting elements */}
          {[...Array(6)].map((_, i) => {
            const orbSize = 15 + ((i * 5) % 25);
            const leftPos = (i * 17) % 100;
            const topPos = (i * 23) % 100;
            const animationDelay = (i * 1.3) % 8;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-radial from-blue-200 via-blue-400 to-transparent opacity-40"
                style={{
                  width: `${orbSize}px`,
                  height: `${orbSize}px`,
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  animation: `orbit${i % 2} ${
                    8 + (i % 6)
                  }s linear ${animationDelay}s infinite`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}

          {/* Flowing waves */}
          {[...Array(4)].map((_, i) => {
            const animationDelay = (i * 1.5) % 6;

            return (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-15"
                style={{
                  width: "100%",
                  height: "1px",
                  top: `${20 + i * 20}%`,
                  animation: `wave${i % 3} ${
                    9 + (i % 6)
                  }s ease-in-out ${animationDelay}s infinite`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-10 lg:px-16 py-20">
          {/* Left: headline + description */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Heisann, Iver her
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100/90">
              Jeg er en 22 år gammel student fra Tromsø. Akkurat nå er jeg på
              mitt siste år på bachelor i informatikk ved NTNU. <br />
              <StudyProgress />
              Gjennom studiet har jeg opparbeidet meg solid kompetanse innen
              webutvikling, programmering og systemdesign, og jeg brenner for å
              finne løsninger som er både brukervennlige og effektive. <br />
              <br />
              Ved siden av studiene har jeg jobbet med flere prosjekter – både
              egne og for andre – hvor jeg har fått erfaring med moderne
              teknologier og reelle problemstillinger. <br />
              <br />
              Som selvstendig IT-konsulent ønsker jeg å hjelpe både
              privatpersoner og bedrifter med å skape gode digitale løsninger.
            </p>
          </div>

          {/* Right: 2–3 column masonry collage */}
          <div className="md:justify-self-end max-w-xl">
            <Collage
              images={[
                { src: "creator.jpg", alt: "creator" },
                { src: "hobby.jpg", alt: "hobby 1" },
                { src: "mountain.jpg", alt: "mountain" },
                { src: "hobby2.jpg", alt: "hobby 2" },
                { src: "creator5.jpg", alt: "creator 2" },
                { src: "coffe.jpg", alt: "coffe" }
              ]}
              // columnsClass="columns-1 sm:columns-2 xl:columns-3" // tweak if you like
              // cropHeights={false} // set to false if you want natural heights (no cropping)
            />
          </div>
        </div>

        {/* CSS animations - same as HeroSection */}
        <style jsx>{`
          /* Grid animations */
          @keyframes gridMoveComplex {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(20px, -15px) rotate(1deg);
            }
            50% {
              transform: translate(40px, 10px) rotate(-1deg);
            }
            75% {
              transform: translate(20px, 35px) rotate(0.5deg);
            }
            100% {
              transform: translate(0, 0) rotate(0deg);
            }
          }

          @keyframes gridMoveDiagonal {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-30px, 30px) scale(1.05);
            }
            100% {
              transform: translate(-60px, 60px) scale(1);
            }
          }

          /* Dot animations */
          @keyframes dotDrift {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(var(--dx), var(--dy)) scale(1.05);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }

          @keyframes dotFade {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0.9;
            }
            70% {
              opacity: 0.9;
            }
            100% {
              opacity: 0;
            }
          }

          /* Particle animations */
          @keyframes floatMulti0 {
            0%,
            100% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 0.9;
            }
            25% {
              transform: translate(15px, -20px) rotate(45deg);
              opacity: 1;
            }
            50% {
              transform: translate(-10px, -25px) rotate(90deg);
              opacity: 0.8;
            }
            75% {
              transform: translate(-20px, 10px) rotate(135deg);
              opacity: 1;
            }
          }

          @keyframes floatMulti1 {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.9;
            }
            33% {
              transform: translate(-25px, 15px) scale(1.1);
              opacity: 1;
            }
            66% {
              transform: translate(20px, -15px) scale(0.9);
              opacity: 0.8;
            }
          }

          @keyframes floatMulti2 {
            0%,
            100% {
              transform: translate(0, 0) rotateY(0deg);
              opacity: 0.9;
            }
            50% {
              transform: translate(25px, 30px) rotateY(180deg);
              opacity: 1;
            }
          }

          @keyframes floatMulti3 {
            0%,
            100% {
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 0.9;
            }
            25% {
              transform: translate(-15px, 20px) rotate(30deg) scale(1.05);
              opacity: 1;
            }
            75% {
              transform: translate(30px, -10px) rotate(-30deg) scale(0.95);
              opacity: 0.8;
            }
          }

          /* Line animations */
          @keyframes lineConnect0 {
            0%,
            100% {
              opacity: 0.3;
              transform: rotate(0deg) scaleX(1);
            }
            25% {
              opacity: 0.6;
              transform: rotate(15deg) scaleX(1.2);
            }
            50% {
              opacity: 0.8;
              transform: rotate(30deg) scaleX(0.8);
            }
            75% {
              opacity: 0.5;
              transform: rotate(45deg) scaleX(1.1);
            }
          }

          @keyframes lineConnect1 {
            0%,
            100% {
              opacity: 0.25;
              transform: rotate(0deg) translateX(0);
            }
            33% {
              opacity: 0.7;
              transform: rotate(-20deg) translateX(10px);
            }
            66% {
              opacity: 0.5;
              transform: rotate(20deg) translateX(-10px);
            }
          }

          @keyframes lineConnect2 {
            0%,
            100% {
              opacity: 0.3;
              transform: rotate(0deg) scaleY(1) scaleX(1);
            }
            50% {
              opacity: 0.8;
              transform: rotate(60deg) scaleY(1.5) scaleX(0.7);
            }
          }

          /* Orbit animations */
          @keyframes orbit0 {
            0% {
              transform: rotate(0deg) translateX(25px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(25px) rotate(-360deg);
            }
          }

          @keyframes orbit1 {
            0% {
              transform: rotate(0deg) translateX(40px) rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) translateX(40px) rotate(-180deg)
                scale(1.2);
            }
            100% {
              transform: rotate(360deg) translateX(40px) rotate(-360deg)
                scale(1);
            }
          }

          /* Wave animations */
          @keyframes wave0 {
            0%,
            100% {
              transform: translateX(-100%) scaleY(1);
              opacity: 0.15;
            }
            50% {
              transform: translateX(100%) scaleY(1.2);
              opacity: 0.25;
            }
          }

          @keyframes wave1 {
            0%,
            100% {
              transform: translateX(100%) skewX(0deg);
              opacity: 0.15;
            }
            50% {
              transform: translateX(-100%) skewX(10deg);
              opacity: 0.3;
            }
          }

          @keyframes wave2 {
            0%,
            100% {
              transform: translateX(-100%) rotateZ(0deg);
              opacity: 0.15;
            }
            50% {
              transform: translateX(100%) rotateZ(3deg);
              opacity: 0.25;
            }
          }
        `}</style>
      </div>
      <Footer />
    </section>
  );
}
