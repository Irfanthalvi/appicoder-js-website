import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="min-h-[490px] bg-gradient-to-b from-[#1C1D27] to-[#12131A]">
            <div className="w-full  border-t  text-white py-12 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[1250px] mx-auto pt-9">

                    {/* Contact Section */}
                    <div>
                        <img
                            src="/images/Appicodder.png"
                            alt="Appicoders Logo"
                            className="w-[310px] h-[90px]  object-contain"
                        />

                        <div className="pt-9.5">
                            <h3 className="font-[Segoe UI] text-[32px] font-semibold mb-1 ">
                                Contact Us
                            </h3>
                            <p className="font-[Segoe UI] font-bold text-[16px] leading-[22px] text-gray-400">
                                Tel: +1 (800) 826-8018
                            </p>
                            <p className="font-[Segoe UI] font-bold text-[16px] leading-[22px] text-gray-400">
                                Email: info@appicoders.com
                            </p>

                            <div className="flex gap-4 mt-3">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="transition-colors border rounded-xl p-1 hover:text-blue-500"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="transition-colors border rounded-xl p-1 hover:text-sky-400"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="transition-colors border rounded-xl p-1 hover:text-blue-400"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    {/* About Section */}
                    <div className="pt-9 pl-26">
                        <h3 className="font-[Segoe UI] text-[40px] font-semibold mb-8">
                            About
                        </h3>
                        <ul className="space-y-4 font-[Segoe UI]">
                            <li>
                                <a href="#" className="text-gray-400 text-[16px] font-bold">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 text-[16px] font-bold">ABOUT US</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 text-[16px] font-bold">CONTACT US</a>
                            </li>
                        </ul>
                    </div>


                    {/* Services Section */}
                    <div className="pt-9 pl-3">
                        <h3 className="font-[Segoe UI] text-[40px] font-semibold mb-8">
                            Appicoders Services
                        </h3>
                        <ul className="text-[16px] font-[Segoe UI] space-y-3.5">
                            <li className="uppercase flex items-start text-gray-400 font-bold">
                                <span className="mr-2">»</span> iPhone Application Development
                            </li>
                            <li className="uppercase flex items-start text-gray-400 font-bold">
                                <span className="mr-2">»</span> Android Application Development
                            </li>
                            <li className="uppercase flex items-start text-gray-400 font-bold">
                                <span className="mr-2">»</span> Enterprise App Development
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
            <div>
                <div className="border-t border-gray-700 w-full my-3" />
                <div className="text-center text-[16px] text-gray-300 mt-8">
                    © 2025 APPICODERS. ALL RIGHTS RESERVED.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
