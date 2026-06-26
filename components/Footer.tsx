"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Abertura de Empresa",
  "Contabilidade Mensal",
  "Imposto de Renda",
  "Folha de Pagamento",
  "Planejamento Tributário",
  "MEI e Autônomos",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Main footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-md">
                <span className="font-serif font-bold text-white text-sm">F</span>
              </div>
              <div className="leading-none">
                <div className="font-serif font-semibold text-white text-lg">Contabil Pro</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Seu escritório contábil de confiança em Dourados, MS. Cuidamos da
              sua empresa para você focar no crescimento.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-gold-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white/90 text-sm tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white/90 text-sm tracking-widest uppercase mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/90 text-sm tracking-widest uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Dourados, MS — Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <a
                  href="mailto:contato@contabilpro.com.br"
                  className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  contato@contabilpro.com.br
                </a>
              </li>
            </ul>

          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-white/30 text-xs">
            © 2026 Contabil Pro. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Dourados, Mato Grosso do Sul — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
