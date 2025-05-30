import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Solicite um orçamento</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Com compromisso, qualidade e experiência, garantimos soluções eficientes para a sua segurança e comodidade. Conte com a OMNISAFE SISTEMAS!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Diferenciais Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Diferenciais</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Nosso carro-chefe é a automatização de portões, incluindo troca de roldanas, guias, conserto de estrutura e substituição de trilhos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Destaque na instalação e manutenção de câmeras de segurança: DVRs, câmeras Wi-Fi e sistemas CFTV</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Instalação de vídeo porteiro, interfonia para condomínios, fechaduras eletrônicas e magnéticas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Instalação de painéis solares e ventiladores de teto</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">FALE CONOSCO</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2">Serviço de interesse</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="portoes">Automação de Portões</option>
                  <option value="cameras">Câmeras de Segurança</option>
                  <option value="alarmes">Alarmes e Vídeo Porteiro</option>
                  <option value="painel">Painéis Solares</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Solicitar Orçamento
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;