import React from "react";
import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section className="flex flex-col md:flex-row w-full h-[960px]">
            {/* Left Side (Form) */}
            <div className="bg-[#E41E26] text-white w-570 flex flex-col justify-center items-center pr-[35px]">
           <div className="w-[735px] h-[846px] border  items-center justify-center ">
                 <h1 className="text-[30.5px] font-sm tracking-wider font-[Segoe UI]">LET’S TALK</h1>
                <h2 className="text-[42px] font-bold mb-2 font-[Segoe UI] tracking-wider">
                    Got an idea? Let’s get in touch!
                </h2>
                <p className="text-[27px] font-semibold text-gray-100 mb-8 font-[Segoe UI] ">
                    Have queries? Not sure of your App Strategy? Discuss with<br/>
                    us and we'll guide you the way forward.
                   
                </p>

                <form className="flex flex-col gap-5">
                    <Input placeholder="Your Name" className="bg-white text-black h-12" />
                    <Input placeholder="Email Address" type="email" className="bg-white text-black h-12" />
                    <Input placeholder="Phone" className="bg-white text-black h-12" />
                    <Textarea placeholder="Message" className="bg-white text-black h-32 resize-none" />
                    <Button className="bg-gradient-to-r from-black to-[#a30000] hover:opacity-90 text-white font-semibold py-6 rounded-md text-lg">
                        LET’S GET IN TOUCH
                    </Button>
                </form>
           </div>
            </div>

            {/* Right Side (Image + Info) */}
            <div className="relative w-full h-full">
                <img
                    src="/images/contact.png"
                    alt="Contact discussion"
                    className="object-cover"
                />
                <div className="absolute bottom-0 w-full h-85 bg-[#1C1D27] text-white text-center py-8">
                    <p className="text-sm mb-3 px-6">
                        Please submit your inquiry and our App Development Strategist will contact you shortly
                    </p>
                    <div className="flex flex-col items-center">
                        <Phone size={28} className="mb-2" />
                        <p className="text-xl font-bold">+1-(800) 826 8018</p>
                        <p className="text-gray-300 text-sm">info@appicoders.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
