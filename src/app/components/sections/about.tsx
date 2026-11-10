
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const highlights = [
  {
    title: "Made to Measure",
    description: "Furniture planned around your space and requirements.",
  },
  {
    title: "Thoughtful Craftsmanship",
    description: "Careful attention to materials, details and finishing.",
  },
  {
    title: "On-site Execution",
    description: "Furniture and interior work carried out at your location.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F1ECE4] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:gap-16 lg:grid-cols-2 lg:px-16">

        {/* Left: Image */}
        <div className="relative" data-reveal>
          <div
            className="relative aspect-[4/5] overflow-hidden bg-beige sm:aspect-[5/4] lg:aspect-[4/5]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Warm contemporary interior with custom wooden furniture"
          />

          {/* Image Label */}
          <div className="absolute bottom-5 left-5 max-w-[230px] bg-background p-5 shadow-lg sm:bottom-8 sm:left-8">
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
              Crafted for Living
            </p>

            <h3 className="mt-2 font-heading text-2xl leading-tight text-walnut">
              Details That Make a Space.
            </h3>
          </div>

          {/* Decorative Border */}
          <div className="absolute -bottom-3 -left-3 -z-10 hidden h-full w-full border border-gold/40 lg:block" />
        </div>

        {/* Right: Content */}
        <div className="lg:py-8" data-reveal>

          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            A Little About Us
          </p>

          <h2 className="max-w-xl font-heading text-5xl leading-[1.08] text-walnut sm:text-6xl lg:text-[64px]">
            Where Craftsmanship Meets{" "}
            <span className="italic">Everyday Living.</span>
          </h2>

          <p className="mt-7 text-sm leading-7 text-muted sm:text-base">
            Every space has its own character. We create custom furniture
            and interior solutions designed around your requirements,
            preferences and lifestyle.
          </p>

          <p className="mt-4 text-sm leading-7 text-muted">
            From modular kitchens and wardrobes to bespoke furniture
            and interior work, our focus is on creating spaces that
            feel personal, functional and thoughtfully finished.
          </p>

          {/* Highlights */}
          <div className="mt-9 grid gap-5 border-t border-walnut/10 pt-7 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} data-reveal>
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <Check size={14} className="text-gold" />
                </div>

                <h3 className="font-heading text-xl text-walnut">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-walnut transition-colors hover:text-gold"
          >
            Discover Our Approach
            <ArrowUpRight size={15} />
          </Link>

        </div>
      </div>
    </section>
  );
}
