export default function AwardRecognition() {
    return (
        <section className="relative w-full bg-cover bg-center bg-no-repeat h-[675px] flex flex-col justify-start items-center pt-20">
            <h1 className="font-[Segoe UI] font-bold text-[66px] leading-[64px] tracking-normal text-black">
                Awards and Recognitions
            </h1>

            {/* Overlapping floating images */}
            <div className="relative w-[1472px] h-[537px] flex justify-center items-center">
                <img
                    src="/images/award-recognition1.png"
                    alt="Awards and Recognition 1"
                    className="absolute -left-[0.5%] top-[11%] h-[358px] w-auto object-contain transition-transform duration-500"
                />
                <img
                    src="/images/award-recognition2.png"
                    alt="Awards and Recognition 2"
                    className="absolute left-[18%] -top-[6%] h-[573px] w-auto object-contain transition-transform duration-500"
                />
                <img
                    src="/images/award-recognition3.png"
                    alt="Awards and Recognition 3"
                    className="absolute left-[50.5%] top-[11%] h-[360px] w-auto object-contain transition-transform duration-500"
                />
                <img
                    src="/images/award-recognition4.png"
                    alt="Awards and Recognition 4"
                    className="absolute left-[76%] top-[11%] h-[360px] w-auto object-contain transition-transform duration-500"
                />
            </div>
        </section>
    );
}
