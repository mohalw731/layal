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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile() // Initial check
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = [
    { href: "/", label: "Hem" },
    { href: "#omoss", label: "Om oss" },
    { href: "/foretag", label: "Företag" },    
    { href: "#faq", label: "Vanliga Frågor" },
    { href: "#kontakt", label: "Kontakt oss" },
  ]

  return (
    <>
      <header
        className={`fixed ${isScrolled ? "bg-[#EEEEEE] shadow-md" : "bg-transparent"} left-0 top-0 z-50 w-full transition-all duration-300 `}
      >
        <div className="flex h-20 items-center justify-between md:px-8 px-4">
          {/* Logo - hidden on desktop when centered */}
          <Link href="/" className="md:hidden">
            <h2 className="text-2xl leading-6 font-bold text-primary">
              Leyal <br /><span className="text-secondary">Mirror booth</span>
            </h2>
          </Link>

          {/* Desktop Navigation - centered */}
          {!isMobile && (
            <div className="hidden md:flex items-center justify-center flex-1">
              <Link href="/" className="absolute left-8">
                <h2 className="text-2xl leading-6 font-bold text-primary">
                  Leyal <br /><span className="text-secondary">Mirror booth</span>
                </h2>
              </Link>
              <nav className="mx-auto">
                <ul className="flex items-center space-x-8">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className={`text-lg font-medium transition-colors ${isScrolled ? "hover:text-secondary text-primary" : "hover:text-primary text-secondary"}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile ? (
            <button
              className="relative z-50 flex items-center justify-center focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="size-10 text-secondary transition-all duration-300 cursor-pointer" />
              ) : (
                <Menu2 className={`size-10 transition-all duration-300 ${isScrolled ? "text-secondary" : "text-primary"} cursor-pointer`} />
              )}
            </button>
          ) : (
            // This empty div balances the flex layout on desktop
            <div className="w-[120px]"></div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </>
  )
}