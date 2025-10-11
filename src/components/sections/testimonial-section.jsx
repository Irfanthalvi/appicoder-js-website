import { Quote } from "lucide-react";
import { testimonialData } from "../data/testimonial-section-mockdata";

const TestimonialSection = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[1080px] bg-[length:100%_106%] shadow-lg bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${testimonialData.backgroundImage}')` }}
    >
      {/* 🔴 Red Overlay */}
      <div className="absolute inset-0 flex justify-center pt-[147px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[60px]">
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
        className="absolute bg-white rounded-full flex items-center justify-center shadow-md
                   max-lg:w-[130px] max-lg:h-[130px]
                   max-md:w-[100px] max-md:h-[100px]
                   max-sm:w-[80px] max-sm:h-[80px]"
        style={{
          top: testimonialData.topQuote.position.top,
          left: testimonialData.topQuote.position.left,
          width: testimonialData.topQuote.size,
          height: testimonialData.topQuote.size,
        }}
      >
        <Quote
          className="text-[#E01923] rotate-180"
          style={{ width: testimonialData.topQuote.iconSize, height: testimonialData.topQuote.iconSize }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[82%] h-[62%] flex flex-col lg:flex-row justify-between">
        {/* Left Text */}
        <div className="text-white pt-[169px] max-lg:pt-[120px] max-md:pt-[100px] max-sm:pt-[80px]">
          <h4 className="uppercase tracking-wide text-[31.6px] text-white/80 mb-3
                         max-lg:text-[26px] max-md:text-[22px] max-sm:text-[18px]">
            {testimonialData.heading.subtitle}
          </h4>
          <h2 className="text-[66px] font-bold leading-none
                         max-lg:text-[52px] max-md:text-[42px] max-sm:text-[32px]">
            {testimonialData.heading.titleLine1} <br />
            <span className="relative top-[11px] inline-block
                             max-lg:top-[8px] max-md:top-[6px] max-sm:top-[3px]">
              {testimonialData.heading.titleLine2}
            </span>
          </h2>
        </div>

        {/* White Testimonial Card */}
        <div className="bg-white rounded-[10px] p-7 mt-4.5 shadow-xl relative z-20
                        w-[735px] h-[516px]
                        max-lg:w-[600px] max-lg:h-[450px]
                        max-md:w-[480px] max-md:h-[400px]
                        max-sm:w-full max-sm:h-auto
                        flex flex-col justify-between">
          {/* Profile Row */}
          <div className="flex items-center relative mt-5">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={testimonialData.client.image}
                alt={testimonialData.client.name}
                className="rounded-full size-[160px] object-cover
                           max-lg:w-[130px] max-lg:h-[130px]
                           max-md:w-[100px] max-md:h-[100px]
                           max-sm:w-[80px] max-sm:h-[80px]"
              />
              {/* 🔴 Small Red Quote Overlap */}
              <div className="absolute left-[28px] top-[138px] bottom-[5px] size-[44px] bg-[#E01923] rounded-full flex items-center justify-center shadow-md
                             max-xl:hidden">
                <Quote className="size-5 text-white rotate-180 " />
              </div>
            </div>

            {/* Client Name + Line */}
            <div className="ml-6.5 mb-1.5">
              <h3 className="text-[28.5px] font-bold text-gray-900
                             max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px]">
                {testimonialData.client.name}
              </h3>
              <div className="w-[120px] h-[4px] bg-[#E01923] rounded-full
                              max-lg:w-[90px] max-md:w-[70px] max-sm:w-[60px]"></div>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-[#000000] leading-relaxed text-semibold text-[17px]
                        max-lg:text-[15px] max-md:text-[14px] max-sm:text-[12px] mt-3">
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
