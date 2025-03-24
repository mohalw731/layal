"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Modalbutton from "../ui/Modalbutton";
// import hero from "../../public/";

export default function Hero() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative h-screen w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50 md:bg-black"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end md:p-8 p-4 pb-24 text-white container">
          {pathname === "/foretag" ? (
            <>
              <h1 className="mb-2 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
                Lyft ditt
              </h1>
              <h1 className="mb-6 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
                <span className="text-secondary">företagsevent</span> med oss
              </h1>
            </>
          ) : (
            <>
              <h1 className="mb-2 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
                Hyr en
              </h1>
              <h1 className="mb-6 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
                <span className="text-secondary">Mirror Booth</span> till ditt event
              </h1>
            </>
          )}
          <Modalbutton />
        </div>
      </section>
    </main>
  );
}