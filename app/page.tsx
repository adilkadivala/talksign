import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DocumentationSection } from "@/components/documentation";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Privacy } from "@/components/privacy";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative bg-accent overflow-x-hidden flex flex-col justify-start items-center ">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full mx-auto max-w-none px-2 md:px-8 lg:px-0 lg:max-w-350 lg:w-350 relative flex flex-col justify-start items-start min-h-screen overflow-hidden">
          {/* Left vertical line */}
          <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-primary/10 shadow-primary/25 z-0"></div>

          {/* Right vertical line */}
          <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-primary/10 shadow-primary/25 z-0"></div>

          <div className="self-stretch pt-2.25 overflow-hidden flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16.5 relative z-10">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <div className="pt-16 md:pt-24 lg:pt-20 flex flex-col justify-start items-center px-2 md:px-0 w-full">
              <Hero />
              <Features />
              <DocumentationSection />
              <Privacy />
              <CallToAction />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
