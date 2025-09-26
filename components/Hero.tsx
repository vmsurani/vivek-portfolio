import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Vivek</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vivek@example.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="space-x-4">
            <a
              href="#projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}