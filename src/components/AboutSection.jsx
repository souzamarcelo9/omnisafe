import { motion } from "framer-motion";
import { FaShieldAlt, FaTools, FaUserTie } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" id="about">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Nossa História</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="IMPSAT Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-900/30"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10">
              <h3 className="text-white text-xl font-bold mb-2">+20 anos</h3>
              <p className="text-blue-200">de experiência</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
                OMNISAFE Antenas e Segurança Eletrônica
              </span>
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              Desde 2003, a OMNISAFE tem sido referência em Maricá, Niterói e toda a região dos lagos, oferecendo soluções completas em segurança e tecnologia. Nossa jornada começou com a instalação de antenas e evoluiu para sistemas integrados de segurança eletrônica.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600/30 p-3 rounded-lg border border-blue-500/30">
                    <FaShieldAlt className="text-blue-300 text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Missão</h4>
                  <p className="text-gray-300">
                    Proporcionar segurança e comodidade através de soluções tecnológicas inovadoras, com atendimento personalizado e suporte contínuo.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600/30 p-3 rounded-lg border border-blue-500/30">
                    <FaTools className="text-blue-300 text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Expertise</h4>
                  <p className="text-gray-300">
                    Especialistas em automação de portões, sistemas CFTV, cercas elétricas e alarmes, com equipe técnica altamente qualificada.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600/30 p-3 rounded-lg border border-blue-500/30">
                    <FaUserTie className="text-blue-300 text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Compromisso</h4>
                  <p className="text-gray-300">
                    Atendimento ético e transparente, garantindo a satisfação dos clientes com soluções eficientes e duradouras.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-block"
            >
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center"
              >
                Fale com nossos especialistas
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;