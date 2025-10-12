import { awards } from "../data/award-recognition.mockdata";

export default function AwardRecognition() {
  return (
    <section className="relative w-full h-auto lg:h-[675px] flex flex-col justify-start items-center pt-20">

      {/* Heading */}
      <h1 className="font-[Segoe UI] font-bold text-[66px] leading-[64px] tracking-normal text-black text-center
                     max-xl:text-[50px] max-lg:text-[40px] max-md:text-[32px] max-sm:text-[24px]">
        Awards and Recognitions
      </h1>

      {/* Awards Grid for Mobile/Tablet */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-10 justify-items-center items-center w-full px-6 xl:hidden">
        {awards.map((award) => (
          <div key={award.id} className="flex justify-center items-center">
            <img
              src={award.src}
              alt={award.alt}
              className="w-[120px] sm:w-[140px] md:w-[160px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Absolute Positioned Awards for Laptop */}
      <div className="hidden lg:block relative w-[1472px] h-[537px] ">
        {awards.map((award) => (
          <img
            key={award.id}
            src={award.src}
            alt={award.alt}
            className={`${award.position} xl:block hidden object-contain`}
          />
        ))}
      </div>

    </section>
  );
}
