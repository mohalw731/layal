"use client";
import Link from "next/link";
import { Facebook, Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser'
import Image from "next/image";
import tiktok from '../../public/tiktok.svg'

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_r2nagjs', // Replace with your EmailJS service ID
        'template_3759v1i', // Replace with your EmailJS template ID
        form.current,
        'yFUabeU5ZqCAjkeiu' // Replace with your EmailJS user ID
      )
        .then((result) => {
          console.log(result.text);
          alert('Meddelandet har skickats!');
        }, (error) => {
          console.log(error.text);
          alert('Något gick fel, försök igen.');
        });
    }
  };

  return (
    <footer className="w-full bg-[#f8f8f5] md:p-8 p-4" id="kontakt">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
            Vid frågor kontakta oss 
            <span className="text-secondary"> .</span>
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[#5d5fef] text-sm">
                Namn
              </label>
              <Input id="name" name="name" placeholder="Johan andersson" className="bg-white border-gray-200" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#5d5fef] text-sm">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Johananderson@example.com"
                className="bg-white border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-[#5d5fef] text-sm">
                Meddelande
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Skriv ditt meddelande här :)"
                className="bg-white border-gray-200 min-h-[100px]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="submit" className="bg-[#5d5fef] hover:bg-[#4b4ddb] text-secondary cursor-pointer">Skicka</Button>
            </div>
          </form>
        </div>

        {/* Right column - Links and contact info */}
        <div>
          <h2 className="text-3xl font-bold text-primary  my-6">
            Länkar & info
            <span className="text-secondary"> .</span>
          </h2>
          <nav className="space-y-2 mb-6">
            <Link href="#" className="block text-[#5d5fef]">
              Hem
            </Link>
            <Link href="#omoss" className="block text-[#5d5fef]">
              Om oss
            </Link>
            <Link href="/foretag" className="block text-[#5d5fef]">
              För företag
            </Link>
            <Link href="#faq" className="block text-[#5d5fef]">
              Vanliga frågor
            </Link>
            <Link href="#kontakt" className="block text-[#5d5fef]">
              Kontakt oss
            </Link>
          </nav>

          <div className="space-y-2 text-[#5d5fef]">
            <p>Kontakt@leyalmirrorbooth.se</p>
            <p>073-4202175</p>
            <p>Skåne: 072-9175563</p>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              href="https://www.instagram.com/leyalmirrorbooth/"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#5d5fef] "
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@leyalmirrorbooth"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#5d5fef] text-[#5d5fef]"
            >
              <Image src={tiktok} alt="tiktok" width={20} height={20} className="color-[#5d5fef]"/>
            </Link>
            <Link
              href="https://www.facebook.com/groups/1099783776814194/user/61573122861027/"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#5d5fef] "
            >
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}