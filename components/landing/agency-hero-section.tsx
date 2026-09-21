"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, LayoutTemplate, Monitor } from "lucide-react";

const slides = [
  {
    image: "/showcase/creative-workspace.jpg",
    alt: "Creative web design workspace",
    firstTitle: "Creative web design",
    firstDescription: "Distinctive experiences designed around your brand",
    secondTitle: "Visual direction",
    secondDescription: "Typography, colour and layout working together",
  },
  {
    image: "/showcase/coding-workspace.jpg",
    alt: "Website development workspace",
    firstTitle: "Development",
    firstDescription: "Clean, responsive and reliable website development",
    secondTitle: "Performance",
    secondDescription: "Fast-loading experiences built for every device",
  },
  {
    image: "/showcase/product-design.jpg",
    alt: "Digital product design workspace",
    firstTitle: "User experience",
    firstDescription: "Clear journeys that help visitors take action",
    secondTitle: "Responsive design",
    secondDescription: "Beautifully designed for mobile, tablet and desktop",
  },
  {
    image: "/showcase/web-design.jpg",
    alt: "Modern website displayed on a laptop",
    firstTitle: "Website launch",
    firstDescription: "Testing, deployment and launch preparation",
    secondTitle: "Ongoing support",
    secondDescription: "Reliable assistance as your business continues growing",
  },
];

export function AgencyHeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f4f4f1] pt-16 text-black lg:pt-20">
      <div className="mx-auto grid min-h-[760px] w-full max-w-[1400px] items-center gap-16 px-3 py-16 sm:px-[18px] lg:grid-cols-[0.95fr_1.05fr] lg:px-7 xl:gap-24">
        {/* Left content */}
        <div
          className={`relative z-10 max-w-[650px] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Availability badge */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-[#f0f0ee] px-4 py-2 text-sm">
            <Monitor className="h-4 w-4" />
            Currently accepting new web projects
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.8rem,4.2vw,4.8rem)] leading-[1] tracking-[-0.045em]">
            Design. Develop.{" "}
            <span className="font-serif font-normal italic">Grow.</span>
            <br />
            All in one place.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[540px] text-lg leading-[1.65] text-black/50">
            Numo Digital designs and develops professional websites that help
            growing businesses build trust, attract customers and generate more
            enquiries.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-black px-8 text-sm font-medium text-white transition-all hover:bg-black/80"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/work"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/15 bg-white px-8 text-sm font-medium transition-all hover:border-black"
            >
              View our work
            </Link>
          </div>

          {/* Supporting line */}
          <div className="mt-10 flex items-center gap-3 text-sm text-black/45">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-[10px] font-medium text-white">
                ND
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#deded9] text-[10px] font-medium">
                GH
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#c9c9c3] text-[10px] font-medium">
                UK
              </span>
            </div>

            <span>Websites built for businesses in Ghana and worldwide</span>
          </div>
        </div>

        {/* Right image presentation */}
        <div
          className={`relative mx-auto h-[440px] w-full max-w-[690px] transition-all delay-200 duration-1000 sm:h-[520px] lg:mx-0 lg:h-[600px] ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          {/* Changing images */}
          <div className="absolute inset-0 overflow-hidden rounded-[30px] bg-[#ececea] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeSlide === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.03] opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Changing floating service card */}
          <div className="absolute -left-8 bottom-16 hidden w-[320px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_55px_rgba(0,0,0,0.14)] sm:block">
            <div
              key={`first-${activeSlide}`}
              className="flex animate-in items-center gap-4 border-b border-black/10 px-6 py-5 duration-500 fade-in slide-in-from-bottom-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2f2ef]">
                <LayoutTemplate className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-medium">{currentSlide.firstTitle}</p>

                <p className="mt-1 text-xs leading-relaxed text-black/45">
                  {currentSlide.firstDescription}
                </p>
              </div>
            </div>

            <div
              key={`second-${activeSlide}`}
              className="flex animate-in items-center gap-4 px-6 py-5 duration-500 fade-in slide-in-from-bottom-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2f2ef]">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {currentSlide.secondTitle}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-black/45">
                  {currentSlide.secondDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Image navigation */}
          <div className="absolute bottom-6 right-6 flex gap-2 rounded-full bg-white/90 px-4 py-3 backdrop-blur-md">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-7 bg-black"
                    : "w-1.5 bg-black/20 hover:bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
