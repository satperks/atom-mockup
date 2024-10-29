import React from "react";
import atomLogoFull from "../assets/images/atom_logo_full_fin.png";
import atomBackground from "../assets/images/atom_background.svg";
import CascadingSquares from "./CascadingSquares";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const IntroPage = () => {
  return (
    <div className="h-[90vh] flex flex-col">
      <section className="h-[10%] relative overflow-hidden">
        <img 
          src={atomLogoFull} 
          alt="Atom Logo" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      <section 
        className="h-[90%] pt-4 md:pt-6 lg:pt-8"
        style={{
          backgroundImage: `url(${atomBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center h-full">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-[#2b2e36]">
                <p className="text-[50px] m-0 mb-[5px]">
                  The Smartest & Fastest Way
                </p>
                <p className="text-[50px]">
                  to Launch a Logo Design Contest
                </p>
              </h1>

              <p className="mx-auto max-w-[700px] text-[#484d5b] md:text-xl mt-2 mb-8">
                Launch a logo design contest to engage hundreds of branding
                experts through our agency-level crowdsourced naming process.
              </p>
              <div className="my-8">
                <CascadingSquares />
              </div>
            </div>
            <div className="space-x-4 mt-4">
              <Button 
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff533c] px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-[#ff533c]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff533c] disabled:pointer-events-none disabled:opacity-50"
                onClick={() => window.location.href = 'https://www.atom.com/start-contest'}
              >
                Start Your Contest
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#2b2e36] px-6 py-3 text-base font-medium text-[#2b2e36] shadow-sm transition-colors hover:bg-[#2b2e36]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2b2e36] disabled:pointer-events-none disabled:opacity-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroPage;