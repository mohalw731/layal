'use client';
import Hero from '@/components/sections/Hero';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modalbutton2 from '@/components/ui/Modalbutton2';
import Footer from '@/components/sections/Footer';

// Importera bilder (justera sökvägarna efter dina bilder)
import image1 from '../../public/foretag1.png';
import image2 from '../../public/foretag2.png';
import image3 from '../../public/foretag3.png';
import image4 from '../../public/card1.jpeg';

export default function Page() {
  // Lista med bilder
  const images = [image1, image2, image3, image4];

  // State för att hålla reda på vilken bild som visas
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funktion för att byta till nästa bild
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Använd useEffect för att automatiskt byta bild varje 3 sekunder
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Byt bild var 3:e sekund
    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
  }, []);

  return (
    <div>
      <Hero />
      <main className="md:p-8 p-4 flex flex-col md:flex-row items-center justify-evenly my-10">
        <div className="max-w-[700px] space-y-4">
          <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
            Mirror Booth till ert företag
          </h2>
          <p className="md:text-lg text-tertiary">
            Tänk dig att ni samlas kring det härliga företagseventet – en kväll fylld med skratt, god mat och minnesvärda stunder. Tänk er att ni också skulle kunna ta med er ett fysiskt minne av den speciella kvällen? Med LeyalMirrorBooth får ni och era anställda chansen att ta ett personligt foto med högsta kvalitet med en unik design från kvällens tema på fotoremsan – en perfekt souvenir att ta hem för att senare minnas det fantastiska företagseventet. Alla bilder från eventet sparas i ett online galleri som kommer att ge er chansen att kunna spela upp ett bildspel på kontorets skärm. Ni kan skapa en oförglömlig kväll och ge era anställda det lilla extra!
          </p>
          <Modalbutton2 />
        </div>

        {/* Bildspel */}
        <div className="relative w-full md:w-[500px] h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Bild ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl border-10 border-[#F5F6F0]"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}