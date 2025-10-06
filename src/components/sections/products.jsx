export default function Products() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: "url('/images/products-bg.png')" }}
        >
            {/* Heading */}
            <h1 className="text-white text-center font-bold text-[42px] mb-12">
                Products
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white font-medium">
                <button className="text-red-400 border-b-2 border-red-400">ALL</button>
                <button>Health Supreme</button>
                <button>CRM 365</button>
                <button>OSDA</button>
                <button>Marketplace</button>
                <button>Sports Training App</button>
                <button>Fitness</button>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                {[
                    { id: 1, img: "/images/product1.png", title: "Health Supreme", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
                    { id: 2, img: "/images/product2.png", title: "CRM 365", desc: "Manage your customers effectively with CRM tools." },
                    { id: 3, img: "/images/product3.png", title: "OSDA", desc: "Smart dashboard analytics solution." },
                    { id: 4, img: "/images/product4.png", title: "Marketplace", desc: "Complete e-commerce platform." },
                    { id: 5, img: "/images/product5.png", title: "Sports Training App", desc: "Track and improve sports performance." },
                    { id: 6, img: "/images/product6.png", title: "Fitness", desc: "Stay fit with personalized training." },
                ].map((card) => (
                    <div key={card.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                            <p className="text-sm max-w-[80%]">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
