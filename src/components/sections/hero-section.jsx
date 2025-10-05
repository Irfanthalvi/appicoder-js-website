import { Button } from "@/components/ui/button"
// import heroImage from "@/assets/hero-mobile.png"

export default function HeroSection() {
    return (
        <section className="relative h-[1080px] overflow-hidden bg-[#20222D]">
            <div
                className="
                    absolute 
                   w-[1786px]
                    h-[1770px]
                    rounded-[240px] 
                    rotate-[19deg] 
                    bg-[#D11725]
                    top-[-900px]
                "
            />
            <div
                className="
                    absolute 
                   w-[1676px]
                    h-[1770px]
                    rounded-br-[250px] 
                    rotate-[12deg] 
                    bg-[#E81626]
                    top-[-995px]
                "
            />
        </section>
    )
}
