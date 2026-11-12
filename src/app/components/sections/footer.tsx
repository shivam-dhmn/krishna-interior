import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Modular Kitchens",
  "Wardrobes & Cupboards",
  "TV Units & Wall Panels",
  "Flush Doors",
  "Sofa Work",
  "Interior Work",
];

export default function Footer() {
  return (
    <footer className="bg-[#211710] text-[#F8F5EF]">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link href="/#home" className="inline-block">
              <h2 className="font-heading text-3xl tracking-wide">
                KRISHNA
              </h2>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#C6A15B]">
                Furniture & Interior Works
              </p>
            </Link>

            <p className="mt-6 max-w-xs text-xs leading-7 text-[#BEB1A4]">
              Thoughtfully crafted furniture and interior
              solutions designed around your space,
              preferences and lifestyle.
            </p>

            <a
              href="https://www.instagram.com/krishna_interiorwork/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Krishna Furniture on Instagram"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#C6A15B] transition-colors hover:bg-[#C6A15B] hover:text-[#211710]"
            >
              
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#BEB1A4] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-xs text-[#BEB1A4] transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-[#C6A15B]" />
                <p className="text-xs leading-6 text-[#BEB1A4]">
                  Ambala, Haryana,
                  <br />
                  India
                </p>
              </div>

              <a
                href="tel:+919817911320"
                className="flex items-center gap-3 text-xs text-[#BEB1A4] transition-colors hover:text-white"
              >
                <Phone size={15} className="text-[#C6A15B]" />
                +91 98179 11320
              </a>

              <a
                href="https://wa.me/919817911320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#C6A15B]/50 px-4 py-3 text-[9px] uppercase tracking-widest text-[#C6A15B] transition-colors hover:bg-[#C6A15B] hover:text-[#211710]"
              >
                WhatsApp Us
                <ArrowUpRight size={13} />
              </a>

            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-[#96887A]">
            © 2026 Krishna Furniture & Interior Works.
            All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.16em] text-[#C6A15B]">
            Crafted Around Your Space.
          </p>

        </div>

      </div>
    </footer>
  );
}
