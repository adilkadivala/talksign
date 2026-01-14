"use client";

import { Shield } from "lucide-react";
import { Badge } from "./ui/badge";

export function Privacy() {
  const privacyOptions = [
    {
      title: "Discover how Talksign gives you control",
      description:
        "Your personal data is secure and private at every step of your accessibility journey.",
      bgGradient: "from-cyan-50 to-cyan-100",
    },
    {
      title: "All processing happens on-device",
      description:
        "Your conversations stay private. You control what's recorded and shared with anyone.",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
    {
      title: "Built with community input",
      description:
        "Ethical data practices, and respect for cultural and linguistic diversity.",
      bgGradient: "from-violet-50 to-violet-100",
    },
  ];

  return (
    <div className="w-full border-t border-primary/15 flex flex-col justify-center items-center">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-primary/15 flex justify-center items-center gap-6">
        <div className="w-full max-w-154 px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 bg-white shadow-primary text-primary overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]"
          >
            <Shield /> Safety & Privacy
          </Badge>
          <div className="self-stretch text-center flex justify-center flex-col text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
            Safety & privacy first
          </div>
          <div className="self-stretch text-center text-primary text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Your data security and privacy are at the core of everything we
            build. Choose how your information is used.
          </div>
        </div>
      </div>

      {/* Privacy Options Grid */}
      <div className="self-stretch px-4 md:px-6 lg:px-24 py-8 md:py-12 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-265 flex flex-col md:flex-row justify-center items-stretch gap-6">
          {privacyOptions.map((option, index) => (
            <div
              key={index}
              className={`flex-1 min-h-75 md:min-h-90 bg-linear-to-br ${option.bgGradient} shadow-[0px_0px_0px_1px_rgba(55,50,47,0.12)] overflow-hidden rounded-lg flex flex-col justify-between p-6 md:p-8`}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-primary text-lg md:text-xl font-semibold leading-tight font-sans">
                  {option.title}
                </h3>
                <p className="text-primary text-sm md:text-base font-normal leading-6 font-sans">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Safety Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center gap-6">
        <div className="w-full max-w-265 flex flex-col gap-6">
          <div className="w-full p-6 md:p-8 border border-primary/15 rounded-lg bg-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-lg md:text-xl font-semibold leading-tight font-sans">
                Your Privacy, Your Choice
              </h3>
              <p className="text-primary text-sm md:text-base font-normal leading-6 font-sans">
                We believe accessibility should never compromise privacy. Every
                feature in TalkSign is designed with your consent and control in
                mind. You decide what data is collected, how it's used, and who
                has access to it. That's not just our promise—it's our
                commitment to you.
              </p>
              <button className="h-9 px-4 py-2 w-fit relative bg-[#37322F] hover:bg-[#37322F]/90 text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-colors">
                <div className="flex flex-col justify-center text-sm font-medium leading-5 font-sans">
                  Learn more →
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
