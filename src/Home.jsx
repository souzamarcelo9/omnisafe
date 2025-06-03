//import { useEffect, useState } from "react";
//import { motion, useAnimation } from "framer-motion";

import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";
import video from '../public/videos/motion-detection-computer-room-door-1920x1080.mp4';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const arrayMenu = ['home','about','services','public','contact'];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Modern Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-white">OMNISAFE</h1>
            <span className="ml-2 text-blue-300 text-sm">ANTENAS E SEGURANÇA</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['HOME', 'QUEM SOMOS', 'SERVIÇOS', 'PUBLICAÇÕES', 'CONTATO'].map((item,index) => (
              <motion.a
                key={item}
                href={ '#'+arrayMenu[index]}
                className="text-white hover:text-blue-300 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-blue-800 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
                {['HOME', 'QUEM SOMOS', 'SERVIÇOS', 'PUBLICAÇÕES', 'CONTATO'].map((item) => (
                  <a
                    key={item}
                    href={'#'+item}
                    className="text-white hover:text-blue-300 transition py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modern Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/80"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              INOVAÇÃO, SEGURANÇA
            </span>
            <br />
            <span className="text-white">E COMODIDADE!</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
            >
              Solicite um Orçamento
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Nossos Serviços
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white text-sm mb-2">Rolar para baixo</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Modern Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeTestimonial ? 1 : 0,
                  scale: index === activeTestimonial ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center justify-center ${index === activeTestimonial ? 'z-10' : 'z-0'}`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto border border-white/20">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl italic text-gray-200 mb-8">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-blue-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="flex justify-center mt-8 space-x-2 z-20 relative">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/5521991747325"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          style={{ width: '60px', height: '60px' }}
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </motion.div>
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    name: "Carlos Silva",
    role: "Residencial - Niterói",
    content: "A OMNISAFE instalou meu sistema de câmeras e automatizou o portão. Profissionais extremamente competentes e atenciosos. Minha família se sente muito mais segura agora!",
    rating: 5,
    date: "15 de Maio, 2025"
  },
  {
    name: "Ana Oliveira",
    role: "Comércio - Região dos Lagos",
    content: "Serviço impecável na instalação das cercas elétricas. O atendimento foi excelente e o pós-venda também. Recomendo a OMNISAFE para todos que buscam segurança de qualidade.",
    rating: 5,
    date: "2 de Abril, 2025"
  },
  {
    name: "Roberto Santos",
    role: "Condomínio - Itaboraí",
    content: "Fizemos a automação completa do condomínio com a OMNISAFE. Todos os portões e sistema de câmeras funcionam perfeitamente há mais de 2 anos sem nenhum problema.",
    rating: 4,
    date: "20 de Março, 2025"
  }
];

export default Home;