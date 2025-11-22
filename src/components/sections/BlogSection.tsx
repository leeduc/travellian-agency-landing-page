import React from "react";
import Header from "../common/Header";
import { cn, playFair } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function BlogSection() {
  return (
    <section id="blog">
      <div>
        <Header
          title="Our Blog"
          description="Discover Inspiring Stories and Amazing Travel Experiences"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-[80px]">
        <div className="w-full">
          <img
            src="/images/places/son-tra.jpg"
            alt="feature blog image"
            className="h-[500px] rounded-[26px] w-full object-cover"
          />
        </div>
        <div>
          <p
            className={cn(
              playFair.className,
              "leading-tight text-[30px] md:text-[54px]"
            )}
          >
            Da Nang named among<br />
            Asia’s top destinations for 2025
          </p>
          <p className="py-4">
            Da Nang has been honored with the third spot in Time Out magazine's list of the eight best destinations to visit in Asia in 2025.

Time Out highlighted Da Nang as a coastal city that is not overcrowded yet offers a wealth of attractions, culinary experiences, and vibrant activities, meeting the publication's selection criteria.

"Da Nang has long been a favorite beach destination for locals. Known for its charm, this coastal gem is rapidly catching up with Ho Chi Minh City and Hanoi with its growing scene of trendy restaurants and bars," said Liv Kelly, editor at Time Out.
          </p>

          <a href="https://vietnamnet.vn/en/da-nang-named-among-asia-s-top-destinations-for-2025-2355876.html" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-3">
            Read More
            <ArrowRight color="#FF7757" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
