import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-=[1920px] h-screen overflow-hidden bg-[#20222D]">
      {/* Background Layers */}
      <div
        className="absolute -top-[1900px] -left-[1700px] w-[3700px] h-[2100px] rotate-[-12deg] rounded-br-[250px] bg-[#E81626]"
        style={{ boxShadow: "0px 20px 105px 0px #0000001A" }}
      />
      <div
        className="absolute -top-[2000px] -left-[1600px] w-[3700px] h-[2100px] rotate-[-19deg] rounded-br-[250px] bg-[#D11725]"
        style={{ boxShadow: "0px 20px 105px 0px #0000001A" }}
      />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-10 py-6 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-8" />
          <span className="font-bold text-xl">Apicodero Inc.</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 font-bold text-xl">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Why Choose Us</a>
          <a href="#">Portfolio</a>
          <a href="#">Products</a>
          <a href="#">Testimonial</a>
          <a href="#">Technologies</a>
          <a href="#">Contact</a>
        </nav>

        {/* Call Button */}
        <Button className="bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-red-600 transition">
          +1 (800) 826-0018
        </Button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
        {/* Left Side - Phone Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src="/logo.png"
            alt="App preview"
            className="w-[320px] md:w-[578px] h-auto mt-10 md:mt-[150px] drop-shadow-2xl"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h1 className="scroll-m-20 text-4xl md:text-6xl font-extrabold leading-tight">
            Leading the Way in <br />
            <span className="text-white">App Development Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it on the next level.
          </p>
          <Button
            size="lg"
            className="px-8 py-4 bg-black text-white font-semibold rounded-md shadow-lg hover:bg-gray-900"
          >
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  )
}
