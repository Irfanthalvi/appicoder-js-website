import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactInfo, content, formFields } from "../data/contact-mockdata";

const Contact = () => {

  return (
    <section
      className="flex flex-col md:flex-row w-full h-[960px]
                 max-xl:h-auto max-lg:h-auto max-md:h-auto max-sm:h-auto"
    >
      {/* Left Side (Form Section) */}
      <div
        className="bg-[#E41E26] text-white w-570 flex flex-col justify-center items-center pr-[35px]
                   max-xl:w-[700px]  max-lg:w-full max-lg:pr-0 max-md:py-10 max-sm:py-8"
      >
        <div
          className="w-[735px] h-[846px] items-center justify-center
                     max-xl:w-[650px] max-lg:w-[85%] max-xl:ml-2 max-md:w-[90%] max-sm:w-[92%]
                     max-xl:h-auto max-lg:h-auto"
        >
          <h1
            className="text-[30.5px] font-sm tracking-wider font-[Segoe UI] mt-1
                       max-xl:text-[25px] max-lg:text-[22px] max-md:text-[22px] max-sm:text-[20px]"
          >
            {content.title}
          </h1>
          <h2
            className="text-[42px] font-bold mb-2.5 font-[Segoe UI] tracking-wider
                       max-xl:text-[35px] max-lg:text-[22px] max-md:text-[28px] max-sm:text-[24px]"
          >
            {content.subtitle}
          </h2>
          <p
            className="text-[27px] font-semibold text-gray-100 mb-6.5 font-[Segoe UI] leading-[1.2]
                       max-xl:text-[20px] max-lg:text-[14px] max-md:text-[18px] max-sm:text-[16px]"
          >
            {content.description}
          </p>

          {/* Dynamic Form */}
          <form
            className="flex flex-col gap-6
                       max-xl:gap-5 max-lg:gap-3 max-md:gap-3 max-sm:gap-3"
          >
            {formFields.map((field) =>
              field.type === "textarea" ? (
                <Textarea
                  key={field.id}
                  placeholder={field.placeholder}
                  className={`bg-white text-black ${field.height} resize-none mb-5 placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3 pt-4
                              max-xl:placeholder:text-[16px] max-lg:placeholder:text-[18px] max-md:placeholder:text-[14px] max-sm:placeholder:text-[12px]`}
                />
              ) : (
                <Input
                  key={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-white text-black h-[60px] placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3
                             max-xl:h-[56px] max-lg:h-[40px] max-md:h-[48px] max-sm:h-[44px]
                             max-xl:placeholder:text-[16px] max-lg:placeholder:text-[15px] max-md:placeholder:text-[14px] max-sm:placeholder:text-[12px]"
                />
              )
            )}

            <Button
              className="bg-gradient-to-r from-[#a30000] via-black to-[#a30000] hover:opacity-90 text-white font-semibold py-8 rounded-md text-[22px]
                         max-xl:py-7 max-lg:py-6 max-lg:mb-4 max-md:py-5 max-sm:py-4
                         max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px]"
            >
              {content.cta}
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side (Image + Info Section) */}
      <div
        className="relative w-full h-full
                   max-xl:h-[800px] max-lg:h-[750px] max-md:h-[700px] max-sm:h-[600px]"
      >
        <img
          src={contactInfo.image}
          alt="Contact discussion"
          className="object-cover
                     max-lg:object-contain max-md:object-contain max-sm:object-contain"
        />
        <div
          className="absolute bottom-0 w-full bg-[#1C1D27] text-white text-center py-8.5
                     max-xl:py-40 max-lg:py-19 max-md:py-25 max-sm:-py-6"
        >
          <p
            className="text-[26px] mb-3 px-6 leading-[1.1]
                       max-xl:text-[20px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[15px]"
          >
            {content.footerText}
          </p>

          <div className="flex flex-col items-center">
            <Phone
              size={78}
              className="fill-white mb-6 mt-2 max-xl:size-[40px] max-lg:size-[60px] max-md:size-[50px] max-sm:size-[40px]"
            />
            <p
              className="text-[43px] font-bold ml-4
                         max-xl:text-[20px] max-lg:text-[34px] max-md:text-[28px] max-sm:text-[22px]"
            >
              {contactInfo.phone}
            </p>
            <p
              className="text-gray-300 text-[19.5px] leading-[1.1]
                         max-xl:text-[10px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[13px]"
            >
              {contactInfo.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
