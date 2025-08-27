"use client";

import { Check } from "lucide-react";
import clsx from "clsx";

const totalYears = [
  { label: "1st Year", status: "completed" },
  { label: "2nd Year", status: "completed" },
  { label: "3rd Year", status: "current" },
  { label: "4th Year", status: "upcoming" },
  { label: "5th Year", status: "upcoming" },
];

export default function StudyProgress() {
  return (
    <div className="mt-12 flex flex-col items-center">
      {/* Top: Category Labels */}
      <div className="flex justify-center w-full mb-4">
        <div className="flex w-[calc(100%-4rem)] justify-between">
          <div className="w-[60%] text-center text-sm font-semibold text-cyan-500 ml-2">
            Bachelor
          </div>
          <div className="w-[40%] text-center text-sm font-semibold text-cyan-500 ml-[70px]">
            Master
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex items-center justify-center">
        {totalYears.map((year, index) => (
          <div key={index} className="flex items-center">
            {/* Circle */}
            <div
              className={clsx(
                "w-8 h-8 rounded-full flex items-center justify-center border-2 z-10",
                {
                  "bg-cyan-500 text-white border-cyan-600":
                    year.status === "completed",
                  "border-cyan-600 text-cyan-500": year.status === "current",
                  "border-gray-300 text-gray-300": year.status === "upcoming",
                }
              )}
            >
              {year.status === "completed" && <Check size={16} />}
              {year.status === "current" && (
                <div className="relative">
                  <div className="absolute w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <div className="w-2 h-2 bg-cyan-500 rounded-full z-10" />
                </div>
              )}
            </div>

            {/* Line to next node */}
            {index < totalYears.length - 1 && (
              <div
                className={clsx("h-0.5 w-12", {
                  "bg-cyan-600": totalYears[index + 1].status !== "upcoming",
                  "bg-gray-300": totalYears[index + 1].status === "upcoming",
                })}
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom: Year Labels */}
      <div className="flex justify-center mt-2">
        {totalYears.map((year, index) => (
          <div key={index} className="w-20 text-xs text-center">
            <span
              className={clsx({
                "text-cyan-500 font-semibold": year.status !== "upcoming",
                "text-gray-400": year.status === "upcoming",
              })}
            >
              {year.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
