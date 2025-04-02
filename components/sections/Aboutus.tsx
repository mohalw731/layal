import Image from "next/image";
import React from "react";
import aboutus from "../../public/aboutus.webp";
import Modalbutton2 from "../ui/Modalbutton2";

export default function Aboutus() {
  return (
    <main className="md:p-8 p-4 flex flex-col-reverse md:flex-row items-center justify-evenly " id="omoss">
      <div className=" max-w-[700px]  space-y-4">
        <span className="bg-[#E0B0FF] px-4 py-2 rounded-full text-primary font-bold ">
          Om oss
        </span>
        <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
          MirrorBooth tar ditt event till <br /> en ny nivå{" "}
          <span className="text-secondary">!</span>
        </h2>
        <p className="md:text-lg text-tertiary ">
          Välkommen till Leyalmirrorbooth! En mirror booth är det ultimata
          tillägget för att höja stämningen på ditt event. Oavsett om det är ett
          bröllop, företagsevent, eller födelsedagsfest, kommer vår moderna
          fotobås att bli kvällens höjdpunkt och en riktig snackis. Vi levererar
          och ställer upp fotobåset med guldbelaminerade pelare och röd matta,
          och vi är med under hela festen för att assistera gästerna och göra er
          kväll till en succé. Med den senaste teknologin och många roliga
          funktioner, ger vår mirror booth dina gäster både en fantastisk
          upplevelse och ett minne att ta med sig hem. Perfekt för att göra
          varje tillställning unik och minnesvärd!
        </p>

<Modalbutton2 />
      </div>

      <Image
        src={aboutus}
        alt="Sparkly background"
        height={1000}
        className="object-cover border-10 border-[#F5F6F0] rounded-2xl md:w-[400px] w-full md:mt-0 mb-10"
        />
    </main>
  );
}
