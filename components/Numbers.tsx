"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Anos de Experiência",
    description: "Solidez e confiança no mercado contábil",
  },
  {
    value: 500,
    suffix: "+",
    label: "Clientes Atendidos",
    description: "Empresas e pessoas físicas satisfeitas",
  },
  {
    value: 300,
    suffix: "+",
    label: "Empresas Abertas",
    description: "Novos CNPJs constituídos com sucesso",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Declarações Entregues",
    description: "IRPF e IRPJ no prazo, sempre",
  },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-hero-pattern">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-navy-400/10 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Números que falam
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            A confiança de muitos,{" "}
            <span className="italic text-gold-300">comprovada</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-colors duration-300"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  active={isInView}
                />
              </div>
              <div className="text-gold-400 font-semibold text-sm md:text-base mb-2">
                {stat.label}
              </div>
              <div className="text-white/40 text-xs md:text-sm leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
