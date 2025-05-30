import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/5521979549810"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          style={{ width: '60px', height: '60px' }}
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </motion.div>

      {/* Footer Content */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-bold">OMNISAFE</h3>
            <p className="text-blue-200">ANTENAS E SEGURANÇA</p>
            <div className="pt-4 space-y-1">
              <a href="#" className="block hover:text-blue-300 transition">» Termos de Uso</a>
              <a href="#" className="block hover:text-blue-300 transition">» Política de Privacidade</a>
            </div>
          </motion.div>

          {/* Middle Column - Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-bold">Menu</h3>
            <div className="grid grid-cols-2 gap-x-4 pt-4">
              <div className="space-y-1">
                <a href="#" className="block hover:text-blue-300 transition">» Fale Conosco</a>
                <a href="#" className="block hover:text-blue-300 transition">» Serviços</a>
                <a href="#" className="block hover:text-blue-300 transition">» Publicações</a>
              </div>
              <div className="space-y-1">
                <a href="#" className="block hover:text-blue-300 transition">» Quem Somos</a>
                <a href="#" className="block hover:text-blue-300 transition">» Home</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-bold">Contatos</h3>
            <div className="pt-4 space-y-3">
              <div className="flex items-start">
                <FaWhatsapp className="mr-2 mt-1 text-green-400" />
                <a 
                  href="https://wa.me/5521979549810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  (21) 97954-9810
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <a href="tel:+5521979549810" className="hover:text-blue-300 transition">(21) 97954-9810</a>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">✉️</span>
                <a href="mailto:contato@omnisafe.com.br" className="hover:text-blue-300 transition">contato@omnisafe.com.br</a>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Maricá / RJ</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center pt-12 mt-8 border-t border-blue-800 text-blue-300 text-sm"
        >
          © {new Date().getFullYear()} OMNISAFE Antenas e Segurança Eletrônica. Todos os direitos reservados.
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;