
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-2xl leading-none tracking-wide text-walnut">
            KRISHNA
          </span>
          <span className="mt-1 text-[9px] tracking-[0.18em] text-muted">
            FURNITURE & INTERIOR WORKS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-[11px] uppercase tracking-[0.12em] text-foreground/75 transition-colors hover:text-gold"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-walnut px-5 py-3 text-[10px] uppercase tracking-widest !text-white transition-colors hover:bg-gold hover:!text-walnut lg:flex"
        >
          Get a Quote
          <ArrowUpRight size={14} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center text-walnut transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="mobile-menu-enter border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link font-heading text-2xl text-walnut"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-walnut px-5 py-4 text-xs uppercase tracking-widest !text-white"
            >
              Get a Quote
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
