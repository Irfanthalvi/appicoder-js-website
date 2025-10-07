import React from "react";
import { industriesData } from "../data/inderstries-mock-data";

const Industries = () => {
    return (
        <section className="py-17 bg-[#E8ECEF]">
            <div className="max-w-[90%] mx-auto px-6">
                <h2 className="text-[66px] font-bold text-center text-[#1C1D27] mb-6">
                    Industries
                </h2>

                <div className="grid gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
                    {industriesData.map(({ id, img, title, description }) => (
                        <div key={id} className="relative">
                            {id === 2 && (
                                <div className="absolute top-2 -left-[0.5px] w-[483.5px] h-[286px] bg-[#E01923] rounded-lg pointer-events-none" />
                            )}

                            <div className="relative bg-white mr-1 p-8 pt-17 h-[286px] rounded-lg border-b-4 flex items-start gap-6">
                                <img
                                    src={img}
                                    alt={title}
                                    className="size-[73px] object-contain flex-shrink-0"
                                />
                                <div className="flex flex-col justify-center ml-[-8px] ">
                                    <h3 className="text-[21px] font-bold text-gray-900 mb-1.5">{title}</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
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
