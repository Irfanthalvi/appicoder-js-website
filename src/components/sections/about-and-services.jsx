import React from "react";
import { Button } from "@/components/ui/button";
import { Brain, Smartphone, Globe, Layers, Cpu, Rocket } from "lucide-react";

const AboutAndServices = () => {
  const services = [
    {
      id: 1,
      icon: <Smartphone size={26} />,
      title: "Custom Mobile Applications",
      desc: "iOS, Android & Flutter Apps",
    },
    {
      id: 2,
      icon: <Globe size={26} />,
      title: "Custom Web Development",
      desc: "React.js, Next.js, Node.js Apps",
    },
    {
      id: 3,
      icon: <Layers size={26} />,
      title: "Augmented Reality",
      desc: "React AR & Unity 3D Apps",
    },
    {
      id: 4,
      icon: <Brain size={26} />,
      title: "Artificial Intelligence",
      desc: "AI models & Machine Learning",
    },
    {
      id: 5,
      icon: <Cpu size={26} />,
      title: "Blockchain Development",
      desc: "Custom Blockchain Solutions",
    },
    {
      id: 6,
      icon: <Rocket size={26} />,
      title: "MVP Development",
      desc: "For Startups & Enterprises",
    },
  ];

  return (
    <section className="w-full flex flex-col">

      {/* ================= TOP WHITE SECTION ================= */}
      <div className="bg-white py-16 px-6 md:px-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          <span className="text-red-600 font-bold">Appicoders</span> – #1. Mobile App & Web Development Company in USA
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
          Welcome to Appicoders, your trusted partner for expert mobile app and web development services. 
          Our team of professionals specializes in designing, developing, and maintaining 
          next-gen solutions to empower modern platforms — including Android, iOS, and Web interfaces.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Read More</Button>
      </div>

      {/* ================= MIDDLE RED SERVICES SECTION ================= */}
      <div
        className="relative bg-gradient-to-br from-red-700 to-red-600 text-white py-20 px-6 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/images/our-services-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Our Services</h3>
          <p className="text-gray-200 mb-12 max-w-2xl">
            Get to know about what we’re good at.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-start bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-3">{service.icon}</div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm text-gray-200">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM CASE STUDY SECTION ================= */}
      <div
        className="relative py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/case-study-bg.jpg')",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Caviar – Order Food Delivery</h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            A user-friendly food delivery app designed for local restaurants offering fast order 
            tracking, seamless payment, and engaging user experience.
          </p>
          <Button className="bg-white text-red-600 font-semibold hover:bg-gray-100">
            View Case Study
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutAndServices;
