
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Modern Modular Kitchen",
    category: "Kitchen Design",
    description:
      "A contemporary kitchen concept combining clean cabinetry, warm finishes and practical storage.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    title: "Contemporary Wardrobe Suite",
    category: "Custom Wardrobes",
    description:
      "A refined storage concept designed to complement a modern bedroom.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    title: "Acoustic Media Wall",
    category: "TV Units & Wall Panels",
    description:
      "A modern living space featuring a custom media wall concept.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
];

export default function FeaturedProjects() {
  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <section
      id="projects"
      className="bg-[#F1ECE4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">

          <div data-reveal>
            <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Selected Work
            </p>

            <h2 className="font-heading text-5xl leading-tight text-walnut sm:text-6xl">
              Spaces We've
              <br />
              <span className="italic">Helped Shape.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted" data-reveal>
            Explore furniture and interior concepts that bring
            together thoughtful design, practical details and
            considered craftsmanship.
          </p>
        </div>

        {/* Project Gallery */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Featured Project */}
          <article className="group" data-reveal>
            <div className="relative aspect-[5/4] overflow-hidden bg-beige">
              <div
                role="img"
                aria-label={featured.title}
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${featured.image}")`,
                }}
              />

              <span className="absolute left-4 top-4 bg-background/90 px-3 py-2 text-[9px] uppercase tracking-widest text-walnut">
                Concept Preview
              </span>
            </div>

            <div className="flex flex-col gap-3 border-b border-walnut/15 py-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-widest text-gold">
                  {featured.category}
                </p>

                <h3 className="font-heading text-3xl text-walnut">
                  {featured.title}
                </h3>

                <p className="mt-2 max-w-lg text-xs leading-6 text-muted">
                  {featured.description}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-walnut"
              />
            </div>
          </article>

          {/* Secondary Projects */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">

            {secondary.map((project) => (
              <article key={project.title} className="group" data-reveal>

                <div className="relative aspect-[16/9] overflow-hidden bg-beige">
                  <div
                    role="img"
                    aria-label={project.title}
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  />

                  <span className="absolute left-3 top-3 bg-background/90 px-3 py-2 text-[9px] uppercase tracking-widest text-walnut">
                    Concept Preview
                  </span>
                </div>

                <div className="border-b border-walnut/15 py-4">
                  <p className="text-[9px] uppercase tracking-widest text-gold">
                    {project.category}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="font-heading text-2xl text-walnut">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-walnut"
                    />
                  </div>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-walnut px-7 py-4 text-[10px] uppercase tracking-widest text-white! transition-colors hover:bg-gold hover:text-walnut!"
          >
            Explore All Projects
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
