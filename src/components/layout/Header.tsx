"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { clinicData } from "@/data/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 shadow-[0_8px_30px_rgba(24,49,46,.06)] backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Return to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-serif text-xl text-white">{clinicData.brand.initials}</span>
          <span className="leading-tight">
            <span className="block text-xl font-semibold tracking-[.02em] text-[var(--color-primary)]">{clinicData.brand.name}</span>
            <span className="block text-[9px] font-bold uppercase tracking-[.24em] text-[var(--color-muted)]">{clinicData.brand.dentalName}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {clinicData.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary)]">{item.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={clinicData.contact.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"><Phone size={16} />{clinicData.contact.phone}</a>
          <a href="#booking" className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Book a visit</a>
        </div>
        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden">
            <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-5" aria-label="Mobile navigation">
              {clinicData.navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-[var(--color-border)] py-4 text-base font-medium">{item.label}</a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-[var(--color-primary)] px-5 py-3.5 text-center font-semibold text-white">Book a visit</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
