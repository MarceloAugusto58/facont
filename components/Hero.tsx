"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/556796995705?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Facont%20Contabilidade.";

const badges = [
  { icon: Shield, label: "Segurança & Conformidade" },
  { icon: TrendingUp, label: "Crescimento do Negócio" },
  { icon: Clock, label: "Atendimento Ágil" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-white/5" />
        {/* Gold accent arc bottom-left */}
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full border-2 border-gold-500/20" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-navy-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 text-sm font-medium tracking-wide">
                Escritório Contábil em Dourados, MS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-6"
            >
              Sua contabilidade{" "}
              <span className="italic text-gold-300">simplificada</span>,{" "}
              <br className="hidden md:block" />
              seu negócio em{" "}
              <span className="relative">
                crescimento
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 3 150 1 298 9"
                    stroke="#C9921A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Cuidamos de toda a burocracia contábil para que você possa focar no
              que realmente importa: fazer sua empresa crescer. Atendimento
              personalizado para MEI, autônomos e pequenas e médias empresas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-gold-600/25 hover:shadow-gold-500/40 hover:shadow-2xl hover:-translate-y-0.5 text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-medium rounded-xl transition-all duration-200 text-base"
              >
                Conhecer serviços
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={14} className="text-gold-400" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-7 shadow-2xl">

                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-1">Visão Geral</p>
                    <p className="text-white font-serif text-xl font-semibold">Sua Empresa</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-green-400 text-xs font-medium">Em dia</span>
                  </div>
                </div>

                {/* Chart area */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white/40 text-xs">Resultado mensal</p>
                    <p className="text-green-400 text-xs font-semibold">↑ +14,3% vs. mês anterior</p>
                  </div>

                  {/* Bars */}
                  <div className="flex items-end gap-2.5 h-24">
                    {[38, 55, 42, 68, 52, 76, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.45, delay: 0.55 + i * 0.07, ease: "easeOut" }}
                        style={{ height: `${h}%`, originY: 1 }}
                        className="flex-1 rounded-t-md relative overflow-hidden"
                      >
                        <div
                          className={`absolute inset-0 rounded-t-md ${
                            i === 6
                              ? "bg-gradient-to-t from-gold-600 to-gold-400"
                              : i === 5
                              ? "bg-white/25"
                              : "bg-white/12"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* X-axis labels */}
                  <div className="flex gap-2.5 mt-2">
                    {["Jan","Fev","Mar","Abr","Mai","Jun","Jul"].map((m) => (
                      <p key={m} className="flex-1 text-center text-white/25 text-[9px]">{m}</p>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-5" />

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/8">
                    <p className="text-white/35 text-[10px] mb-1.5">Tributos</p>
                    <p className="text-white font-bold text-lg leading-none">-28%</p>
                    <p className="text-green-400 text-[10px] mt-1">↓ otimizados</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/8">
                    <p className="text-white/35 text-[10px] mb-1.5">Compliance</p>
                    <p className="text-white font-bold text-lg leading-none">100%</p>
                    <p className="text-green-400 text-[10px] mt-1">✓ em dia</p>
                  </div>
                  <div className="bg-gold-500/15 rounded-xl p-3.5 border border-gold-500/25">
                    <p className="text-gold-300/70 text-[10px] mb-1.5">Economia</p>
                    <p className="text-gold-300 font-bold text-lg leading-none">R$12k</p>
                    <p className="text-gold-400 text-[10px] mt-1">↑ este ano</p>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-navy-100/20"
              >
                <p className="text-navy-800 font-semibold text-sm">
                  +15 anos de experiência
                </p>
                <p className="text-navy-400 text-xs">em Dourados, MS</p>
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="absolute -bottom-5 -left-5 bg-gold-500 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-white font-bold text-lg leading-none">500+</p>
                <p className="text-gold-100 text-xs mt-0.5">clientes atendidos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 42C1200 34 1320 18 1380 10L1440 2V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F9F7F3"
          />
        </svg>
      </div>
    </section>
  );
}
