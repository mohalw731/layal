import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import hero from "../../public/hero.png";
export default function Hero() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Sparkly background"
            fill
            priority
            className="object-cover brightness-50 bg-black"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-start justify-end p-8 pb-24 text-white container">
          <h1 className="mb-2 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            Hyr en
          </h1>
          <h1 className="mb-6 text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
            <span className="text-secondary">Mirror Booth</span> till ditt event
          </h1>
          <button className="group flex items-center space-x-2 text-xl font-medium text-white transition-all hover:text-secondary ">
            <span>Boka oss nu</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
