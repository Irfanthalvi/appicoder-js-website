import React from "react";
import { Button } from "@/components/ui/button";
import { services } from "../data/about-service-mockdata";

const AboutAndServices = () => {

    return (
        <section id="ABOUT" className="w-full flex flex-col overflow-hidden ">

            {/* ================= TOP WHITE SECTION ================= */}
            <div className="bg-white py-20 px-6 md:px-16 text-center md:text-left w-full flex flex-col items-center justify-center">
                <div className="w-full md:w-[85%] flex flex-col md:flex-row justify-between items-center gap-10">
                    <h2
                        className="text-[57px] font-bold text-gray-900 leading-snug 
             max-2xl:text-[48px] max-xl:text-[42px] 
             max-lg:text-[36px] max-md:text-[30px] 
             max-sm:text-[22px]"
                    >
                        <span className="text-red-600">Appicoders</span> – #
                        <span className="text-red-600">1</span> Mobile App & Web Development Company in USA
                    </h2>

                    <div className="flex flex-col gap-8 max-w-[550px] max-md:max-w-full px-4">
                        <p
                            className="text-black font-semibold text-[22px] leading-snug 
               max-xl:text-[20px] max-lg:text-[18px] 
               max-md:text-[16px] max-sm:text-[15px]"
                        >
                            Welcome to Appicoders, your trusted partner for expert mobile
                            app and web development. With over 10+ years of experience,
                            we specialize in designing, developing, and marketing cutting-
                            edge solutions for Android, iOS, and Windows platforms.
                        </p>

                        <Button
                            className="uppercase bg-red-800 text-white w-[210px] h-[60px] 
               font-semibold text-[20px] rounded-md
               max-lg:w-[180px] max-lg:h-[50px] 
               max-md:w-[160px] max-md:h-[45px] 
               max-sm:w-full max-sm:h-[45px] 
               max-md:text-[16px]"
                        >
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

                <div className="absolute text-white top-[34%] left-[6.5%] mt-4 
                max-lg:top-[28%] max-md:top-[22%] max-sm:top-[18%]">
                    <h1 id="SERVICES" className="text-[66px] font-bold mb-2 leading-[1.1] 
                 max-xl:text-[45px] max-lg:text-[45px] max-md:text-[33px] max-sm:text-[23px]">
                        Our Services
                    </h1>
                    <h3 className="text-[33px] mt-0 leading-[1.2] 
                 max-lg:text-[26px] max-md:text-[20px] max-sm:text-[16px]">
                        Get to know about what we’re good at.
                    </h3>
                </div>



                {/* ✅ Absolute service grid positioned directly inside this section */}
                <div className="
    absolute 
    top-[45%] left-[6.5%]
    grid grid-cols-1 lg:grid-cols-2 
    gap-y-10 gap-x-16
    text-white z-30
    w-[928px]
    max-lg:top-[40%] max-md:top-[34%] max-sm:top-[26%]
  "
                >

                    {/* <h1>Our Services</h1> */}
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="
      flex items-center gap-5 bg-transparent
      max-md:gap-4 max-sm:gap-3
      max-xl:mt-0 max-lg:mt-[-20px] max-md:mt-[-30px] max-sm:mt-0
    "
                        >
                            {/* Circular Icon */}
                            <div
                                className="
        flex items-center justify-center bg-white rounded-full shadow-md
        size-[88px] max-lg:size-[60px] max-md:size-[50px] max-sm:size-[40px]
      "
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="
          size-[95px] object-contain
          max-lg:size-[60px] max-md:size-[50px] max-sm:size-[50px]
        "
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <h4
                                    className="
          text-[24px] font-bold text-white
          max-xl:text-[26px] max-lg:text-[25px] max-md:text-[27px] max-sm:text-[16px]
        "
                                >
                                    {service.title}
                                </h4>
                                <p
                                    className="
          text-[21px] font-semibold text-gray-200
          max-xl:text-[15px] max-lg:text-[15px] max-md:text-[15px] max-sm:text-[12px]
        "
                                >
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Background Computer Image */}
                <div className="max-xl:hidden absolute right-0 top-[37%] transform -translate-y-1/2">
                    <img
                        src="images/about-service-computer.png"
                        alt="Computer"
                        className="w-[840px] object-contain"
                    />
                </div>
            </div>



            {/* ================= BOTTOM CASE STUDY SECTION ================= */}
            <div
                className="relative w-full h-[143.5vh] flex items-center justify-start text-white z-10 overflow-hidden px-16 "
                style={{
                    backgroundImage: `url('images/about-service-background2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundSize: "100% 100%",
                }}
            >
                <div
                    className="
    absolute left-[111px] top-[448px] z-30 max-w-2xl text-left space-y-6
    max-xl:left-[60px] max-lg:left-[40px] max-md:left-[20px]
    max-lg:top-[36%] max-md:top-[33%] max-sm:top-[35%]
    max-sm:max-w-full max-sm:text-center
  "
                >
                    {/* --- Small Top Labels --- */}
                    <div className="flex flex-wrap gap-3 mb-3 justify-start max-sm:justify-center">
                        {["iOS Development", "Android Development", "UI/UX Design"].map((label) => (
                            <span
                                key={label}
                                className="bg-white text-red-600 font-medium text-[10px] rounded-md shadow-sm
                   w-[107px] h-[35px] flex items-center justify-center text-center"
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* --- Title --- */}
                    <h3
                        className="text-[42.5px] font-bold text-white leading-none pt-1.5
               max-lg:text-[32px] max-md:text-[26px] max-sm:text-[20px]"
                    >
                        Caviar - Order Food<br className="max-sm:hidden" /> Delivery
                    </h3>

                    {/* --- Description --- */}
                    <p
                        className="text-gray-200 text-[24px] pt-1 font-semibold leading-snug w-[850px]
               max-xl:w-[700px] max-lg:w-[500px] max-md:w-[400px] max-sm:w-full
               max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]
               max-sm:text-center"
                    >
                        Get food delivered from curated lists of local restaurants right at your
                        fingertips with Caviar. Enjoy quality dining at home and make any
                        night a special occasion.
                    </p>

                    {/* --- Store Buttons --- */}
                    <div
                        className="flex items-center gap-4 pt-2 
               max-sm:flex-col max-sm:items-center"
                    >
                        <a href="#" className="hover:opacity-90 transition">
                            <img
                                src="images/about-service-appstore.png"
                                alt="App Store"
                                className="w-[160px] h-auto max-sm:w-[200px]"
                            />
                        </a>
                        <a href="#" className="hover:opacity-90 transition">
                            <img
                                src="images/about-service-googleplay.png"
                                alt="Google Play"
                                className="w-[160px] h-auto max-sm:w-[200px]"
                            />
                        </a>
                    </div>

                    {/* --- View Case Study Button --- */}
                    <Button
                        className="bg-red-800 text-white w-81 h-16 font-semibold text-lg rounded-md px-8 py-6 mt-5
                max-sm:h-[60px] max-sm:text-base"
                    >
                        VIEW CASE STUDY
                    </Button>
                </div>

                {/* --- Images on Right --- */}
                <div className="absolute right-[-78px] -translate-x-1/2 top-[380px] z-20 max-xl:hidden">
                    <img
                        src="images/about-service-mobile.png"
                        alt="Overlay Image"
                        className="w-[554px] object-contain"
                    />
                </div>

                <div className="absolute right-[86px] -translate-x-1/2 top-[603px] z-20 max-xl:hidden">
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
