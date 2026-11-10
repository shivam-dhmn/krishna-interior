
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Modular Kitchens",
    description:
      "Thoughtfully planned kitchens with custom cabinetry, practical storage and refined finishes.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963167025-ca61fd6b36d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      
    alt: "Contemporary kitchen interior",
  },
  {
    number: "02",
    title: "Wardrobes & Cupboards",
    description:
      "Custom storage solutions designed around your space, organisation and everyday needs.",
    image:
      "https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Modern bedroom and wardrobe interior",
  },
  {
    number: "03",
    title: "TV Units & Wall Panels",
    description:
      "Custom entertainment units and wall features that bring character to your living space.",
    image:
      "https://images.unsplash.com/photo-1774716925888-190de2471de2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Contemporary living room interior",
  },
  {
    number: "04",
    title: "Flush Doors",
    description:
      "Clean, modern door solutions that complement the overall look of your interiors.",
    image:
      "https://images.unsplash.com/photo-1654289928998-25442b42fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Modern home interior with wooden finishes",
  },
  {
    number: "05",
    title: "Sofa Work",
    description:
      "Custom sofa solutions designed around your preferred style, comfort and space.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary upholstered sofa",
  },
  {
    number: "06",
    title: "False Ceilings & Interior Work",
    description:
      "Interior finishing and ceiling designs that bring the different elements of a room together.",
    image:
      "https://plus.unsplash.com/premium_photo-1746888841256-aa28caaf8764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Contemporary interior ceiling and lighting",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">

          <div data-reveal>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              What We Do
            </p>

            <h2 className="font-heading text-5xl leading-[1.05] text-walnut sm:text-6xl">
              Considered Design.
              <br />
              <span className="italic">Crafted for You.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted" data-reveal>
            From functional furniture to thoughtfully finished
            interiors, explore the solutions we create around
            your space and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.number}
              className="group"
              data-reveal
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">

                <div
                  role="img"
                  aria-label={service.alt}
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />

                <span className="absolute left-4 top-4 bg-background/90 px-3 py-2 text-[9px] tracking-widest text-walnut">
                  {service.number} / 06
                </span>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-background text-walnut transition-colors duration-300 group-hover:bg-gold">
                  <ArrowUpRight size={17} />
                </div>

              </div>

              {/* Content */}
              <div className="border-b border-border pb-5 pt-5">

                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl text-walnut sm:text-[27px]">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-3 max-w-md text-xs leading-6 text-muted sm:text-sm">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.16em] text-muted">
                    Custom Solutions
                  </span>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-widest text-walnut transition-colors hover:text-gold"
                  >
                    Enquire Now
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
