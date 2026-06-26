"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Transparência em cada etapa do processo",
  "Atendimento humanizado e personalizado",
  "Tecnologia para agilidade e segurança",
  "Compliance fiscal e trabalhista rigoroso",
  "Equipe em constante atualização normativa",
];

export default function About() {
  return (
    <section id="sobre" className="section-pad bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-gold-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Quem somos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-6">
            Mais do que um escritório{" "}
            <span className="italic text-navy-600">contábil</span>
          </h2>
          <div className="gold-divider mb-7" />

          <p className="text-charcoal/65 text-lg leading-relaxed mb-5">
            A Contabil Pro nasceu com um propósito claro: ser o
            parceiro estratégico que empresários de todos os portes precisam
            para crescer com segurança. Com 36 anos de experiência em Dourados, MS,
            construímos relacionamentos baseados em confiança, transparência e
            resultado.
          </p>
          <p className="text-charcoal/65 leading-relaxed mb-8">
            Nossa equipe de contadores e especialistas é referência no atendimento
            a empresas do Lucro Real — supermercados, indústrias e empresas de
            materiais de construção — mantendo-se sempre atualizada com as
            constantes mudanças da legislação brasileira e garantindo conformidade
            total e aproveitamento máximo de créditos tributários.
          </p>

          {/* Pillars */}
          <ul className="space-y-3">
            {pillars.map((pillar, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 text-charcoal/75"
              >
                <CheckCircle2
                  size={18}
                  className="text-gold-500 shrink-0"
                  strokeWidth={2}
                />
                <span className="text-sm md:text-base">{pillar}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
