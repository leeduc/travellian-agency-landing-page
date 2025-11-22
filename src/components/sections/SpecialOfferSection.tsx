import React from "react";
import Header from "../common/Header";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function SpecialOfferSection() {
  const data = [
    {
      imageUrl: "/images/offers/car-1.jpeg",
      location: "Da Nang Airport Transfer",
      description: `
✨ Fast • Safe • Professional
Enjoy a smooth and reliable airport pick-up & drop-off service with our modern vehicles and experienced local drivers. We ensure a comfortable ride with clear pricing and no hidden fees.

**Why Choose Us?**
• 🚗 New, clean, air-conditioned vehicles
• 👨‍✈️ Friendly drivers who know Da Nang inside out
• ⏰ 24/7 support & real-time flight tracking
• 💰 Transparent pricing – no extra charges
• 🧳 Perfect for solo travelers, couples, families, and groups

**Prices:**
• 4-seat car: **$5 / trip**
• 7-seat car: **$7 / trip**
• 16-seat van: **$12 / trip**
      `,
      amount: "5",
    },
    {
      imageUrl: "/images/offers/car-2.jpeg",
      location: "12-Hour Private Tour",
      description: `
✨ Explore Da Nang Your Own Way
Enjoy 12-hour customizable private tour with a professional driver. Create your own itinerary or follow our most recommended attractions — the choice is yours.

**Highlights You Can Choose:**
• ⛰️ Marble Mountains
• 🐒 Son Tra Peninsula (Monkey Mountain)
• 🏖️ My Khe Beach
• 🌉 Dragon Bridge & Love Bridge
• 🛍️ Additional sightseeing or shopping stops upon request

**Prices:**
• 4-seat car: **$50 / trip**
• 7-seat car: **$60 / trip**
• 16-seat van: **$70 / trip**
`,
      amount: "50",
    },
    // {
    //   imageUrl: "/images/so_3.jpg",
    //   location: "Rome, Italy",
    //   description:
    //     "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    //   amount: "750",
    // },
  ];
  return (
    <section id="pricing">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-end">
        <div>
          <Header
            title="Special Offer"
            description="Da Nang Airport Transfers • Pick-up & Drop-off • City Tours • Hotel Booking"
          />
        </div>
      </div>
      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex justify-between flex-col lg:flex-row gap-2 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem} className="w-full md:w-1/2">
            <SpecialOfferCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SpecialOfferSection;
