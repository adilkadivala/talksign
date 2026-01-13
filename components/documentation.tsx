"use client";

import { useState } from "react";
import { Pattern } from "./pattern";
import { Badge } from "./ui/badge";
import { ChevronsDownIcon, ChevronsLeftIcon, CircleDot } from "lucide-react";

interface FAQItem {
  title: string;
  desc: string;
}
interface ProductsItem {
  title: string;
  description: string;
  cta: string[] | string;
  bgGradient: string;
}

export function DocumentationSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const products: ProductsItem[] = [
    {
      title: "TalkSign OS",
      description:
        "One accessibility layer that powers glasses, mobile, web, desktop, meeting, and video apps.",
      cta: "Learn more →",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      title: "TalkSign Glasses",
      description:
        "Experience the freedom to communicate hands-free, whether at home, at work, or on the move.",
      cta: ["Pre-order now →", "Learn more →"],
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      title: "TalkSign API",
      description:
        "Bring real-time speech and sign language translation into your product with our APIs.",
      cta: "Request access →",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
  ];

  const faqData: FAQItem[] = [
    {
      title: "Works both online and offline",
      desc: "Stay connected wherever you are",
    },
    {
      title: "Switch between text, voice, and sign language",
      desc: "Flexible communication options",
    },
    {
      title: "Stay informed with notifications, maps, messages, and more",
      desc: "Stay connected and informed",
    },
  ];

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-154 px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            className="px-3.5 py-1.5 bg-white shadow-primary text-primary overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]"
            variant="outline"
          >
            <CircleDot />
            Accessibility Platform
          </Badge>

          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
            The world's first unified AI accessibility platform
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Breakthrough AI that instantly translates speech and sign language,
            helping you stay connected and present without barriers.
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="self-stretch border-b border-primary/15 px-4 md:px-6 lg:px-24 py-8 md:py-12 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-265 flex flex-col md:flex-row justify-center items-stretch gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex-1 min-h-80 md:md:min-h-95 bg-linear-to-br ${product.bgGradient} shadow-[0px_0px_0px_1px_rgba(55,50,47,0.12)] overflow-hidden rounded-lg flex flex-col justify-between p-6 md:p-8`}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[#49423D] text-lg md:text-xl font-semibold leading-tight font-sans">
                  {product.title}
                </h3>
                <p className="text-[#605A57] text-sm md:text-base font-normal leading-6 font-sans">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                {Array.isArray(product.cta) ? (
                  product.cta.map((btn, idx) => (
                    <button
                      key={idx}
                      className="h-9 px-4 py-2 relative bg-white hover:bg-gray-50 text-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-colors"
                    >
                      <div className="flex flex-col justify-center text-sm font-medium leading-5 font-sans">
                        {btn}
                      </div>
                    </button>
                  ))
                ) : (
                  <button className="h-9 px-4 py-2 relative bg-white hover:bg-gray-50 text-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-colors">
                    <div className="flex flex-col justify-center text-sm font-medium leading-5 font-sans">
                      {product.cta}
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}

      <div className="w-full flex justify-center items-start">
        <Pattern length={50} />
        <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
          {/* Left Column - Header */}
          <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
            <div className="w-full flex flex-col justify-center text-primary font-semibold leading-tight md:leading-11 font-sans text-4xl tracking-tight">
              One system. More accessibility.
            </div>
            <div className="w-full text-primary/65 dark:text-secondary/65 text-base font-normal leading-7 font-sans">
              Available on glasses, mobile, web,
              <br className="hidden md:block" />
              and video calls
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
            <div className="w-full flex flex-col">
              {faqData.map((item, index) => {
                const isOpen = openItems.includes(index);
                return (
                  <div
                    key={index}
                    className="w-full border-b border-primary/15 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-5 py-4.5 flex justify-between items-center gap-5 text-left hover:bg-primary transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 text-primary text-base font-medium leading-6 font-sans group-hover:text-secondary transition-all">
                        {item.title}
                      </div>
                      <div className="flex justify-center items-center">
                        <ChevronsDownIcon
                          className={`w-6 h-6 text-primary group-hover:text-secondary transition-transform duration-300 ease-in-out ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-4.5 text-primary/65 dark:text-secondary/65 text-sm font-normal leading-6 font-sans">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Pattern length={50} />
      </div>
    </div>
  );
}
