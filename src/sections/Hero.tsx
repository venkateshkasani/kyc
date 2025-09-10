"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MapPin, PlusIcon } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const images = ["/vit.jpg", "/vit2.jpeg", "/vit3.jpg"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLDivElement>(".bg-slide");

      // Place all slides offscreen except the first
      slides.forEach((slide, i) => {
        gsap.set(slide, { y: i === 0 ? "0%" : "100%", scale: 1 });
      });

      // Timeline loop
      let tl = gsap.timeline({ repeat: -1 });

      slides.forEach((slide, i) => {
        let next = slides[(i + 1) % slides.length];

        tl.to(slide, {
          scale: 1.1,
          y: "-100%",
          duration: 2,
          delay: 4, // keep visible for 4s
          ease: "power2.inOut",
        }).fromTo(
          next,
          { y: "100%", scale: 1 },
          { y: "0%", scale: 1, duration: 2, ease: "power2.inOut" },
          "<"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] w-full overflow-hidden"
      style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="bg-slide absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Foreground Content */}
      <div className="relative z-10 min-h-[80vh] w-full p-5 md:p-10 flex flex-col gap-3 justify-center bg-black/50 text-white">
        <p className="text-4xl font-extrabold">Vellore Institute of Technology</p>
        <p className="font-bold text-2xl">(VIT Vellore)</p>
        <span className="flex gap-2 items-center">
          <MapPin className="h-5 w-5 text-white" />
          <p>Katpadi, Vellore, Tamil Nadu, India</p>
        </span>
        <button className="flex gap-2 items-center bg-green-500 text-gray-900 rounded-full px-5 py-2 w-fit font-semibold">
          Add to list
          <PlusIcon className="h-5 w-5 text-gray-900" />
        </button>
        <img src="/hero-download.png" className="h-20 w-20 absolute bottom-5 right-5" />
      </div>
    </section>
  );
}
