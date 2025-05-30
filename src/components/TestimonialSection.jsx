import { motion } from "framer-motion";

const TestimonialsSection = () => {
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

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Depoimentos de Clientes</h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de segurança e automação
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-200 italic mb-6">"{testimonial.content}"</p>
              
              {/* Client Info */}
              <div className="border-t border-white border-opacity-20 pt-4">
                <h3 className="text-white font-semibold">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-xs mt-1">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg">
            Deixe seu depoimento
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;