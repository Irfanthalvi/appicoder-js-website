export default function Products() {
    const products = [
        { id: 1, img: "/images/product-laptop1.png", title: "Sports Training App" },
        { id: 2, img: "/images/product-ipad2.png", title: "CRM 365" },
        { id: 3, img: "/images/product-mobile3.png", title: "OSDA" },
        { id: 4, img: "/images/product-ipad4.png", title: "Marketplace" },
        { id: 5, img: "/images/product-mobile5.png", title: "Health Supreme" },
        { id: 6, img: "/images/product-laptop6.png", title: "Fitness" },
    ];

    return (
        <section
            className="relative w-full bg-cover bg-center pt-6 bg-no-repeat border-b"
            style={{ backgroundImage: "url('/images/product-background.png')" }}
        >
            {/* Heading */}
            <h1 className="text-white text-center font-bold text-[66px] mb-3">
                Products
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-between mx-auto w-[73.5%] mb-16 text-white font-[Segoe UI] font-bold tracking-[1px]">
                <div className="text-[30px]">
                    <button className="border-b-5 mr-2">ALL</button>
                </div>
                <button className="text-[20px] mr-1">Health Supreme</button>
                <button className="text-[20px] mr-2">CRM 365</button>
                <button className="text-[20px] mr-2">OSDA</button>
                <button className="text-[20px]">Marketplace E-Commerce Platform</button>
                <button className="text-[20px]">Sports Training App</button>
                <button className="text-[20px]">Fitness</button>
            </div>

            {/* Product Cards */}
            <div className="container w-[87%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-between gap-y-4 gap-x-5 pb-18">
                {products.map((card) => (
                    <div
                        key={card.id}
                        className="relative bg-white rounded flex flex-col w-[483px] h-[370px] overflow-hidden group"
                    >
                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className={` ${card.id === 1
                                ? "mt-auto pt-6"
                                : card.id === 5
                                    ? "overflow-hidden"
                                    : "m-auto"
                                }`}
                        />
                        {card.id === 5 && (
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center transition-opacity duration-500 ">
                                <div className="pt-22 flex flex-col gaps-y-4 items-center">
                                    <img
                                        src="/images/product-mobile-icon.png"
                                        alt="Overlay Icon"
                                        className="size-[66px] object-contain mb-7 mr-1"
                                    />

                                    <h2 className="text-white text-[39px] font-bold ml-3">
                                        {card.title}
                                    </h2>
                                    <p className="text-white/80 text-[18px] w-[80%] leading-[1.2]">
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
