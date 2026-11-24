"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlignCenter, Baby, Brush, Check, ChevronDown, Heart, MapPin,
  Phone, ScanLine, ShieldCheck, Smile, Sparkles, ArrowRight, Clock
} from "lucide-react";
import { clinicData } from "@/data/data";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65 } };

const icons = {
  sparkles: Sparkles, shield: ShieldCheck, scan: ScanLine, smile: Smile,
  align: AlignCenter, heart: Heart, baby: Baby, brush: Brush,
} as const;

function Heading({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <motion.div {...reveal} className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[var(--color-primary)]">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight tracking-[-.02em] text-[var(--color-primary)] md:text-[3.25rem]">{title}</h2>
    </motion.div>
  );
}

export function TrustStats() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 md:grid-cols-4 md:px-8">
        {clinicData.stats.map((stat, i) => (
          <motion.div key={stat.label} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-b border-r border-[var(--color-border)] px-4 py-8 text-center last:border-r-0 md:border-b-0 md:py-10">
            <div className="font-serif text-4xl text-[var(--color-primary)] md:text-5xl">{stat.value}</div><div className="mt-2 text-xs font-semibold uppercase tracking-[.12em] text-[var(--color-muted)]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <motion.div {...reveal} className="relative">
          <div className="relative h-[480px] overflow-hidden rounded-[20px] lg:h-[610px]">
            <Image src={clinicData.about.image} alt={clinicData.about.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute bottom-6 right-[-8px] max-w-[220px] rounded-2xl bg-[var(--color-primary)] p-5 text-white shadow-xl sm:right-[-28px] sm:p-7">
            <p className="text-sm font-semibold">{clinicData.about.philosophyTitle}</p><p className="mt-2 text-xs leading-5 text-white/70">{clinicData.about.philosophy}</p>
          </div>
        </motion.div>
        <motion.div {...reveal} className="lg:pl-10">
          <Heading eyebrow={clinicData.about.eyebrow} title={clinicData.about.heading} />
          <p className="mt-7 text-base leading-8 text-[var(--color-muted)]">{clinicData.about.description}</p>
          <div className="mt-8 space-y-4">{clinicData.about.reasons.map((reason) => <div key={reason} className="flex items-center gap-3 text-sm font-semibold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]"><Check size={15} /></span>{reason}</div>)}</div>
          <a href="#team" className="mt-9 inline-flex items-center gap-3 border-b border-[var(--color-primary)] pb-2 text-sm font-bold text-[var(--color-primary)]">Explore care options <ArrowRight size={16} /></a>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-[var(--color-background)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Our treatments" title="Care for every kind of smile." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
          {clinicData.services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.article key={service.name} {...reveal} transition={{ duration: 0.5, delay: i * 0.06 }} className="group min-h-[275px] bg-[var(--color-surface)] p-7 transition-colors hover:bg-[var(--color-primary)] md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] transition-transform group-hover:scale-110"><Icon size={22} /></div>
                <h3 className="mt-8 font-serif text-2xl text-[var(--color-primary)] group-hover:text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] group-hover:text-white/70">{service.description}</p>
                <a href="#booking" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[var(--color-primary)] group-hover:text-white">Learn more <ArrowRight size={14} /></a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-primary)] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div {...reveal}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[var(--color-accent)]">{clinicData.whyUs.eyebrow}</p>
          <h2 className="font-serif text-4xl leading-tight md:text-[3.25rem]">{clinicData.whyUs.heading}</h2>
          <p className="mt-5 text-white/65">{clinicData.whyUs.description}</p>
        </motion.div>
        <div className="grid gap-px overflow-hidden rounded-[20px] bg-white/15 sm:grid-cols-2">
          {clinicData.whyUs.benefits.map((benefit, i) => (
            <motion.div key={benefit.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-[var(--color-primary)] p-7 md:p-8">
              <span className="font-serif text-3xl text-[var(--color-accent)]">0{i + 1}</span><h3 className="mt-6 font-semibold">{benefit.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareJourney() {
  return (
    <section id="team" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Care at Shine" title="A good place to start." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {clinicData.careSteps.map((step, i) => (
            <motion.article key={step.title} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] font-serif text-xl text-[var(--color-primary)]">0{i + 1}</span>
              <h3 className="mt-7 font-serif text-2xl text-[var(--color-primary)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section id="booking" className="bg-[var(--color-secondary)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr]">
        <motion.div {...reveal}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[var(--color-primary)]">{clinicData.booking.eyebrow}</p>
          <h2 className="font-serif text-4xl leading-tight text-[var(--color-primary)] md:text-[3.25rem]">{clinicData.booking.heading}</h2>
          <p className="mt-6 max-w-md leading-7 text-[var(--color-muted)]">{clinicData.booking.description}</p>
          <a href={clinicData.contact.phoneHref} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]"><Phone size={17} />{clinicData.contact.phone}</a>
        </motion.div>
        <motion.div {...reveal} className="flex min-h-[320px] flex-col items-start justify-center rounded-[20px] bg-[var(--color-surface)] p-7 shadow-[0_20px_60px_rgba(24,49,46,.08)] md:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]"><Phone size={24} /></span>
          <h3 className="mt-6 font-serif text-3xl text-[var(--color-primary)]">Call the clinic</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-muted)]">Speak with Shine directly to confirm current availability, services, and appointment details.</p>
          <a href={clinicData.contact.phoneHref} className="mt-7 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white">{clinicData.booking.callToAction}<ArrowRight size={16} /></a>
        </motion.div>
      </div>
    </section>
  );
}

export function VisitSteps() {
  return (
    <section id="visit" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Plan your visit" title="A few helpful things to check." center />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {clinicData.visitSteps.map((step, i) => (
            <motion.article key={step.title} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-[18px] border border-[var(--color-border)] p-7 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-secondary)] font-serif text-lg text-[var(--color-primary)]">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-xl text-[var(--color-primary)]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-[var(--color-background)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Dental care" title="A look at the care you can explore." />
        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clinicData.gallery.map((item, i) => (
            <motion.figure key={item.image} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }} className={`group relative overflow-hidden rounded-[18px] ${item.span === "wide" ? "md:col-span-2" : ""}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[var(--color-primary)]/80 p-5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">{item.alt}</figcaption>
            </motion.figure>
          ))}
          <motion.figure {...reveal} className="relative overflow-hidden rounded-[18px] bg-[var(--color-primary)] p-8 text-white">
            <div className="flex h-full flex-col justify-between"><p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--color-accent)]">Shine Speciality Dental Clinic</p><p className="font-serif text-3xl leading-tight">Illustrative images. Call Shine to confirm current services and details.</p></div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.65fr_1.35fr]">
        <Heading eyebrow="Frequently asked" title="A few things you may want to know." />
        <motion.div {...reveal} className="border-t border-[var(--color-border)]">
          {clinicData.faq.map((item, i) => (
            <div key={item.question} className="border-b border-[var(--color-border)]">
              <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-[var(--color-primary)]">
                {item.question}<ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="max-w-2xl pb-6 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</motion.p>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-background)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 md:grid-cols-2 md:px-0">
        <motion.div {...reveal} className="py-10 md:px-12 md:py-14">
          <Heading eyebrow="Visit Shine" title="We’d love to welcome you." />
          <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
            <div><MapPin className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Address</p><p className="mt-2 leading-6 text-[var(--color-muted)]">{clinicData.contact.address}<br />{clinicData.contact.city}</p></div>
            <div><Phone className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Call us</p><a href={clinicData.contact.phoneHref} className="mt-2 block text-[var(--color-muted)]">{clinicData.contact.phone}</a></div>
            <div className="sm:col-span-2"><Clock className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Opening hours</p><p className="mt-2 text-[var(--color-muted)]">Call to confirm current opening hours.</p></div>
          </div>
          <a href={clinicData.contact.mapHref} target="_blank" rel="noreferrer" className="mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white">Open in Google Maps <ArrowRight size={16} /></a>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[380px] overflow-hidden bg-[var(--color-secondary)] md:min-h-[520px]">
          <iframe
            title="Map search for Shine Speciality Dental Clinic in Addis Ababa"
            src="https://www.google.com/maps?q=Shine+Speciality+Dental+Clinic+Addis+Ababa&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
