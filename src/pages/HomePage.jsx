import React from "react";
import "../styles/fonts.css";
import "../styles/CascadingSquares.css";
import "../styles/HomePage.css";
import DesignLaunchSteps from "../components/DesignSteps";
import DesignContests from "../components/DesignContest.js";
import RecentWinners from "../components/RecentWinners";
import IntroPage from "../components/IntroPage";
import PricingCards from "../components/PricingCards";
import logoNamesByIndustry from "../assets/images/Logo Names By Industry.svg";

const HomePage = () => {
  return (
    <div
      className="flex flex-col bg-page-bg text-white leading-[1.3] relative"
      style={{
        fontFamily: "'Product Sans', sans-serif",
      }}
    >
      <main className="flex flex-col">
        <IntroPage />
        {/* Test 2 */}
        <section className="w-full bg-[#FCFBFA]">
          <DesignLaunchSteps className="max-w-[1920px] mx-auto" />
        </section> 

        <section className="w-flex">
          <DesignContests />
        </section> 


        <section className="w-full">
          <RecentWinners />
        </section>
        <section className="w-full bg-white py-[100px]">
          <PricingCards />
        </section>
        <section className="w-full">
          <img 
            src={logoNamesByIndustry}
            alt="Logo Names By Industry" 
            className="w-screen h-auto"
          />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default HomePage;
