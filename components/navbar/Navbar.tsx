"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon as Menu2, X } from "lucide-react"
import { Menu } from "./Menu"

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
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#FDFDFC] text-black shadow-md" : "bg-transparent text-white"
        } ${isMenuOpen && "bg-[#536DC9] shadow-none"}`}
      >
        <div className=" flex h-20 items-center justify-between md:px-8 px-4">
          <Link href="/" className="text-2xl font-bold text-secondary">
            <span className="block">Layal</span>
            <span className="block -mt-1">mirror booth</span>
          </Link>

          <button
            className="relative z-50 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-10 text-secondary transition-all duration-300 cursor-pointer" />
            ) : (
              <Menu2 className={`size-10 transition-all duration-300 ${isScrolled ? "text-primary" : "text-white"} cursor-pointer`} />
            )}
          </button>
        </div>
      </header>

      <Menu isOpen={isMenuOpen} />
    </>
  )
}

