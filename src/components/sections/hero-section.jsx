import { Button } from "@/components/ui/button";
import {Phone } from "lucide-react";
import { arrows, navLinks } from "../data/hero-section-mockdata";

export default function HeroSection() {

    return (
        <section
            className="relative w-full h-[990px] bg-cover bg-center bg-no-repeat min-h-screen"
            style={{ backgroundImage: "url('/images/heroSection.png')" }}
        >
            <div className="w-full">
                <div className="max-w-[1572px] mx-auto flex items-center justify-between">
                    <div className="px-6 py-11">
                        {/* Logo */}
                        <img
                            src="/images/herosection-appicoder.png"
                            alt="Appicoders Logo"
                            className="w-[310px] h-[87px] object-contain"
                        />
                    </div>

                    <div>
                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-7 text-white font-semibold font-Lato text-[21px] px-9">
                            {navLinks.map((link, index) => (
                                <a key={index} href="#">
                                    {link}
                                </a>
                            ))}
                        </nav>

                        {/* Call Button */}
                        <Button className="mt-2 ml-210 w-[230px] h-[50px] bg-red-500 border border-white rounded-full text-white text-[20px] transition">
                            <span>
                                <Phone size={28} />
                            </span>
                            +1 (800) 826-0018
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex px-18">
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/herosection-mobile.png"
                        alt="Appicoders Logo"
                        className="w-[510px] object-cover"
                    />
                </div>

                <div className="py-31 pl-7.5 text-white">
                    {/* Heading */}
                    <h1 className="text-[75px] font-bold leading-tight">
                        Leading the Way in App <br />
                        <span className="text-white text-[60px] leading-tight relative -top-5">
                            Development Innovation
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p className="mt-5 text-[27px] max-w-2xl leading-tight">
                        We build Android & iOS Mobile Apps that cater all your
                        <br /> business needs and take it on the next level.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button className="bg-gradient-to-r from-[#a30000] via-black to-[#a30000] hover:opacity-90 text-white font-semibold py-6 w-[367px] h-[70px] rounded-md text-lg">
                            GET A FREE QUOTE
                        </Button>
                    </div>

                    {/* Left-Right Buttons */}
                    <div className="mt-10 flex gap-4">
                        {arrows.map((arrow) => (
                            <Button
                                key={arrow.key}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
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
