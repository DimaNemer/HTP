"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

const partners = [
  {
    name: "Pentest",
    id: 1,
    logo: "/pentest.png",
    url: "https://pentest.co.uk/",
    darkBg: true, // white logo → place on dark navy card
  },
  {
    name: "Cygenta",
    id: 2,
    logo: "/cygenta.png",
    url: "https://www.cygenta.co.uk/",
    darkBg: false, //light logo → keep on light card
  },
  {
    name: "Cyberhash",
    id: 3,
    logo: "/cyberhash.png",
    url: "https://www.cyberhash.com/",
    darkBg: true,
  },
];

export default function Partners() {
  const reveal = useScrollReveal();

  return (
    <section className="py-20 bg-white border-y border-borderLight">
      <div className="container mx-auto px-6 md:px-12" ref={reveal}>

        {/* Section label */}
        <p className="text-center text-textMuted uppercase tracking-widest text-lg font-bold mb-10">
          Trusted Partners
        </p>

        {/* Logo cards row */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name}`}
              className={`
                group flex items-center justify-center
                w-52 h-28 md:w-60 md:h-32
                rounded-2xl border transition-all duration-300
                card-hover
                ${
                  partner.darkBg
                    ? "bg-primary border-primary/80 hover:border-accent/60"
                    : "bg-secondary border-borderLight hover:border-accent/40"
                }
              `}
            >
              <div className="relative w-36 h-14 md:w-44 md:h-16">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
