import { Quote } from "lucide-react";
import { testimonialData } from "../data/testimonial-section-mockdata";

const TestimonialSection = () => {
    return (
        <section
            className="relative flex items-center justify-center h-[1080px] bg-[length:100%_106%] bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${testimonialData.backgroundImage}')` }}
        >
            {/* 🔴 Red Overlay */}
            <div className="absolute inset-0 flex justify-center pt-[147px]">
                <div
                    className="rounded-[10px] opacity-100 mix-blend-multiply shadow-[0_4px_20px_#0000001A]"
                    style={{
                        backgroundColor: testimonialData.overlay.color,
                        width: testimonialData.overlay.width,
                        height: testimonialData.overlay.height,
                    }}
                ></div>
            </div>

            {/* White Quote Circle (Top Left) */}
            <div
                className="absolute bg-white rounded-full flex items-center justify-center shadow-md"
                style={{
                    top: testimonialData.topQuote.position.top,
                    left: testimonialData.topQuote.position.left,
                    width: testimonialData.topQuote.size,
                    height: testimonialData.topQuote.size,
                }}
            >
                <Quote
                    className="text-[#E01923] rotate-180 fill-[#E01923]"
                    style={{ width: testimonialData.topQuote.iconSize, height: testimonialData.topQuote.iconSize }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-[82%] h-[62%] flex flex-col lg:flex-row justify-between">
                {/* Left Text */}
                <div className="text-white pt-[169px]">
                    <h4 className="uppercase tracking-wide text-[31.6px] text-white/80 mb-3">
                        {testimonialData.heading.subtitle}
                    </h4>
                    <h2 className="text-[66px] font-bold leading-none">
                        {testimonialData.heading.titleLine1} <br />
                        <span className="relative top-[11px] inline-block">
                            {testimonialData.heading.titleLine2}
                        </span>
                    </h2>
                </div>

                {/* White Testimonial Card */}
                <div className="bg-white rounded-[10px] p-7 mt-4.5 shadow-xl relative z-20 w-[735px] h-[516px] flex flex-col justify-between">
                    {/* Profile Row */}
                    <div className="flex items-center relative mt-5">
                        {/* Profile Image */}
                        <div className="relative">
                            <img
                                src={testimonialData.client.image}
                                alt={testimonialData.client.name}
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
                                {testimonialData.client.name}
                            </h3>
                            <div className="w-[120px] h-[4px] bg-[#E01923] rounded-full"></div>
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#000000] leading-relaxed text-semibold text-[17px]">
                        {testimonialData.client.testimonial}
                    </p>

                    {/* 🔴 Bottom Decorative Lines */}
                    <div className="flex justify-end gap-2 mt-6.5 mr-9">
                        {testimonialData.lines.map((line, index) => (
                            <span
                                key={index}
                                className="h-[4.5px] bg-[#E01923] rounded-full"
                                style={{ width: line.width, opacity: line.opacity }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
