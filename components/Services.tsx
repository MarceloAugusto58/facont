"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BarChart3,
  FileText,
  Users,
  Calculator,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description:
      "Constituição e regularização da sua empresa com agilidade e segurança jurídica. CNPJ, alvará, inscrição estadual e municipal.",
    accent: "from-blue-500 to-blue-700",
    tag: "Popular",
  },
  {
    icon: BarChart3,
    title: "Contabilidade Mensal",
    description:
      "Escrituração contábil completa, balancetes, DRE e relatórios gerenciais para você tomar decisões embasadas.",
    accent: "from-navy-500 to-navy-700",
    tag: null,
  },
  {
    icon: FileText,
    title: "Imposto de Renda",
    description:
      "Declaração do IRPF e IRPJ com maximização de restituições legais. Pessoa física e jurídica com segurança.",
    accent: "from-purple-500 to-purple-700",
    tag: null,
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description:
      "Processamento de holerites, eSocial, FGTS, INSS e encargos trabalhistas dentro dos prazos legais.",
    accent: "from-teal-500 to-teal-700",
    tag: null,
  },
  {
    icon: Calculator,
    title: "Planejamento Tributário",
    description:
      "Análise do melhor regime tributário — Simples Nacional, Lucro Presumido ou Real — para reduzir legalmente sua carga fiscal.",
    accent: "from-gold-500 to-gold-700",
    tag: "Destaque",
  },
  {
    icon: Briefcase,
    title: "MEI e Autônomos",
    description:
      "Suporte completo para Microempreendedores Individuais e profissionais liberais: DAS, DASN, certificado e obrigações.",
    accent: "from-rose-500 to-rose-700",
    tag: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="servicos" className="section-pad bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
            O que oferecemos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-5 leading-tight">
            Soluções contábeis{" "}
            <span className="italic text-navy-600">completas</span>
            <br className="hidden md:block" /> para o seu negócio
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Da abertura até a gestão plena: cada serviço é desenhado para
            simplificar sua vida e garantir total conformidade fiscal.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-navy-50 hover:border-navy-100 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {service.tag && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-600 border border-gold-400/20">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" strokeWidth={1.75} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-semibold text-navy-800 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-charcoal/50 mb-4 text-sm">
            Não encontrou o que precisa? Temos muito mais a oferecer.
          </p>
          <a
            href="https://wa.me/5567999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20servi%C3%A7os%20da%20Facont%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors group"
          >
            Consulte nosso time pelo WhatsApp
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
