import { Quote } from "lucide-react";
import React from "react";

const TestimonialSection = () => {
    return (
        <section
            className="relative flex items-center justify-center h-[1080px] bg-[length:100%_106%] bg-center bg-no-repeat"
            style={{ backgroundImage: "url('images/testimonial-background.png')" }}
        >

            {/* 🔴 Red Overlay */}
            <div className="absolute inset-0 flex justify-center pt-[147px]">
                <div className="bg-[#E01923] w-[87%] h-[71.2%] rounded-[10px] opacity-100 mix-blend-multiply shadow-[0_4px_20px_#0000001A]"></div>
            </div>

            {/* White Quote Circle (Top Left) */}
            <div className="absolute top-[66px] left-[155px] size-[160px] bg-white rounded-full flex items-center justify-center shadow-md">
                <Quote className="size-[80px] rotate-180 text-[#E01923]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-[82%] h-[62%] flex flex-col lg:flex-row justify-between">
                {/* Left Text */}
                <div className="text-white pt-[169px]">
                    <h4 className="uppercase tracking-wide text-[31.6px] text-white/80 mb-3">
                        CLIENT TESTIMONIALS
                    </h4>
                    <h2 className="text-[66px] font-bold leading-none">
                        What our clients <br />
                        <span className="relative top-[11px] inline-block">are Saying.</span>
                    </h2>


                </div>

                {/* White Testimonial Card */}
                <div className="bg-white rounded-[10px] p-7 mt-4.5 shadow-xl relative z-20 w-[735px] h-[516px] flex flex-col justify-between">
                    {/* Profile Row */}
                    <div className="flex items-center relative mt-5">
                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src="images/testimonial-image.png"
                                alt="Client"
                                className="rounded-full size-[160px] object-cover"
                            />
                            {/* 🔴 Small Red Quote Overlap */}
                            <div className="absolute left-[28px] top-[138px] bottom-[5px] size-[44px] bg-[#E01923] rounded-full flex items-center justify-center shadow-md">
                                <Quote className="size-5 text-white rotate-180" />
                            </div>
                        </div>

                        {/* Client Name + Line */}
                        <div className="ml-6.5 mb-1.5">
                            <h3 className="text-[28.5px] font-bold text-gray-900">
                                Scarlett Lawrence
                            </h3>
                            <div className="w-[120px] h-[4px] bg-[#E01923] rounded-full"></div>
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#000000] leading-relaxed text-semibold text-[17px]">
                        Thank you Team Appingine you guys have a great understanding of
                        what's current, and get things done very quickly compared to
                        others. Reliable communication and qualitative suggestions on useful
                        functionality during the planning stage made for a final product
                        that surpassed initial expectations. Their Project management is
                        amazing. Tight deadlines were reliably met without issue. Our Strong
                        recommendations if you’re looking for quality work.
                    </p>

                    {/* 🔴 Bottom Decorative Lines */}
                    <div className="flex justify-end gap-2 mt-6.5 mr-9">
                        <span className="w-[41px] h-[4.5px] bg-[#E01923] rounded-full"></span>
                        <span className="w-[21px] h-[4.5px] bg-[#E01923] rounded-full opacity-70"></span>
                        <span className="w-[21px] h-[4.5px] bg-[#E01923] rounded-full opacity-50"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
