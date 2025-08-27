"use client";

import { useState } from "react";

export default function Example() {
  return (
    <section className="bg-cyan-950 h-screen relative overflow-hidden">
      {/* Background left - Dark section */}
      <div className="absolute inset-0 bg-gray-900 z-10 [clip-path:polygon(0%_0%,60%_0%,40%_100%,0%_100%)] md:[clip-path:polygon(0%_0%,60%_0%,40%_100%,0%_100%)]" />

      {/* Background right - Animated tech section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-600 via-blue-700 to-slate-800 [clip-path:polygon(60%_0%,100%_0%,100%_100%,40%_100%)] md:[clip-path:polygon(60%_0%,100%_0%,100%_100%,40%_100%)]">
        {/* Animated background */}
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
              animation: "gridMoveComplex 18s linear infinite", // raskere
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
              animation: "gridMoveDiagonal 14s linear infinite reverse", // raskere
              willChange: "transform",
            }}
          />

          {/* ---------- NEW: Tiny fading dots layer ---------- */}
          {[...Array(60)].map((_, i) => {
            const size = 3 + (i % 2); // 2-3px små sirkler
            const left = (i * 17) % 100; // jevn spredning
            const top = (i * 29) % 100;
            const drift = 30 + (i % 20); // hvor langt de driver
            const dur = 6 + (i % 5); // 6-10s
            const delay = (i * 0.37) % 8;

            // varier retning litt
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
                  // Custom properties for retning/styrke
                  ["--dx" as any]: `${dirX * drift}px`,
                  ["--dy" as any]: `${dirY * drift}px`,
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
          {/* ---------- END tiny dots ---------- */}

          {/* Multi-directional particles with connecting lines */}
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
                {/* Main particle (gjør den litt mindre for “punkt”-følelse) */}
                <div
                  className="absolute rounded-full bg-blue-300 opacity-90 shadow-lg shadow-blue-400/50"
                  style={{
                    width: "6px",
                    height: "6px",
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    animation: `floatMulti${i % 4} ${
                      4.5 + (i % 4)
                    }s ease-in-out ${animationDelay}s infinite`, // raskere
                    willChange: "transform, opacity",
                  }}
                />

                {/* Connecting lines (raskere) */}
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
                    }s ease-in-out ${lineAnimationDelay}s infinite`, // halvert ca.
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
                      }s ease-in-out ${(i * 0.9) % 6}s infinite`, // raskere
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
                  }s linear ${animationDelay}s infinite`, // litt raskere
                  willChange: "transform, opacity",
                }}
              />
            );
          })}

          {/* Flowing waves - fortsatt rolig, men litt raskere */}
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
                  }s ease-in-out ${animationDelay}s infinite`, // raskere
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>

        {/* CSS animations */}
        <style jsx>{`
          /* existing keyframes (noen gjort raskere via varighet over) */

          /* NEW: tiny dot drift & fade */
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
            } /* forsvinner */
          }

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

      {/* White diagonal line separator */}
      <div className="absolute inset-0 z-15 bg-white [clip-path:polygon(59.5%_0%,60.5%_0%,40.5%_100%,39.5%_100%)] md:[clip-path:polygon(59.5%_0%,60.5%_0%,40.5%_100%,39.5%_100%)]" />

      {/* Main content grid */}
      <div className="relative z-20 h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Description */}
        <div className="flex items-center justify-center text-white px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Selvstendig IT-konsulent
            </h1>
            <p className="text-lg md:text-xl mb-8 font-bold">
              Enkle, effektive og pålitelige IT-løsninger
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-white text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-300 transition duration-300"
              >
                Kontakt
              </a>
              <a
                href=""
                className="text-white px-6 py-3 rounded-full text-base font-semibold hover:text-black transition duration-300 border border-white hover:bg-white hover:text-black"
              >
                Lær mer →
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Photo */}
        <div className="flex items-center justify-center px-4">
          <a href="#">
          <img
            className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
            src="creator.jpg"
            alt="Creator"
          />
          </a>
        </div>
      </div>
    </section>
  );
}
