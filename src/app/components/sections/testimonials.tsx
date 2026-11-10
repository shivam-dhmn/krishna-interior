
import { Quote } from "lucide-react";

const reviews = [
  {
    number: "01",
    title: "Your Experience Matters.",
    description:
      "Verified feedback from customers will be featured here.",
  },
  {
    number: "02",
    title: "Every Project Is Personal.",
    description:
      "We look forward to sharing genuine customer experiences.",
  },
  {
    number: "03",
    title: "Made Around You.",
    description:
      "Real stories from completed projects will appear here.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-16" data-reveal>

          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            Customer Experiences
          </p>

          <h2 className="font-heading text-5xl text-walnut sm:text-6xl">
            Experiences That
            <span className="italic"> Speak.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted">
            Every project is a collaboration. We value the
            people, ideas and spaces behind the work.
          </p>

        </div>

        {/* Review Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={review.number}
              className="flex min-h-[260px] flex-col border border-walnut/10 bg-[#F1ECE4] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
              data-reveal
            >

              <div className="flex items-center justify-between">
                <Quote
                  size={27}
                  strokeWidth={1.3}
                  className="text-gold"
                />

                <span className="font-heading text-2xl text-gold">
                  {review.number}
                </span>
              </div>

              <div className="mt-9">
                <h3 className="font-heading text-2xl text-walnut">
                  {review.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {review.description}
                </p>
              </div>

              <div className="mt-auto border-t border-walnut/10 pt-5">
                <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-gold">
                  Verified Reviews Coming Soon
                </span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
