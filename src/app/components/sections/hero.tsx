import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-background">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-5 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Left Content */}
        <div className="max-w-xl" data-reveal>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E7DED2] bg-white/70 px-4 py-2.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-walnut">
              Ambala
            </span>

            <span className="h-3 w-px bg-[#D8C9B5]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
              Furniture & Interior Works
            </span>
          </div>

          <h1 className="font-heading text-6xl leading-[0.95] tracking-tight text-walnut sm:text-7xl lg:text-[88px]">
            Spaces
            <br />
            Designed
            <br />
            <span className="italic">Around You.</span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base">
            Thoughtfully crafted furniture and interior solutions designed to
            bring your vision and your space together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-3 bg-walnut px-6 py-4 text-[10px] font-medium uppercase tracking-widest text-white! transition-colors duration-300 hover:bg-gold hover:text-walnut!"
            >
              Explore Our Work
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 border border-walnut/20 px-6 py-4 text-[10px] font-medium uppercase tracking-widest text-walnut transition-colors duration-300 hover:border-gold hover:bg-gold"
            >
              Start Your Project
            </Link>
          </div>

          {/* Location */}
          <div className="mt-10 flex items-center gap-6 text-[10px] uppercase tracking-widest text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              Ambala, Haryana
            </span>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <span className="hidden sm:block">
              Custom Furniture & Interiors
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative" data-reveal>
          <div className="relative aspect-square overflow-hidden bg-beige">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=720&q=50"
              alt="Elegant contemporary interior with custom furniture"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Image Label */}
          <div className="absolute bottom-5 left-5 bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8">
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
              Thoughtfully Designed
            </p>
            <p className="mt-1 font-heading text-xl text-walnut">
              Made Around You.
            </p>
          </div>

          {/* Decorative Accent */}
          <div className="absolute -right-3 -top-3 -z-10 hidden h-full w-full border border-gold/40 lg:block" />
        </div>
      </div>
    </section>
  );
}
