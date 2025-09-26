'use client'

import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import ThreeScene from './ui/ThreeScene'
import GlowingOrb from './ui/GlowingOrb'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ThreeScene />
      
      {/* Glowing Orbs */}
      <GlowingOrb size={300} color="purple" className="absolute top-20 left-10 opacity-30" />
      <GlowingOrb size={200} color="blue" className="absolute bottom-20 right-20 opacity-40" />
      <GlowingOrb size={150} color="cyan" className="absolute top-1/2 right-10 opacity-20" />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="matrix-char absolute text-green-400 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full shadow-2xl mb-8 neon-glow">
              <Sparkles className="text-yellow-400 animate-spin" size={20} />
              <span className="text-cyan-300 font-medium">Available for new opportunities</span>
              <Zap className="text-purple-400 animate-pulse" size={16} />
            </div>
          </div>

          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
              <span className="block mb-4 text-white">Hi, I'm</span>
              <span className="gradient-text animate-pulse text-8xl md:text-9xl">
                Vivek
              </span>
            </h1>
            
            {/* 3D Floating Code Symbols */}
            <div className="absolute -top-10 -left-10 text-4xl animate-float opacity-60">⚛️</div>
            <div className="absolute -top-5 -right-15 text-3xl animate-float opacity-40" style={{ animationDelay: '1s' }}>🚀</div>
            <div className="absolute -bottom-5 left-20 text-2xl animate-float opacity-50" style={{ animationDelay: '2s' }}>💻</div>
          </div>

          <div className="h-20 mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card px-8 py-4 rounded-2xl neon-glow">
                <p className="text-2xl md:text-3xl font-bold">
                  <span 
                    key={currentRole}
                    className="inline-block gradient-text animate-pulse"
                  >
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-cyan-400 font-semibold">futuristic</span>, 
            <span className="text-purple-400 font-semibold"> responsive</span>, and 
            <span className="text-pink-400 font-semibold"> immersive</span> web experiences
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:vivek@example.com', label: 'Email', color: 'hover:text-green-400' }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={label}
                href={href}
                className={`group relative p-6 glass-card rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-125 hover:-translate-y-2 ${color} animate-float`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Icon size={28} className="transition-all duration-300 group-hover:animate-spin" />
                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 glass-card px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 text-cyan-300">
                  {label}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          <div className="space-x-6">
            <a
              href="#projects"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 neon-glow"
            >
              <Code size={24} className="group-hover:animate-spin" />
              <span className="font-bold text-lg">View My Work</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 glass-card border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <Mail size={24} />
              <span className="font-bold text-lg">Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-3 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-float">⚛️</div>
        <div className="absolute top-1/3 right-20 text-5xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🔥</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl opacity-25 animate-float" style={{ animationDelay: '4s' }}>💎</div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>⚡</div>
      </div>
    </section>
  )
}