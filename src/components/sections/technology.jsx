"use client";

import { technologyData } from "../data/technology-mockdata";

export default function Technology() {
    return (
        <section id="TECHNOLOGIES"
            className="relative w-full bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('${technologyData.backgroundImage}')` }}
        >
            {/* Heading */}
            <h1
                className="font-[700] font-[Segoe UI] text-[65px] leading-[64px] text-[#FFFFFF] text-center mt-18
                           max-lg:text-[52px] max-lg:leading-[58px]
                           max-md:text-[42px] max-md:leading-[48px]
                           max-sm:text-[32px] max-sm:leading-[38px]"
                style={{ letterSpacing: "0%" }}
            >
                {technologyData.title}
            </h1>

            {/* Card Image */}
            <img
                src={technologyData.cardImage}
                alt="Technology Icon"
                className="w-[1490px] h-[710px] pb-5 object-contain mx-auto
                           max-lg:w-[1100px] max-lg:h-[520px]
                           max-md:w-[850px] max-md:h-[420px]
                           max-sm:w-[95%] max-sm:h-auto"
            />

            {/* Dynamic Text Content */}
            <div
                className="absolute text-black 
                           max-lg:top-[60%] max-lg:left-[12%]
                           max-md:top-[58%] max-md:left-[10%]
                           max-sm:top-[55%] max-sm:left-[6%]"
                style={{
                    top: technologyData.textPosition.top,
                    left: technologyData.textPosition.left,
                }}
            >
                <h2
                    className="font-[700] font-[Segoe UI] text-[48px] leading-[56px]
                               max-xl:text-[25px] max-xl:leading-[22px]
                               max-lg:text-[22px] max-lg:leading-[44px] max-lg:-mt-9
                               max-md:text-[20px] max-md:leading-[38px] max-md:-mt-9
                               max-sm:text-[15px] max-sm:leading-[30px] 
                                max-sm:mt-4 max-sm:text-[#a30000]
                               "
                >
                    {technologyData.content.heading}
                </h2>

                <p
                    className="mt-2.5 w-[650px] text-[19px] font-bold leading-[26px] text-[#2B2B2B]
                               max-xl:w-[70%] max-xl:text-[16px] max-xl:leading-[22px]
                               max-lg:w-[60%] max-lg:text-[14px] max-lg:leading-[22px]
                               max-md:w-[80%] max-md:text-[10px] max-md:leading-[22px]
                               max-sm:w-[100%] max-sm:text-[6px] max-sm:leading-[10px] 
                              max-sm:text-[#a30000]"
                >
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
