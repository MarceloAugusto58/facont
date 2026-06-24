"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5567999999999?text=Ol%C3%A1%2C%20quero%20contratar%20os%20servi%C3%A7os%20da%20Facont%20Contabilidade.";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-hero-pattern">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full border border-white/5" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-400/15 blur-3xl" />
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">
              Atendimento imediato via WhatsApp
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Chega de perder tempo{" "}
            <br className="hidden md:block" />
            com{" "}
            <span className="italic text-gold-300">burocracia</span>
          </h2>

          {/* Subtext */}
          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Deixe a Facont Contabilidade cuidar de toda a parte fiscal,
            trabalhista e societária da sua empresa. Você foca no crescimento —
            nós garantimos a conformidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-bold rounded-xl transition-colors duration-200 shadow-2xl shadow-gold-600/30 text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com um contador agora
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-white/35 text-sm">
            Atendimento em Dourados, MS — (67) 99999-9999 · Sem custo na
            primeira consulta
          </p>
        </motion.div>
      </div>
    </section>
  );
}
