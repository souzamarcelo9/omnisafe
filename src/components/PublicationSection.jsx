import { motion } from "framer-motion";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Cercas Elétricas e Concertinas: Sua Proteção Reforçada!",
      date: "2 de abril de 2025",
      category: "Nenhum comércio",
      description: "Mantenha sua propriedade segura com cercas elétricas e concertinas de alta qualidade. Nossos sistemas são eficazes para dissuadir invasores e proteger seu patrimônio. A OMNISAFE...",
      image: "https://images.pexels.com/photos/2004164/pexels-photo-2004164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Câmeras de Segurança: Proteja o Que Importa!",
      date: "15 de março de 2025",
      category: "Segurança Eletrônica",
      description: "Monitore sua casa ou comércio de qualquer lugar com câmeras de segurança modernas e eficientes. Trabalhamos com instalação e manutenção de CFTV, câmeras Wi-Fi e...",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Automação de Portões: Mais Segurança e Praticidade!",
      date: "2 de abril de 2025",
      category: "Nenhum comércio",
      description: "Automatizar seu portão traz conforto, praticidade e mais segurança para sua casa ou empresa. Na OMNISAFE, realizamos instalação, manutenção e reparo, garantindo um funcionamento eficiente...",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
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
          <h1 className="text-4xl font-bold text-white mb-4">Últimas publicações</h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{pub.title}</h2>
                <div className="flex text-sm text-gray-300 mb-4">
                  <span>{pub.date}</span>
                  <span className="mx-2">•</span>
                  <span>{pub.category}</span>
                </div>
                <p className="text-gray-200 mb-4">{pub.description}</p>
                <button className="text-white font-medium hover:text-blue-200 transition-colors border-b border-white border-opacity-0 hover:border-opacity-100 pb-1">
                  Leia mais...
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;