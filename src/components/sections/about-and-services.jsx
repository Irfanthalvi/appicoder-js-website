import React from "react";
import { Button } from "@/components/ui/button";
import { services } from "../data/about-service-mockdata";

const AboutAndServices = () => {

    return (
        <section className="w-full flex flex-col overflow-hidden">

            {/* ================= TOP WHITE SECTION ================= */}
            <div className="bg-white py-20 px-6 md:px-16 text-center md:text-left w-full flex flex-col items-center justify-center">
                <div className="w-full md:w-[85%] flex flex-col md:flex-row justify-between items-center gap-10">
                    <h2 className="text-[57px] font-bold text-gray-900 leading-snug">
                        <span className="text-red-600">Appicoders</span> – #<span className="text-red-600">1</span> Mobile
                        <br />App & Web Development<br />Company in USA
                    </h2>

                    <div className="flex flex-col gap-8 max-w-[550px]">
                        <p className="text-black font-semibold text-[22px] leading-snug">
                            Welcome to Appicoders, your trusted partner for expert mobile
                            app and web development. With over 10+ years of experience,
                            we specialize in designing, developing, and marketing cutting-
                            edge solutions for Android, iOS, and Windows platforms.
                        </p>
                        <Button className="uppercase bg-red-800 text-white w-[210px] h-[60px] font-semibold text-[20px] rounded-md">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>


            {/* ================= MIDDLE RED SERVICES SECTION ================= */}
            <div
                className="
          relative 
          w-full 
          h-[195vh]  
          flex items-center justify-center 
          text-white 
          overflow-visible 
          -mb-115 
          z-20
        "
                style={{
                    backgroundImage: "url('images/about-service-background1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "100% 100%",
                }}
            >

                <div className="absolute text-white top-[34%] left-[6.5%] mt-4">
                    <h1 className="text-[66px] font-bold mb-2 leading-[1.1]">Our Services</h1>
                    <h3 className="text-[33px] mt-0 leading-[1.2]">
                        Get to know about what we’re good at.
                    </h3>
                </div>

                {/* ✅ Absolute service grid positioned directly inside this section */}
                <div
                    className="
                              absolute 
                              top-[45%] left-[6.5%]
                              grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16
                              text-white z-30
                              w-[928px] 
                              "
                >
                    {/* <h1>Our Services</h1> */}
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex items-center gap-5 bg-transparent"
                        >
                            {/* Circular Icon */}
                            <div className="flex items-center justify-center bg-white rounded-full size-[90px] shadow-md">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="size-[95px] object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <h4 className="text-[24px] font-bold text-white">
                                    {service.title}
                                </h4>
                                <p className="text-[21px] font-semibold text-gray-200">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Background Computer Image */}
                <div className="absolute right-0 top-[37%] transform -translate-y-1/2">
                    <img
                        src="images/about-service-computer.png"
                        alt="Computer"
                        className="w-[840px] object-contain"
                    />
                </div>
            </div>



            {/* ================= BOTTOM CASE STUDY SECTION ================= */}
            <div
                className="relative w-full h-[143.5vh] flex items-center justify-start text-white z-10 overflow-hidden px-16"
                style={{
                    backgroundImage: `url('images/about-service-background2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "100% 100%",
                }}
            >
                <div className="absolute left-[111px] top-[448px] z-30 max-w-2xl text-left space-y-6">
                    {/* --- Small Top Labels --- */}
                    <div className="flex gap-4.5 mb-3">
                        {["iOS Development", "Android Development", "UI/UX Design"].map((label) => (
                            <span
                                key={label}
                                className="bg-white text-red-600 font-medium text-[8.5px] rounded-md shadow-sm w-[107px] h-[35px] flex items-center justify-center text-center"
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* --- Title --- */}
                    <h3 className="text-[42.5px] font-bold text-white leading-none pt-1.5">
                        Caviar - Order Food<br /> Delivery
                    </h3>

                    {/* --- Description --- */}
                    <p className="text-gray-200 text-[24px] pt-1 text-bold leading-none w-[850px]">
                        Get food delivered from curated lists of local restaurants right at your<br />
                        fingertips with Caviar. Enjoy quality dining at home and make any<br />
                        night a special occasion.
                    </p>

                    {/* --- Store Buttons --- */}
                    <div className="flex items-center gap-4 pt-2">
                        <a href="#" className="hover:opacity-90 transition">
                            <img
                                src="images/about-service-appstore.png"
                                alt="App Store"
                                className="w-[160px] h-auto"
                            />
                        </a>
                        <a href="#" className="hover:opacity-90 transition">
                            <img
                                src="images/about-service-googleplay.png"
                                alt="Google Play"
                                className="w-[160px] h-auto"
                            />
                        </a>
                    </div>

                    {/* --- View Case Study Button --- */}
                    <Button className="bg-red-800 text-white w-81 h-16 font-semibold text-lg rounded-md px-8 py-6 mt-5">
                        VIEW CASE STUDY
                    </Button>
                </div>

                {/* --- Images on Right --- */}
                <div className="absolute right-[-78px] -translate-x-1/2 top-[380px] z-20">
                    <img
                        src="images/about-service-mobile.png"
                        alt="Overlay Image"
                        className="w-[554px] object-contain"
                    />
                </div>

                <div className="absolute right-[86px] -translate-x-1/2 top-[603px] z-20">
                    <img
                        src="images/about-service-icon.png"
                        alt="Overlay Icon"
                        className="w-[45px] h-auto object-contain mt-1"
                    />
                </div>
            </div>

        </section>
    );
};

export default AboutAndServices;
