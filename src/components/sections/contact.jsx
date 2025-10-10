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
                <div className="w-[735px] h-[846px] items-center justify-center ">
                    <h1 className="text-[30.5px] font-sm tracking-wider font-[Segoe UI] mt-1">LET’S TALK</h1>
                    <h2 className="text-[42px] font-bold mb-2.5 font-[Segoe UI] tracking-wider">
                        Got an idea? Let’s get in touch!
                    </h2>
                    <p className="text-[27px] font-semibold text-gray-100 mb-6.5 font-[Segoe UI] leading-[1.2]">
                        Have queries? Not sure of your App Strategy? Discuss with<br />
                        us and we'll guide you the way forward.
                    </p>


                    <form className="flex flex-col gap-6">
                        <Input
                            placeholder="Your Name"
                            className="bg-white text-black h-[60px] placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3"
                        />

                        <Input
                            placeholder="Email Address"
                            type="email"
                            className="bg-white text-black h-[60px] placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3"
                        />

                        <Input
                            placeholder="Phone"
                            className="bg-white text-black h-[60px] placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3"
                        />

                        <Textarea
                            placeholder="Message"
                            className="bg-white text-black h-[270px] resize-none mb-5 placeholder:text-[18px] placeholder:text-gray-500 placeholder:pl-3 pt-4"
                        />

                        <Button className="bg-gradient-to-r from-[#a30000] via-black to-[#a30000] hover:opacity-90 text-white font-semibold py-8 rounded-md text-lg">
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
                <div className="absolute bottom-0 w-full h-84.5 bg-[#1C1D27] text-white text-center py-8.5">
                    <p className="text-[26px] mb-3 px-6 leading-[1.1]">
                        Please submit your inquiry and our App Development<br />
                        Strategist will contact you shortly
                    </p>
                    <div className="flex flex-col items-center">
                        <Phone size={78} className="mb-6 mt-2" />
                        <p className="text-[43px] font-bold ml-4">+1-(800) 826 8018</p>
                        <p className="text-gray-300 text-[19.5px] leading-[1.1]">info@appicoders.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
