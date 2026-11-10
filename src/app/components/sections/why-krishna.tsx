
import {
  Ruler,
  Hammer,
  House,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Customised Solutions",
    description:
      "Furniture and interior solutions planned around your space, preferences and requirements.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Thoughtful Craftsmanship",
    description:
      "Attention to materials, details and finishing across every aspect of the work.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "On-site Execution",
    description:
      "Furniture and interior work carried out at your home or chosen project location.",
    icon: House,
  },
  {
    number: "04",
    title: "Personal Consultation",
    description:
      "Direct conversations to understand your ideas and discuss your project requirements.",
    icon: MessagesSquare,
  },
];

export default function WhyKrishna() {
  return (
    <section className="bg-[#F1ECE4] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-16">

        {/* Left Introduction */}
        <div data-reveal>

          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            The Krishna Difference
          </p>

          <h2 className="max-w-md font-heading text-5xl leading-[1.05] text-walnut sm:text-6xl lg:text-7xl">
            Made Around
            <br />
            <span className="italic">Your Needs.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Every space is different, and every project comes
            with its own requirements. Our approach focuses
            on understanding what you need and creating
            solutions that work for your space.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 border border-walnut/15 bg-background px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center bg-beige">
              <MessagesSquare size={16} className="text-gold" />
            </span>

            <div>
              <p className="text-[9px] uppercase tracking-widest text-muted">
                Have a project in mind?
              </p>
              <p className="mt-1 font-heading text-lg text-walnut">
                Let's discuss your ideas.
              </p>
            </div>

            <ArrowUpRight size={16} className="ml-2 text-gold" />
          </div>

        </div>

        {/* Right Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group min-h-[220px] border border-walnut/10 bg-background p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-sm sm:p-7"
                data-reveal
              >

                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl text-gold">
                    {feature.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center bg-beige text-walnut transition-colors duration-300 group-hover:bg-walnut group-hover:text-white">
                    <Icon size={19} strokeWidth={1.4} />
                  </div>
                </div>

                <h3 className="mt-8 font-heading text-2xl text-walnut">
                  {feature.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-muted sm:text-sm">
                  {feature.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
