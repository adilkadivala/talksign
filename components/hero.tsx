"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Pattern } from "./pattern";

export function Hero() {
  return (
    <>
      <section id="features" className="flex flex-col items-center">
        <Badge
          variant="outline"
          className="w-fit h-fit font-serif font-bold text-[14px] tracking-wider"
        >
          Backed by <Badge className="border rounded-3xl">11ElevenLabs</Badge>
        </Badge>
        <div className="text-center max-w-3xl py-10 px-4">
          <h1 className="text-primary text-2xl md:text-7xl font-serif leading-tight">
            Communicate effortlessly with anyone, anywhere.
          </h1>

          <p className="text-primary/65 dark:text-secondary/65 mt-4 text-sm md:text-lg ">
            Connect, communicate, and be understood everywhere with AI that
            translates speech and sign language in real-time.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild className="px-11 py-5 rounded-full">
            <Link href="/">Get early access</Link>
          </Button>
        </div>

        <div className="w-full h-full mt-10">
          <Pattern length={100} />
          <div className="relative flex-1 w-full h-75 md:h-87.5 lg:h-175 overflow-hidden rounded-lg">
            <video
              className="w-full h-full object-cover"
              src="/talksign.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="TalkSign product demo"
            />
          </div>
          <Pattern length={200} />
        </div>
      </section>
    </>
  );
}
