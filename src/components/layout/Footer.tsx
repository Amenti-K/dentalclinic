import { Camera, Globe, ArrowUpRight } from "lucide-react";
import { clinicData } from "@/data/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 font-serif text-xl">{clinicData.brand.initials}</span>
              <div><div className="text-xl font-semibold">{clinicData.brand.name}</div><div className="text-[9px] font-bold uppercase tracking-[.22em] text-white/60">{clinicData.brand.dentalName}</div></div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">{clinicData.footer.description}</p>
          </div>
          <div><h3 className="mb-4 text-sm font-semibold">Explore</h3><div className="space-y-3">{clinicData.navigation.map((item) => <a key={item.href} href={item.href} className="block text-sm text-white/70 hover:text-white">{item.label}</a>)}</div></div>
          <div><h3 className="mb-4 text-sm font-semibold">Services</h3><div className="space-y-3">{clinicData.services.slice(0, 5).map((service) => <a key={service.name} href="#services" className="block text-sm text-white/70 hover:text-white">{service.name}</a>)}</div></div>
          <div><h3 className="mb-4 text-sm font-semibold">Visit us</h3><p className="text-sm leading-7 text-white/70">{clinicData.contact.address}<br />{clinicData.contact.city}</p><a href={clinicData.contact.phoneHref} className="mt-3 block text-sm text-white/70">{clinicData.contact.phone}</a><a href={`mailto:${clinicData.contact.email}`} className="mt-2 block text-sm text-white/70">{clinicData.contact.email}</a></div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {clinicData.footer.copyright}</p>
          <div className="flex items-center gap-4">
            {clinicData.social.map((item) => item.label === "Instagram" ? <a key={item.label} href={item.href} aria-label={item.label}><Camera size={17} /></a> : <a key={item.label} href={item.href} aria-label={item.label}><Globe size={17} /></a>)}
            <a href="#booking" className="flex items-center gap-1 text-white">Plan a visit <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
