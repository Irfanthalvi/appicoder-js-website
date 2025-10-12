import React from "react";
import { industriesData } from "../data/inderstries-mock-data";

const Industries = () => {
    return (
        <section id="PORTFOLIO" className="py-17 bg-[#E8ECEF]">
            <div className="max-w-[90%] mx-auto px-6">
                <h2 className="text-[66px] font-bold text-center text-[#1C1D27] mb-6
                       max-lg:text-[52px] max-md:text-[42px] max-sm:text-[32px]">
                    Industries
                </h2>

                <div className="grid gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
                    {industriesData.map(({ id, img, title, description }) => (
                        <div className="relative">
                            {id === 2 && (
                              
                                <div className="absolute top-2 -right-[0.5px] w-[487px] h-[286px] bg-[#E01923]
                                 rounded-lg pointer-events-none max-xl:hidden" /> 
                            )}

                            <div className="relative bg-white p-8 pt-17 h-[286px] rounded-lg border-b-4 flex items-start gap-6
                  max-lg:h-[240px] max-md:h-[200px] max-sm:h-[160px]
                  max-sm:p-5 max-sm:pt-12">
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-[73px] h-[73px] object-contain flex-shrink-0
                 max-lg:w-[60px] max-lg:h-[60px]
                 max-md:w-[50px] max-md:h-[50px]
                 max-sm:w-[40px] max-sm:h-[40px]"
                                />
                                <div className="flex flex-col justify-center ml-[-8px]">
                                    <h3 className="text-[21px] font-bold text-gray-900 mb-1.5
                     max-lg:text-[18px] max-md:text-[16px] max-sm:text-[9px] max-xl:text-[16px]">
                                        {title}
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed
                    max-lg:text-[12px] max-md:text-[8px] max-sm:text-[6px] overflow-hidden max-xl:text-[12px]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
