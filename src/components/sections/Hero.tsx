"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { clinicData } from "@/data/data";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[var(--color-secondary)] pt-20 lg:min-h-[820px]">
      <div className="absolute right-[-9rem] top-24 h-72 w-72 rounded-full border border-[var(--color-primary)]/10" />
      <div className="mx-auto grid min-h-[680px] max-w-[1280px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[.86fr_1.14fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[var(--color-primary)]">
            <span className="h-px w-10 bg-[var(--color-accent)]" />{clinicData.hero.eyebrow}
          </div>
          <h1 className="max-w-[620px] font-serif text-[3.25rem] leading-[1.02] tracking-[-.035em] text-[var(--color-primary)] sm:text-[4.25rem] lg:text-[5.15rem]">
            {clinicData.hero.headline}
          </h1>
          <p className="mt-7 max-w-[530px] text-lg leading-8 text-[var(--color-muted)]">{clinicData.hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a whileHover={{ y: -3 }} href="#booking" className="flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(22,76,70,.18)]">
              {clinicData.hero.primaryCta}<ArrowRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="#services" className="flex h-14 items-center justify-center gap-3 rounded-full border border-[var(--color-primary)]/25 px-7 text-sm font-semibold text-[var(--color-primary)]">
              {clinicData.hero.secondaryCta}<ArrowDown size={16} />
            </motion.a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-muted)]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[var(--color-primary)]"><Check size={14} /></span>{clinicData.hero.trustLine}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative h-[430px] sm:h-[520px] lg:h-[650px]">
          <div className="absolute bottom-0 right-0 h-[92%] w-[94%] overflow-hidden rounded-t-[220px] rounded-b-[24px] shadow-[0_30px_70px_rgba(24,49,46,.14)]">
            <Image src={clinicData.hero.image} alt={clinicData.hero.imageAlt} fill priority sizes="(max-width: 1024px) 94vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute bottom-8 left-0 rounded-2xl border border-white/70 bg-[var(--color-surface)]/95 p-5 shadow-[0_16px_40px_rgba(24,49,46,.12)] backdrop-blur sm:left-[-20px] sm:p-6">
            <div className="font-serif text-3xl text-[var(--color-primary)]">18</div><div className="mt-1 text-xs font-bold uppercase tracking-[.15em] text-[var(--color-muted)]">Years of care</div>
          </div>
          <div className="absolute right-[-8px] top-16 hidden rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-white sm:block">Care with intention</div>
        </motion.div>
      </div>
    </section>
  );
}
