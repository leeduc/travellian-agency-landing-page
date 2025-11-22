import { cn, playFair } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface IProps {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  setPauseAutoPlay: (value: boolean) => void;
}

function HeroSection({
  currentIndex,
  setCurrentIndex,
  setPauseAutoPlay,
}: IProps) {
  const handleArrowUpClick = () => {
    setPauseAutoPlay(true);
    setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1);
  };

  const handleArrowBottomClick = () => {
    setPauseAutoPlay(true);
    setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1);
  };

  return (
    <section className="relative mb-16">
      <div className="pt-[100px] md:pt-16">
        <p
          className={cn(
            playFair.className,
            "text-[40px] md:text-[84px] text-white leading-tight",
            "mx-8 xl:mx-[184px]"
          )}
          style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}
        >
          Start your unforgettable <br /> journey with us.
        </p>
        <p className="text-24 text-white font-normal mt-3 mx-8 xl:mx-[184px]" style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}>
          The best travel for your jouney begins now
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-8 md:mt-[170px] mx-4 md:mx-0">
        <div className="bg-white py-5 md:py-10 flex flex-col rounded-t-[16px] md:rounded-t-none md:flex-row gap-[10px] md:gap-[40px] px-4 md:px-20">
          <div>
            <p className="text-xl text-customDark mb-2 font-semibold">Contact Us (Whatsapp)</p>
            <a href="https://wa.me/+84934970677" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl mb-4 text-sky-600">🇻🇳 +(84) 934 970 677</a>
          </div>

          <div>
            <p className="text-xl text-customDark mb-2 font-semibold">Email</p>
            <a href="mailto:nguyenbathanhlocdn@gmail.com" className="text-xl md:text-2xl mb-4 underline text-sky-600">nguyenbathanhlocdn@gmail.com</a>
          </div>
        </div>
        <div className="bg-primary flex items-center justify-between py-5 md:py-10 gap-[10px] px-4 md:px-[20px] rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px]">
          <div
            className={cn(
              "text-white flex gap-2 md:gap-0 md:block",
              playFair.className
            )}
          >
            <a href="https://wa.me/+84934970677" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[36px]">Book Now</a>
          </div>
          <ArrowRight color="#fff" />
        </div>
      </div>

      <div className="absolute right-16 top-[40%] hidden xl:block">
        <div className="flex flex-col gap-[24px] items-center">
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 0 && "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 1 && "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 2 && "bg-primary"
            )}
          ></div>
        </div>

        <div className="flex flex-col mt-4">
          <ChevronUp
            color="#fff"
            className="cursor-pointer "
            onClick={handleArrowUpClick}
          />
          <ChevronDown
            color="#fff"
            className="cursor-pointer "
            onClick={handleArrowBottomClick}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
