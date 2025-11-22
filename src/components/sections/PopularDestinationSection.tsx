import React from "react";
import Header from "../common/Header";
import PopularDestinationCard from "../cards/PopularDestinationCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function PopularDestinationSection() {
  const data = [
    {
      title: "Hoi An Old Town",
      location: "Hoi An, Vietnam",
      imageUrl: "/images/places/hoi-an-2.jpeg",
    },
    {
      title: "Golden Bridge",
      location: "Da Nang, Vietnam",
      imageUrl: "/images/places/cau-vang.jpg",
    },
    {
      title: "Marble Mountains",
      location: "Da Nang, Vietnam",
      imageUrl: "/images/places/ngu-hanh-son.jpg",
    },
    {
      title: "Hue Imperial City",
      location: "Hue, Vietnam",
      imageUrl: "/images/places/dai-noi.jpg",
    },
  ];
  return (
    <section id="explorer">
      <div className="flex  flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Popular Destinations"
            description="Discover the highlights of Central Vietnam, where history, culture, and nature come together beautifully."
            isLongUnderline
          />
        </div>
        {/* <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              alt="left icon"
              className="w-[40px]"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="/images/right_icon.svg"
              alt="right icon"
              className="w-[40px]"
            />
          </div>
        </div> */}
      </div>

      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <PopularDestinationCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PopularDestinationSection;
