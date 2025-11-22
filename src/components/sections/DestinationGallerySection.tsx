import React from "react";
import Header from "../common/Header";
import DestinationGalleryCard from "../cards/DestinationGalleryCard";

function DestinationGallerySection() {
  const data = [
    {
      imageUrl: "/images/gallery/1.jpg",
    },
    {
      imageUrl: "/images/gallery/2.jpg",
    },
    {
      imageUrl: "/images/gallery/3.jpg",
    },
    {
      imageUrl: "/images/gallery/4.jpg",
    },
  ];

  return (
    <section id="feedbacks">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <Header
            title="Destination Gallery"
            description="Our Collection of Travel Moments and Destinations"
            isLongUnderline
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <DestinationGalleryCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default DestinationGallerySection;
