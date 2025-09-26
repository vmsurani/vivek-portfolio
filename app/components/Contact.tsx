import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vivek@example.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-cyan-500',
      href: 'mailto:vivek@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      color: 'from-green-500 to-emerald-500',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Available for local meetings',
      color: 'from-purple-500 to-pink-500',
      href: '#'
    },
    {
      icon: Calendar,
      title: 'Schedule',
      value: 'Book a Meeting',
      description: 'Let\'s discuss your project',
      color: 'from-orange-500 to-red-500',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
        </AnimatedSection>
        
        <div className="max-w-7xl mx-auto">
          {/* Contact Methods */}
          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{method.value}</p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="fadeLeft" delay={400}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Work Together</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question, want to discuss a project, or just want to say hi, 
                    I'd love to hear from you!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <MessageCircle className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Quick Response</h4>
                      <p className="text-gray-600 text-sm">I typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <Calendar className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Flexible Schedule</h4>
                      <p className="text-gray-600 text-sm">Available for meetings across different time zones</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-gray-800 mb-3">What I Can Help With:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Frontend Development Projects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>React/Next.js Applications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>UI/UX Implementation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Code Reviews & Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fadeRight" delay={600}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300">
                      <option>Select budget range</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    <span className="font-semibold">Send Message</span>
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}