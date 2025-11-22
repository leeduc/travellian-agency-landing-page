import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/t_1.png",
      review:
        "My trip to Da Nang was fantastic! The airport pick-up was smooth and quick. The driver was very friendly and even shared great tips about local food and beaches. I really enjoyed the trip to Hoi An—such a charming place! Absolutely worth it.",
      name: "Mark Villanueva",
      position: "Philippines 🇵🇭",
    },
    {
      imageUrl: "/images/t_2.png",
      review:
        "The full-day private tour to Hue was amazing. The car was comfortable, the driver drove safely, and the itinerary was flexible. Visiting the Imperial City and the royal tombs was a highlight of my Vietnam trip. Highly recommended!",
      name: "Daniel Thompson",
      position: "Australia 🇦🇺",
    },
    {
      imageUrl: "/images/new/avt.jpg",
      review:
        "I loved my experience traveling around Da Nang and Hoi An! The Marble Mountains were breathtaking, and Hoi An at night was absolutely magical. Everything was organized perfectly—I felt relaxed and well taken care of.",
      name: "Isabella Nguyen",
      position: "Canada 🇨🇦",
    },
  ];
  return (
    <section>
      <div className="flex  flex-col md:flex-row justify-between">
        <div>
          <Header
            title="Traveler's Experiences"
            description="Here’s what our travelers say about their journeys with us"
            isLongUnderline
          />
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px] mb-[100px]">
        {data.map((item, index) => (
          <TestimonialCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
