import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactInfo, content, formFields } from "../data/contact-mockdata";

const Contact = () => {

  return (
    <section className="flex flex-col md:flex-row w-full h-[960px]">
      {/* Left Side (Form Section) */}
      <div className="bg-[#E41E26] text-white w-570 flex flex-col justify-center items-center pr-[35px]">
        <div className="w-[735px] h-[846px] items-center justify-center">
          <h1 className="text-[30.5px] font-sm tracking-wider font-[Segoe UI] mt-1">
            {content.title}
          </h1>
          <h2 className="text-[42px] font-bold mb-2.5 font-[Segoe UI] tracking-wider">
            {content.subtitle}
          </h2>
          <p className="text-[27px] font-semibold text-gray-100 mb-6.5 font-[Segoe UI] leading-[1.2]">
            {content.description}
          </p>

          {/* Dynamic Form */}
          <form className="flex flex-col gap-6">
            {formFields.map((field) =>
              field.type === "textarea" ? (
                <Textarea
                  key={field.id}
                  placeholder={field.placeholder}
                  className={`bg-white text-black ${field.height} resize-none mb-5 placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3 pt-4`}
                />
              ) : (
                <Input
                  key={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-white text-black h-[60px] placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3"
                />
              )
            )}

            <Button className="bg-gradient-to-r from-[#a30000] via-black to-[#a30000] hover:opacity-90 text-white font-semibold py-8 rounded-md text-[22px]">
              {content.cta}
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side (Image + Info Section) */}
      <div className="relative w-full h-full">
        <img
          src={contactInfo.image}
          alt="Contact discussion"
          className="object-cover"
        />
        <div className="absolute bottom-0 w-full bg-[#1C1D27] text-white text-center py-8.5">
          <p className="text-[26px] mb-3 px-6 leading-[1.1]">{content.footerText}</p>

          <div className="flex flex-col items-center">
            <Phone size={78} className="mb-6 mt-2" />
            <p className="text-[43px] font-bold ml-4">{contactInfo.phone}</p>
            <p className="text-gray-300 text-[19.5px] leading-[1.1]">
              {contactInfo.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
