"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  AlignCenter, Baby, Brush, Check, ChevronDown, Heart, Mail, MapPin,
  Phone, ScanLine, ShieldCheck, Smile, Sparkles, Star, ArrowRight, Clock
} from "lucide-react";
import { clinicData, IconName } from "@/data/data";

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
          <a href="#team" className="mt-9 inline-flex items-center gap-3 border-b border-[var(--color-primary)] pb-2 text-sm font-bold text-[var(--color-primary)]">Meet our team <ArrowRight size={16} /></a>
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
            const Icon = icons[service.icon as IconName];
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

export function Doctors() {
  return (
    <section id="team" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Our dental team" title="Expert hands. A personal approach." />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {clinicData.doctors.map((doctor, i) => (
            <motion.article key={doctor.name} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="relative h-[420px] overflow-hidden rounded-[18px] bg-[var(--color-secondary)]">
                <Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[.15em] text-[var(--color-accent)]">{doctor.title}</p>
              <h3 className="mt-2 font-serif text-2xl text-[var(--color-primary)]">{doctor.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--color-muted)]">{doctor.specialization}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{doctor.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("name") || !form.get("phone") || !form.get("email") || !form.get("service") || !form.get("date") || !form.get("time")) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };
  const inputClass = "h-12 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)]";

  return (
    <section id="booking" className="bg-[var(--color-secondary)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr]">
        <motion.div {...reveal}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[var(--color-primary)]">{clinicData.booking.eyebrow}</p>
          <h2 className="font-serif text-4xl leading-tight text-[var(--color-primary)] md:text-[3.25rem]">{clinicData.booking.heading}</h2>
          <p className="mt-6 max-w-md leading-7 text-[var(--color-muted)]">{clinicData.booking.description}</p>
          <div className="mt-8 space-y-4 text-sm"><div className="flex items-center gap-3"><Phone size={17} />{clinicData.contact.phone}</div><div className="flex items-center gap-3"><Mail size={17} />{clinicData.contact.email}</div></div>
        </motion.div>
        <motion.div {...reveal} className="rounded-[20px] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(24,49,46,.08)] md:p-9">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]"><Check size={28} /></span>
              <h3 className="mt-6 font-serif text-3xl text-[var(--color-primary)]">{clinicData.booking.successTitle}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">{clinicData.booking.successText}</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">Send another request</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold text-[var(--color-primary)]">Patient name *<input name="name" className={`${inputClass} mt-2`} placeholder="Your full name" /></label>
                <label className="text-xs font-bold text-[var(--color-primary)]">Phone number *<input name="phone" type="tel" className={`${inputClass} mt-2`} placeholder="(555) 000-0000" /></label>
                <label className="text-xs font-bold text-[var(--color-primary)] sm:col-span-2">Email address *<input name="email" type="email" className={`${inputClass} mt-2`} placeholder="you@example.com" /></label>
                <label className="text-xs font-bold text-[var(--color-primary)]">Preferred service *<select name="service" defaultValue="" className={`${inputClass} mt-2`}><option value="" disabled>Select a service</option>{clinicData.services.map((service) => <option key={service.name}>{service.name}</option>)}</select></label>
                <label className="text-xs font-bold text-[var(--color-primary)]">Preferred date *<input name="date" type="date" className={`${inputClass} mt-2`} /></label>
                <label className="text-xs font-bold text-[var(--color-primary)] sm:col-span-2">Preferred time *<select name="time" defaultValue="" className={`${inputClass} mt-2`}><option value="" disabled>Select a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
                <label className="text-xs font-bold text-[var(--color-primary)] sm:col-span-2">Additional message<textarea name="message" rows={4} className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="Tell us how we can help" /></label>
              </div>
              {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}
              <button type="submit" className="mt-6 flex h-13 w-full items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Send demo request <ArrowRight size={16} /></button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Heading eyebrow="Patient stories" title="Kind words from our patients." center />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {clinicData.testimonials.map((testimonial, i) => (
            <motion.blockquote key={testimonial.name} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-[18px] border border-[var(--color-border)] p-7 md:p-8">
              <div className="flex gap-1 text-[var(--color-accent)]" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
              </div>
              <p className="mt-6 font-serif text-xl leading-8 text-[var(--color-primary)]">“{testimonial.quote}”</p>
              <div className="mt-8 flex items-center gap-4 border-t border-[var(--color-border)] pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full"><Image src={testimonial.image} alt="" fill sizes="44px" className="object-cover" /></div>
                <div><cite className="block text-sm font-bold not-italic">{testimonial.name}</cite><span className="text-xs text-[var(--color-muted)]">{testimonial.treatment}</span></div>
              </div>
            </motion.blockquote>
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
        <Heading eyebrow="Inside Luméra" title="A calmer kind of dental experience." />
        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clinicData.gallery.map((item, i) => (
            <motion.figure key={item.image} {...reveal} transition={{ duration: 0.6, delay: i * 0.1 }} className={`group relative overflow-hidden rounded-[18px] ${item.span === "wide" ? "md:col-span-2" : ""}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[var(--color-primary)]/80 p-5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">{item.alt}</figcaption>
            </motion.figure>
          ))}
          <motion.figure {...reveal} className="relative overflow-hidden rounded-[18px] bg-[var(--color-primary)] p-8 text-white">
            <div className="flex h-full flex-col justify-between"><p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--color-accent)]">The Luméra promise</p><p className="font-serif text-3xl leading-tight">Comfortable care, beautifully considered.</p></div>
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
          <Heading eyebrow="Visit Luméra" title="We’d love to welcome you." />
          <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
            <div><MapPin className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Address</p><p className="mt-2 leading-6 text-[var(--color-muted)]">{clinicData.contact.address}<br />{clinicData.contact.city}</p></div>
            <div><Phone className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Call us</p><a href={clinicData.contact.phoneHref} className="mt-2 block text-[var(--color-muted)]">{clinicData.contact.phone}</a><a href={`mailto:${clinicData.contact.email}`} className="mt-1 block text-[var(--color-muted)]">{clinicData.contact.email}</a></div>
            <div className="sm:col-span-2"><Clock className="mb-3 text-[var(--color-accent)]" size={20} /><p className="font-bold">Opening hours</p><div className="mt-2 space-y-1 text-[var(--color-muted)]">{clinicData.contact.hours.map((hour) => <p key={hour}>{hour}</p>)}</div></div>
          </div>
          <a href="#booking" className="mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white">Plan your visit <ArrowRight size={16} /></a>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[380px] bg-[var(--color-secondary)] md:min-h-[520px]">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-xl"><MapPin size={26} /></span>
            <div className="mt-4 rounded-xl bg-[var(--color-surface)] px-5 py-3 text-sm font-bold shadow-lg">{clinicData.brand.name} Dental Studio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
