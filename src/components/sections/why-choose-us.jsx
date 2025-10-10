import { cards } from "../data/why-choose-us-mockdata";

const WhyChooseUs = () => {

  return (
    <section
      className="relative flex flex-col h-[890px] w-full bg-[length:100%] bg-no-repeat bg-[#EAEDEF] px-6"
      style={{
        backgroundImage: "url('/images/WhyChooseUs-background.png')",
        backgroundPosition: "center 88%",
      }}
    >
      {/* Heading Section */}
      <div className="text-center pt-21.5">
        <h2 className="text-[66px] font-bold text-gray-900">
          Why Choose Us?
        </h2>
        <p className="text-black text-[32px] mx-auto font-semibold mt-3 leading-[1.1] tracking-normal text-center">
          With our unique approach and cost-effective solutions, your business
          will<br /> prosper because quality is our top priority for us.
        </p>

      </div>

      {/* 3 Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-21.5 mt-29 flex-wrap">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[25%] flex flex-col items-center text-center bg-transparent pt-4"
          >
            <div className="flex flex-col items-center justify-start h-full">
              {/* Icon */}
              <img
                src={card.img}
                alt={card.title}
                className="w-[114px] h-[94px] mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-[28px] font-semibold mt-1 ml-3">{card.title}</h3>

              {/* Description */}
              <p className="text-[#9E9E9E] text-[21px] mt-2 leading-[1.2] flex-grow">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;
