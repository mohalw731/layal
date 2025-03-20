import Image from "next/image";
import React from "react";
import aboutus from "../../public/delivery.jpeg";
import Modalbutton from "../ui/Modalbutton";

export default function DeliverSection() {
  return (
    <main className="md:p-8 p-4 flex flex-col md:flex-row items-center justify-evenly ">
      <div className=" max-w-[700px]  space-y-4">
        <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
          Vart levererar vi
          <span className="text-secondary"> ?</span>
        </h2>
        <p className="md:text-lg text-tertiary ">
          Välkommen till Leyalmirrorbooth! En mirror booth är det ultimata
          tillägget för att höja stämningen på ditt event. Oavsett om det är ett
          bröllop, företagsevent, eller födelsedagsfest, kommer vår moderna
          fotobås att bli kvällens höjdpunkt och en riktig snackis. Vi levererar
        </p>

        <div className=" flex f md:flex-row md:space-x-10 space-x-5">
          <ul>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Stockholm
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Västerås
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Uppsala
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Eskilstuna
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Gävle
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Örebro
            </div>
          </ul>
          <ul>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Kristianstad
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Helsingborg
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Landskrona
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Halmstad
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Båstad
            </div>
           
          </ul>
          <ul>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Simrishamn
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Eslöv
            </div>
            <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Lund
            </div>
             <div className="">
              <span className="text-4xl font-bold text-secondary pr-2">.</span>
              Köpenhamn
            </div>
          </ul>
        </div>

        <Modalbutton />
      </div>

      <Image
        src={aboutus}
        alt="Sparkly background"
        height={1000}
        className="object-cover border-10 border-[#F5F6F0] rounded-2xl md:w-[400px] w-full md:mt-0 mt-4 grayscale"
      />
    </main>
  );
}
