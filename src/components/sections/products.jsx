import { products, productsData } from "../data/products-mockdata";

export default function Products() {
  return (
    <section
      className="relative w-full bg-cover bg-center pt-6 bg-no-repeat border-b"
      style={{ backgroundImage: `url('${productsData.backgroundImage}')` }}
    >
      {/* Heading */}
      <h1
        className="text-white text-center font-bold text-[66px] mb-3
                   max-lg:text-[52px] max-md:text-[42px] max-sm:text-[30px]"
      >
        {productsData.heading}
      </h1>

      {/* Tabs */}
      <div
        className="flex flex-wrap justify-between mx-auto w-[73.5%] mb-16 
                   text-white font-[Segoe UI] font-bold tracking-[1px]
                   max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%]"
      >
        {productsData.tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === 0
                ? "border-b-5 mr-2 text-[30px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[18px]"
                : "text-[20px] mr-2 max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div
        className="container mx-auto w-[87%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   justify-items-center gap-x-10 gap-y-12 pb-20
                   max-lg:w-[90%] max-lg:gap-x-8 max-lg:gap-y-10
                   max-md:w-[92%] max-md:gap-x-6 max-md:gap-y-8
                   max-sm:w-[95%] max-sm:gap-x-4 max-sm:gap-y-6"
      >
        {products.map((card) => (
          <div
            key={card.id}
            className="relative bg-white rounded flex flex-col overflow-hidden group
                       w-[480px] h-[370px]
                       max-xl:w-[305px] max-xl:h-[340px]
                       max-lg:w-[330px] max-lg:h-[300px]
                       max-md:w-[300px] max-md:h-[260px]
                       max-sm:w-[50%] max-sm:h-[220px]"
          >
            {/* Product Image */}
            <img
              src={card.img}
              alt={card.title}
              className={`${
                card.id === 1
                  ? "mt-auto pt-6"
                  : card.id === 5
                  ? "overflow-hidden"
                  : "m-auto"
              } 
              object-contain max-lg:pt-4 max-md:pt-2 max-sm:pt-1`}
            />

            {/* Conditional Overlay for ID 5 */}
            {card.id === 5 && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center transition-opacity duration-500">
                <div className="pt-22 flex flex-col items-center px-4">
                  <img
                    src="/images/product-mobile-icon.png"
                    alt="Overlay Icon"
                    className="size-[66px] object-contain mb-7 mr-1
                               max-lg:size-[56px] max-md:size-[44px] max-sm:size-[34px]"
                  />
                  <h2
                    className="text-white text-[39px] font-bold ml-3
                               max-lg:text-[32px] max-md:text-[26px] max-sm:text-[20px]"
                  >
                    {card.title}
                  </h2>
                  <p
                    className="text-white/80 text-[18px] w-[80%] leading-[1.3]
                               max-lg:text-[16px] max-md:text-[13px] max-sm:text-[11px]
                               max-sm:w-[90%]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas et mi condimentum.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
