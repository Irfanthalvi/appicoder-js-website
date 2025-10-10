import { awards } from "../data/award-recognition.mockdata";

export default function AwardRecognition() {

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat h-[675px] flex flex-col justify-start items-center pt-20">
      <h1 className="font-[Segoe UI] font-bold text-[66px] leading-[64px] tracking-normal text-black">
        Awards and Recognitions
      </h1>

      <div className="relative w-[1472px] h-[537px] flex justify-center items-center">
        {awards.map((award) => (
          <img
            key={award.id}
            src={award.src}
            alt={award.alt}
            className={`${award.position} w-auto object-contain transition-transform duration-500`}
          />
        ))}
      </div>
    </section>
  );
}
