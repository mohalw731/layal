"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon as Menu2, X } from "lucide-react"
import { Menu } from "./Menu"
import Image from "next/image"
import logo from "../../public/logo.svg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        className={`absolute left-0 top-0 z-50 w-full transition-all duration-300 bg-transparent`}
      >
        <div className="flex h-20 items-center justify-between md:px-8 px-4">
          <Link href="/" className="mt-20">
            {/* <Image src={logo} alt="Logo" 
          className="md:w-[150px] w-[120px]" height={50} /> */}
          <h2 className="text-3xl leading-8 font-bold text-primary  ">Leyal <br /><span className="text-secondary"> Mirror booth</span></h2>
          </Link>

          <button
            className="relative z-50 flex items-center justify-center focus:outline-none mt-16"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-10 text-secondary transition-all duration-300 cursor-pointer" />
            ) : (
              <Menu2 className={`size-10 transition-all duration-300 ${isScrolled ? "text-secondary" : "text-white"} cursor-pointer`} />
            )}
          </button>
        </div>
      </header>

      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}