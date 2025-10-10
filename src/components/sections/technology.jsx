"use client";

import { technologyData } from "../data/technology-mockdata";

export default function Technology() {
    return (
        <section
            className="relative w-full bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('${technologyData.backgroundImage}')` }}
        >
            {/* Heading */}
            <h1
                className="font-[700] font-[Segoe UI] text-[65px] leading-[64px] text-[#FFFFFF] text-center mt-18"
                style={{ letterSpacing: "0%" }}
            >
                {technologyData.title}
            </h1>

            {/* Card Image */}
            <img
                src={technologyData.cardImage}
                alt="Technology Icon"
                className="w-[1490px] h-[710px] pb-5 object-contain mx-auto"
            />

            {/* Dynamic Text Content */}
            <div
                className="absolute text-black"
                style={{
                    top: technologyData.textPosition.top,
                    left: technologyData.textPosition.left,
                }}
            >
                <h2 className="font-[700] font-[Segoe UI] font-semibold text-[48px] leading-[56px]">
                    {technologyData.content.heading}
                </h2>
                <p className="mt-2.5 w-[650px] text-[19px] font-bold leading-[26px] text-[#2B2B2B]">
                    {technologyData.content.description.split("\n").map((line, index) => (
                        <span key={index}>
                            {line.trim()} <br />
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
