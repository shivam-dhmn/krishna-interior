
"use client";

import { FormEvent } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "919817911320";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const phone = data.get("phone");
    const service = data.get("service");
    const message = data.get("message");

    const whatsappMessage = `
Hello Krishna Furniture & Interior Works!

I'd like to enquire about a project.

Name: ${name}
Phone: ${phone}
Service: ${service}

Project Details:
${message}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full border border-walnut/10 bg-[#F8F5EF] px-4 py-3 text-sm text-walnut outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

  return (
    <section
      id="contact"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">

        {/* Left: Contact Information */}
        <div className="flex flex-col" data-reveal>

          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Get In Touch
          </p>

          <h2 className="max-w-lg font-heading text-5xl leading-[1.05] text-walnut sm:text-6xl">
            Let's Discuss
            <br />
            <span className="italic">Your Project.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Have an idea for your home or a space that needs
            a new look? Tell us what you have in mind.
            We'd love to discuss your project.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-7">

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F1ECE4] text-gold">
                <MapPin size={18} />
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-walnut">
                  Location
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Ambala, Haryana, India
                </p>
                <p className="mt-1 text-xs text-muted">
                  Projects outside Ambala can also be discussed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F1ECE4] text-gold">
                <Phone size={18} />
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-walnut">
                  Call Us
                </h3>

                <a
                  href="tel:+919817911320"
                  className="mt-2 block text-sm text-muted transition-colors hover:text-gold"
                >
                  +91 98179 11320
                </a>

                <a
                  href="tel:+917404733109"
                  className="mt-1 block text-sm text-muted transition-colors hover:text-gold"
                >
                  +91 74047 33109
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F1ECE4] text-gold">
                <MessageCircle size={18} />
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-walnut">
                  WhatsApp Enquiries
                </h3>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
                >
                  Chat with us
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/krishna_interiorwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 border-t border-walnut/10 pt-6 text-xs uppercase tracking-widest text-walnut transition-colors hover:text-gold"
          >
            
            Follow Our Work on Instagram
            <ArrowUpRight size={14} />
          </a>

        </div>

        {/* Right: Enquiry Form */}
        <div className="bg-white p-6 shadow-sm sm:p-9 lg:p-10" data-reveal>

          <div className="mb-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              Start a Conversation
            </p>

            <h3 className="mt-3 font-heading text-3xl text-walnut sm:text-4xl">
              Project Enquiry
            </h3>

            <p className="mt-3 text-xs leading-6 text-muted">
              Share a few details about your project.
              We'll use them to start a conversation on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-walnut"
              >
                Your Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className={inputClass}
                required
                maxLength={80}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-walnut"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                pattern="[+]?[0-9\s-]{10,16}"
                className={inputClass}
                required
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-walnut"
              >
                Service Required *
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className={`${inputClass} appearance-none`}
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Modular Kitchen</option>
                <option>Wardrobe & Cupboards</option>
                <option>TV Units & Wall Panels</option>
                <option>Flush Doors</option>
                <option>Sofa Work</option>
                <option>False Ceiling</option>
                <option>Complete Interior Work</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-walnut"
              >
                Tell Us About Your Project *
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Describe your requirements, space and ideas..."
                className={`${inputClass} resize-y`}
                required
                maxLength={1500}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 bg-walnut px-6 py-4 text-[10px] font-medium uppercase tracking-widest !text-white transition-colors duration-300 hover:bg-gold hover:!text-walnut"
            >
              Send Enquiry on WhatsApp
              <ArrowUpRight size={16} />
            </button>

            <p className="text-center text-[10px] leading-5 text-muted">
              Your enquiry will open in WhatsApp.
              You&apos;ll be able to review and send the message there.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
