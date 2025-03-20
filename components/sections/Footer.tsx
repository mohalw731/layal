import Link from "next/link"
import { Instagram, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Title from "../ui/Title"

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f8f5] md:p-8 p-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column - Contact form */}
        <div>
        <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
          Kontakta oss
          <span className="text-secondary"> .</span>
        </h2>          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[#5d5fef] text-sm">
                Namn
              </label>
              <Input id="name" placeholder="Johan andersson" className="bg-white border-gray-200" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#5d5fef] text-sm">
                Email
              </label>
              <Input
                id="email"
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
                placeholder="Skriv ditt meddelande här :)"
                className="bg-white border-gray-200 min-h-[100px]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="bg-[#5d5fef] hover:bg-[#4b4ddb] text-white">Skicka</Button>
              <Button variant="outline" className="bg-[#e9d5ff] hover:bg-[#dbc4f0] text-[#5d5fef] border-none">
                Boka oss
              </Button>
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
            <Link href="#" className="block text-[#5d5fef]">
              Om oss
            </Link>
            <Link href="#" className="block text-[#5d5fef]">
              Vanliga frågor
            </Link>
            <Link href="#" className="block text-[#5d5fef]">
              Kontakt
            </Link>
          </nav>

          <div className="space-y-2 text-[#5d5fef]">
            <p>Kontakt@eyelmirrorobooth.se</p>
            <p>073-4202175</p>
            <p>Skåne: 073-4202175</p>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#5d5fef] text-[#5d5fef]"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#5d5fef] text-[#5d5fef]"
            >
              <Music size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

