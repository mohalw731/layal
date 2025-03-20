"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface MenuProps {
  isOpen: boolean
  toggleMenu?: () => void
}

export function Menu({ isOpen, toggleMenu }: MenuProps) {
  const [mounted, setMounted] = useState(false)
  const [animatedLinks, setAnimatedLinks] = useState<boolean[]>([])

  const links = [
    { href: "/", label: "Hem" },
    { href: "#omoss", label: "Om oss" },
    { href: "#tjanster", label: "Våra Tjänster" },
    { href: "#faq", label: "Vanliga Frågor" },
    { href: "/foretag", label: "För Företag" },
    { href: "#kontakt", label: "Kontakt oss" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const newAnimatedLinks = links.map((_, index) => {
          const delay = setTimeout(() => {
            setAnimatedLinks((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }, index * 100)
          return () => clearTimeout(delay)
        })

        return () => {
          newAnimatedLinks.forEach((cleanup) => cleanup && cleanup())
        }
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setAnimatedLinks([])
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-[#536DC9] transition-all duration-500 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="container mx-auto px-6">
        <ul className="flex flex-col items-center space-y-6 text-start justify-center">
          {links.map((link, index) => (
            <li
              key={index}
              className={`transform transition-all duration-500 ${
                isOpen && animatedLinks[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={link.href} className="md:text-7xl text-4xl font-bold text-secondary" onClick={toggleMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
      </nav>
    </div>
  )
}

