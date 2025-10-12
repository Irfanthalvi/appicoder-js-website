import { cards } from "../data/why-choose-us-mockdata";

const WhyChooseUs = () => {

  return (
    <section id="WHY-CHOOSE-US"
      className="relative flex flex-col h-[890px] w-full bg-[length:100%] bg-no-repeat bg-[#EAEDEF] px-6"
      style={{
        backgroundImage: "url('/images/WhyChooseUs-background.png')",
        backgroundPosition: "center 88%",
      }}
    >
      {/* Heading Section */}
      <div className="text-center pt-21.5">
        <h2 className="text-[66px] font-bold text-gray-900  max-lg:text-[32px] max-md:text-[26px] max-sm:text-[20px]">
          Why Choose Us?
        </h2>
        <p className="text-black text-[32px] mx-auto font-semibold mt-3 leading-[1.1] tracking-normal text-center  max-lg:text-[32px] max-md:text-[26px] max-sm:text-[20px]">
          With our unique approach and cost-effective solutions, your business
          will<br /> prosper because quality is the top priority for us.
        </p>

      </div>

      {/* 3 Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-21.5 mt-29 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="w-full sm:w-[25%] flex flex-col items-center text-center bg-transparent pt-4"
          >
            <div className="flex flex-col items-center justify-start h-full px-2 max-sm:px-1 
                   -mt-0 max-lg:mt-45 max-md:-mt-12 max-sm:-mt-16"
            >
              {/* Icon */}
              <img
                src={card.img}
                alt={card.title}
                className="
      w-[114px] h-[94px] mb-4 object-contain
      max-lg:w-[80px] max-lg:h-[60px]
      max-md:w-[80px] max-md:h-[65px]
      max-sm:w-[70px] max-sm:h-[55px]
      max-sm:mb-3
    "
              />

              {/* Title */}
              <h3
                className={`text-[27px] font-bold mt-1 ml-3
      max-lg:text-[20px] max-md:text-[15px] max-sm:text-[12px] 
      ${index === 0 || index === 2 ? "text-[#9E9E9E]" : ""}
    `}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[21px] mt-2 flex-grow leading-[1.4]
      max-lg:text-[10px] max-sm:text-[10px]
      ${index === 0 || index === 2 ? "text-[#9E9E9E]" : ""}
    `}
              >
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
