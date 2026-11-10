
import {
  MessageSquareText,
  Ruler,
  ClipboardList,
  Hammer,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us what you have in mind. Share your ideas, inspiration and the kind of space you want to create.",
    icon: MessageSquareText,
    detail: "START WITH AN IDEA",
  },
  {
    number: "02",
    title: "Discuss Requirements",
    description:
      "We understand your space, preferences, functional needs and the details that matter to you.",
    icon: Ruler,
    detail: "UNDERSTAND YOUR NEEDS",
  },
  {
    number: "03",
    title: "Plan Your Project",
    description:
      "Discuss the design, materials and project requirements before moving towards execution.",
    icon: ClipboardList,
    detail: "PLAN WITH CLARITY",
  },
  {
    number: "04",
    title: "Bring It to Life",
    description:
      "Move forward with the planned furniture and interior work at your chosen location.",
    icon: Hammer,
    detail: "MAKE IT HAPPEN",
  },
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl md:mb-16" data-reveal>

          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            How We Work
          </p>

          <h2 className="font-heading text-5xl leading-[1.05] text-walnut sm:text-6xl lg:text-7xl">
            From Your Idea
            <br />
            <span className="italic">to Your Space.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Every project begins with an idea. We follow a
            thoughtful process to understand your needs and
            turn your vision into a well-planned space.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative flex min-h-[280px] flex-col border border-border/30 bg-[#F1ECE4] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
                data-reveal
              >

                {/* Number and Icon */}
                <div className="flex items-center justify-between">

                  <span className="font-heading text-4xl text-gold">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-gold/30 text-walnut transition-colors duration-300 group-hover:bg-walnut group-hover:text-white">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>

                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="font-heading text-2xl text-walnut sm:text-[26px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-muted sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Label */}
                <div className="mt-auto flex items-center justify-between border-t border-walnut/10! pt-5">
                  <span className="text-[9px] font-medium tracking-[0.13em] text-muted">
                    {step.detail}
                  </span>

                  {index !== 3 && (
                    <ArrowUpRight
                      size={15}
                      className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
