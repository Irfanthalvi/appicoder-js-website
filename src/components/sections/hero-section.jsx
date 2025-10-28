import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { arrows, navLinks } from "../data/hero-section-mockdata";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative w-full h-[990px] bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/heroSection.png')" }}
    >
      <div className="w-full">
        <div className="mx-[68px] flex items-center justify-between relative">
          {/* ✅ Logo */}
          <div className="px-6 py-11">
            <img
              src="/images/herosection-appicoder.png"
              alt="Appicoders Logo"
              className="w-[310px] h-[87px] object-contain"
            />
          </div>

          {/* ✅ Desktop Navigation */}
          <div className="max-xl:hidden flex items-center justify-start">
            <nav className="hidden md:flex flex-col w-270 justify-start text-white font-semibold font-Lato text-[21px]">
              <div className="flex gap-7">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-red-400 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex justify-end">
                <Button className="mt-2 mr-11 w-[230px] h-[50px] bg-red-500 border-2 border-white rounded-full text-white text-[20px] transition flex items-center gap-2">
                  <Phone size={30} color="white" fill="white" />
                  +1 (800) 826-0018
                </Button>
              </div>
            </nav>
          </div>

          {/* ✅ Mobile Menu (Pure React toggle, no Sheet) */}
          <div className="absolute top-5 right-5 xl:hidden z-50">
            {menuOpen ? (
              <Button
                variant="ghost"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} />
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="text-white"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={28} />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu (replaces Sheet) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-6 z-40">
          <nav className="flex flex-col items-center space-y-5 text-lg font-semibold text-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-red-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button className="mt-8 w-[230px] h-[50px] bg-red-500 border-2 border-white rounded-full text-white text-[20px] transition flex items-center gap-2">
            <Phone size={28} color="white" fill="white" />
            +1 (800) 826-0018
          </Button>
        </div>
      )}

      {/* ✅ Hero Content */}
      <div className="flex max-md:flex-col px-18 max-md:px-0 relative">
        <div className="w-[500px] max-md:flex max-md:justify-center">
          <img
            src="/images/herosection-mobile.png"
            alt="Appicoders Mobile"
            className="w-[510px] max-md:w-[230px] max-md:h-[334px] max-2xl:w-[260px] max-2xl:h-[360px] h-[750px] object-cover absolute top-0"
          />
        </div>

        <div className="py-31 pl-10 text-white max-lg:absolute">
          {/* Headings */}
          <div className="leading-tight max-lg:mt-56">
            <h1 className="text-[75.5px] font-bold leading-[1.1] mb-1 max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">
              Leading the Way in App
            </h1>
            <h2 className="text-[62px] font-bold leading-[1.1] max-lg:text-4xl max-md:text-3xl max-sm:text-xl">
              Development Innovation
            </h2>
          </div>

          {/* Paragraph */}
          <p className="mt-11 text-[31px] max-w-4xl leading-tight max-md:text-xl">
            We build Android & iOS Mobile Apps that cater all your
            <br /> business needs and take it on the next level.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              className="bg-gradient-to-r from-[#a30000] via-black to-[#a30000] hover:opacity-90 text-white font-semibold py-6 md:w-[328px] h-[65px] rounded-md text-[22.5px] w-full max-sm:w-[260px]"
            >
              GET A FREE QUOTE
            </Button>
          </div>

          {/* Arrows */}
          <div className="max-xl:hidden mt-29 pl-157 flex gap-4">
            {arrows.map((arrow) => (
              <Button
                key={arrow.key}
                className="size-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                {arrow.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
