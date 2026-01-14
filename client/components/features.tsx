import { Badge } from "./ui/badge";
import { Pattern } from "./pattern";
import { BentoCard } from "./bento-card";
import Image from "next/image";
import { Sparkle } from "lucide-react";

export function Features() {
  return (
    <section id="todos">
      <div className="w-full border-b border-primary/5 flex flex-col items-center">
        <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-primary/10 flex justify-center items-center gap-6">
          <div className="w-full max-w-146.5 px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
            <Badge variant="outline" className="px-3.5 py-1.5 bg-white shadow-primary text-primary overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]">
              <Sparkle /> features
            </Badge>
            <div className="w-full text-center flex justify-center flex-col text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 font-sans tracking-tight">
              Break every communication barrier
            </div>
            <div className="self-stretch text-center text-primary/65 dark:text-secondary/65 text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
              Stay connected to everyone and everything
              <br className="hidden sm:block" />
              that matters more easily than ever.
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="w-full flex">
          <Pattern length={200} />

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-x border-primary/5">
            <BentoCard
              title="Connect with anyone"
              desc="Be fully present and participate in everyday conversations and moments. Talk to friends, family, and strangers without any barriers."
            >
              <div className="rounded-tl-lg rounded-bl-lg overflow-hidden">
                <Image
                  src="/connect.png"
                  width="800"
                  height="200"
                  alt="bento-grid-img"
                  className="object-cover w-fit h-fit"
                />
              </div>
            </BentoCard>

            <BentoCard
              title="Learn without limits"
              desc="Follow every lecture, ask questions, and participate in learning discussions. Learn at the same pace as everyone else."
            >
              {/* create a team, invite team member */}
              <div className="rounded-tl-lg rounded-bl-lg overflow-hidden">
                <Image
                  src="/learn.png"
                  width="800"
                  height="200"
                  alt="bento-grid-img"
                  className="object-cover w-fit h-fit"
                />
              </div>
            </BentoCard>

            <BentoCard
              title="Get the care you need"
              desc="Communicate directly with healthcare professionals about your health and discuss treatment options. No waiting for interpreters."
            >
              {/* chat on the task room */}
              <div className="rounded-tl-lg rounded-bl-lg overflow-hidden">
                <Image
                  src="/care.png"
                  alt="bento-grid-img"
                  width="800"
                  height="200"
                  className="object-cover w-fit h-fit"
                />
              </div>
            </BentoCard>

            <BentoCard
              title="Earn a living"
              desc="Get better jobs, grow your career, and build a more independent life."
            >
              {/* follow task and teammember */}
              <div className="rounded-tl-lg rounded-bl-lg overflow-hidden">
                <Image
                  src="/work.png"
                  alt="bento-grid-img"
                  width="800"
                  height="200"
                  className="object-cover w-fit h-fit"
                />
              </div>
            </BentoCard>
          </div>

          <Pattern length={200} />
        </div>
      </div>
    </section>
  );
}
