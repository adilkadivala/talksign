"use client";

import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { BellIcon } from "lucide-react";
import { Button } from "./ui/button";

export const CallToAction = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-primary/15 flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full -rotate-45 origin-top-left  outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* <Pattern length={300} /> */}
        <div className="w-full md:max-w-7/12 py-2 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 bg-white shadow-primary text-primary overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]"
          >
            <BellIcon /> Latest updates
          </Badge>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-primary text-3xl md:text-5xl font-semibold leading-tight md:leading-14 font-sans tracking-tight">
              Get updated from Talksign
            </div>
            <div className="self-stretch text-center text-primary/65 dark:text-secondary/65 text-base leading-7 font-sans font-medium">
              By signing up, you agree to receive product updates and
              announcements from Talksign. You can opt out at any time via the
              unsubscribe link in our emails.
              <br />
              Your subscription is subject to our Terms of Service and Privacy
              Policy.
            </div>
          </div>
          <div className="w-full max-w-124.25 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col md:flex-row justify-start items-center gap-2">
              <Input
                type="email"
                placeholder="john@gmail.com"
                className="border border-primary"
              ></Input>

              <Button className="cursor-pointer">Sign up</Button>
            </div>
          </div>
        </div>
        {/* <Pattern length={300} /> */}
      </div>
    </div>
  );
};
