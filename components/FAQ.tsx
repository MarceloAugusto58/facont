"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Qual o melhor regime tributário para minha empresa?",
    answer:
      "Depende do seu faturamento anual, margem de lucro e atividade exercida. Para empresas com faturamento até R$ 4,8 milhões, o Simples Nacional costuma ser vantajoso. Já o Lucro Presumido pode ser melhor para negócios com margem alta, e o Lucro Real para empresas com lucro baixo ou prejuízo. Nossa equipe faz uma análise personalizada e gratuita para identificar a melhor opção para o seu caso.",
  },
  {
    question: "Posso contratar serviços contábeis sem sair de casa?",
    answer:
      "Sim! Nosso atendimento é totalmente digital. Toda a comunicação, envio de documentos e entregas são feitos de forma remota, sem que você precise se deslocar. Utilizamos ferramentas seguras para troca de documentos e mantemos você informado em tempo real sobre o andamento de cada obrigação.",
  },
  {
    question: "O que acontece se minha empresa atrasar uma obrigação fiscal?",
    answer:
      "Atrasos em obrigações fiscais geram multas e juros que podem ser significativos. Com a Facont, você conta com um calendário de obrigações gerenciado pela nossa equipe, que cuida de todos os prazos e envia lembretes proativos. Em caso de imprevistos, orientamos sobre as melhores opções de regularização, incluindo programas de parcelamento disponíveis.",
  },
  {
    question: "Como funciona a contabilidade para MEI?",
    answer:
      "O MEI tem obrigações simplificadas: pagamento mensal do DAS (guia unificada), declaração anual do DASN-SIMEI e emissão de notas fiscais quando necessário. Ajudamos MEIs com a gestão dessas obrigações, além de orientar sobre limites de faturamento, atividades permitidas, contratação de funcionário e, quando chega a hora, a transição para ME ou EPP.",
  },
  {
    question: "Quanto custa um serviço de contabilidade?",
    answer:
      "Os honorários variam conforme o porte da empresa, número de funcionários, regime tributário e volume de operações. Trabalhamos com planos mensais transparentes, sem taxas ocultas. Entre em contato para receber uma proposta personalizada e gratuita para o seu negócio.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="border border-navy-100 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-50/50 transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="font-serif font-semibold text-navy-800 text-base md:text-lg pr-4 leading-snug group-hover:text-navy-900 transition-colors">
          {faq.question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-white transition-transform duration-300 group-hover:bg-gold-500">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-charcoal/65 leading-relaxed border-t border-navy-50 pt-5">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Dúvidas frequentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-5 leading-tight">
            Perguntas{" "}
            <span className="italic text-navy-600">frequentes</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Respondemos as dúvidas mais comuns de quem está começando ou já
            tem uma empresa.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-charcoal/50 text-sm mb-3">
            Ainda tem dúvidas? Nossa equipe está pronta para te ajudar.
          </p>
          <a
            href="https://wa.me/5567999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors group text-sm"
          >
            Perguntar no WhatsApp
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
