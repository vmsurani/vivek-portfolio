"use client"
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vivek
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Frontend Developer passionate about creating amazing web experiences 
              with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Code size={16} />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Coffee size={16} />
                <span className="text-sm">Coffee Lover</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:vivek@example.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={20} className="group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
                <p>📧 vivek@example.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2024 Vivek. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee size={16} className="text-amber-400" />
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Built with Next.js & Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  )
}