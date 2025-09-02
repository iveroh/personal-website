"use client";

import { Check } from "lucide-react";
import clsx from "clsx";

const totalYears = [
  { label: "1. klasse", status: "completed" },
  { label: "2. klasse", status: "completed" },
  { label: "3. klasse", status: "current" },
  { label: "4. klasse", status: "upcoming" },
  { label: "5. klasse", status: "upcoming" },
];

export default function StudyProgress() {
  return (
    <div className="mt-4 mb-4 flex flex-col items-center">
      
      {/* Top: Category Labels */}
      <div className="flex justify-center w-full mb-4">
        <div className="flex w-[calc(100%-4rem)] justify-between">
          <div className="w-[60%] text-center text-sm font-semibold text-white ml-10">
            Bachelor
          </div>
          <div className="w-[40%] text-center text-sm font-semibold text-white mr-[40px]">
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
                  "bg-sky-600 text-white border-sky-700":
                    year.status === "completed",
                  "border-sky-700 text-sky-600": year.status === "current",
                  "border-white text-gray-300": year.status === "upcoming",
                }
              )}
            >
              {year.status === "completed" && (
                <Check size={16} color="oklch(1.3155 0 0)" />
              )}
              {year.status === "current" && (
                <div className="relative">
                  <div className="absolute w-2 h-2 rounded-full bg-sky-700 animate-pulse" />
                  <div className="w-2 h-2 bg-white rounded-full z-10" />
                </div>
              )}
            </div>

            {/* Line to next node */}
            {index < totalYears.length - 1 && (
              <div
                className={clsx("h-0.5 w-12", {
                  "bg-sky-700": totalYears[index + 1].status !== "upcoming",
                  "bg-white": totalYears[index + 1].status === "upcoming",
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
                "text-white font-semibold": year.status !== "upcoming",
                "text-white": year.status === "upcoming",
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
