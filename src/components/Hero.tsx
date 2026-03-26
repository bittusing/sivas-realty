"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HERO_SLIDES } from "@/lib/media";

function HeroTitle({ title, accent }: { title: string; accent: string }) {
  const i = title.indexOf(accent);
  if (i === -1) {
    return <>{title}</>;
  }
  return (
    <>
      {title.slice(0, i)}
      <span className="text-gradient">{accent}</span>
      {title.slice(i + accent.length)}
    </>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = HERO_SLIDES[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative isolate h-[72vh] min-h-[520px] overflow-hidden bg-[#070504] md:min-h-[620px]">
      <div className="absolute inset-0 z-[1]">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={`${s.image}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={s.image}
              alt=""
              fill
              className={s.fit === "contain" ? "object-contain" : "object-cover"}
              style={{ objectPosition: s.objectPosition ?? "50% 50%" }}
              priority={index === 0}
              sizes="100vw"
              draggable={false}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[58%] bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>

     
    </section>
  );
}
