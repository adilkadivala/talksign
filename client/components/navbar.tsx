import { ArrowUpRight, Hand } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="w-full h-12 sm:h-14 md:h-16 lg:h-21 absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
        <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-10.5 border-t border-primary/15"></div>

        <div className="w-full max-w-[calc(100%-62px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-225 lg:w-255 h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-accent shadow-[0px_0px_0px_0.1px_#000000] dark:shadow-[0px_0px_0px_0.1px_#d97757] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
          <div className="flex justify-center items-center">
            <div className="flex justify-start items-center">
              <div className="flex justify-center gap-1 items-center text-primary text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide font-serif">
                <Hand className="animate-pulse" />
                <Link href="/">Talksign</Link>
              </div>
            </div>
          </div>
          <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <div className="flex justify-start items-center">
              <div className="flex justify-center gap-1.5 item-center text-primary text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                <ArrowUpRight size="16" />
                <Link href="#features">Join waitlist</Link>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="flex justify-center gap-1.5 items-center text-primary text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                <ArrowUpRight size="16" /> <Link href="#todos">Careers</Link>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="flex justify-center gap-1.5 item-center text-primary text-xs md:text-[13px] font-medium leading-3.5 font-sans">
                <ArrowUpRight size="16" /> <Link href="#pricing">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
