'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-card shadow-2xl shadow-purple-500/10 py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold flex items-center space-x-2">
            <Zap className="text-cyan-400 animate-pulse" size={28} />
            <span className="gradient-text animate-glow">Vivek</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-3 glass-card rounded-xl hover:bg-white/10 transition-all duration-300 neon-glow"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 text-cyan-400 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={24} />
              <X className={`absolute inset-0 transition-all duration-300 text-purple-400 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={24} />
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card rounded-2xl p-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-6 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:scale-105 border border-transparent hover:border-cyan-400/30"
                onClick={() => setIsOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 0.1}s`
                }}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                  <span>{item.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}