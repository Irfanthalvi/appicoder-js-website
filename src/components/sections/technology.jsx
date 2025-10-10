"use client";

export default function Technology() {
    return (
        <section
            className="relative w-full bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('images/technology-background.png')" }}
        >
            {/* Heading */}
            <h1
                className="font-[700] font-[Segoe UI] text-[65px] leading-[64px] text-[#FFFFFF] text-center mt-18"
                style={{
                    letterSpacing: "0%",
                }}
            >
                Technologies
            </h1>

            {/* Card Image */}
            <img
                src="images/technology-card1.png"
                alt="Technology Icon"
                className="w-[1490px] h-[710px] pb-5 object-contain mx-auto"
            />
            <div className="absolute top-[45.5%] left-[9%] text-black">
                <h2 className="font-[700] font-[Segoe UI] font-semibold text-[48px] leading-[56px]">
                    Cloud Solutions
                </h2>
                <p className="mt-2.5 w-[650px] text-[19px] font-bold leading-[26px] text-[#2B2B2B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper <br />
                    quis diam.Ut eros elit, luctus eu pulvinar a, lacinia a justo. <br />
                     Sed felis sapien, rutrum ut tempus quis, elementum eu du.
                </p>
            </div>

        </section>
    );
}
