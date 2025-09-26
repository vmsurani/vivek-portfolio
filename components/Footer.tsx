import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Vivek</div>
            <p className="text-gray-300 leading-relaxed">
              Frontend Developer passionate about creating amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vivek@example.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>© 2024 Vivek. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  )
}