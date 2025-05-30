import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Automação de Portões deslizantes, basculante, pivotante e de enrolar",
      description: "Venda, instalação e manutenção de motores para portões deslizantes, basculantes, pivotantes e de enrolar. Também realizamos reparos, incluindo troca de roldanas, guias, conserto de estrutura...",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // Gate automation image
    },
    {
      title: "Câmeras de Segurança e CFTV",
      description: "Venda, instalação e manutenção de câmeras de segurança, DVRs, câmeras Wi-Fi e sistemas CFTV. Monitore sua casa ou comércio em tempo real e aumente a...",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // CCTV image
    },
    {
      title: "Alarmes e Vídeo Porteiro",
      description: "Soluções completas para controle de acesso e segurança, incluindo centrais de alarme, sensores, vídeo porteiros e fechaduras eletrônicas. Proteja sua residência ou empresa com equipamentos...",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" // Alarm system image
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Serviços</h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="services">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Text Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-200 mb-4">
                  {service.description}
                </p>
                <button className="text-white font-medium hover:text-blue-200 transition-colors border-b border-white border-opacity-0 hover:border-opacity-100 pb-1">
                  Saiba mais...
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;