"use client";

import { motion } from "framer-motion";
import { MessageCircle, SearchCheck, Headphones } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Entre em Contato",
    description:
      "Fale com nosso time pelo WhatsApp ou telefone. Sem burocracia — uma conversa rápida já é suficiente para entendermos o seu cenário.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    step: "02",
    icon: SearchCheck,
    title: "Análise do Seu Negócio",
    description:
      "Realizamos um diagnóstico completo da sua situação fiscal, trabalhista e societária para montar a estratégia mais adequada e econômica.",
    color: "bg-gold-50 text-gold-700 border-gold-100",
    iconBg: "bg-gold-100",
  },
  {
    step: "03",
    icon: Headphones,
    title: "Assessoria Contínua",
    description:
      "A partir daí, cuidamos de tudo: obrigações mensais, declarações, folha de pagamento e atualizações legais. Você foca no seu negócio.",
    color: "bg-teal-50 text-teal-700 border-teal-100",
    iconBg: "bg-teal-100",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Processo simples
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-5 leading-tight">
            Como{" "}
            <span className="italic text-navy-600">funciona</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Do primeiro contato à assessoria permanente em apenas três passos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(16.667%-1px)] right-[calc(16.667%-1px)] h-px bg-gradient-to-r from-blue-200 via-gold-300 to-teal-200" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-7">
                    {/* Outer ring */}
                    <div className={`w-28 h-28 rounded-full border-2 ${step.color} flex items-center justify-center bg-white shadow-lg`}>
                      <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center`}>
                        <Icon size={28} strokeWidth={1.75} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-800 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-navy-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm md:text-base max-w-sm mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-navy-800 text-center"
        >
          <p className="text-white/90 text-lg font-medium mb-2">
            Pronto para simplificar sua contabilidade?
          </p>
          <p className="text-white/50 text-sm mb-6">
            A primeira conversa é gratuita. Sem compromisso.
          </p>
          <a
            href="https://wa.me/5567999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20servi%C3%A7os%20da%20Facont%20Contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Começar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
