import React, { useEffect, useState } from "react";
import MainButton from "../common/MainButton";
import { remark } from "remark";
import html from "remark-html";

interface IProps {
  imageUrl: string;
  location: string;
  description: string;
  amount: string;
}

function SpecialOfferCard({ imageUrl, location, description, amount }: IProps) {
  const [contentHtml, setContentHtml] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const processedContent = await remark().use(html).process(description);
      if (isMounted) {
        setContentHtml(processedContent.toString());
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [description]);

  return (
    <div className="w-full">
      <div>
        <img
          src={imageUrl}
          alt="card image"
          className="h-[286px] w-full rounded-t-[26px] object-cover"
        />
      </div>
      <div className="bg-[#FFF8F1] py-[40px] px-[24px]">
        <p className="text-[20px] font-semibold">{location}</p>
        <div>
          <img src="/images/star_group.png" alt="stars" />
        </div>

        <div
          className="py-[24px] break-normal whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <p className="text-customGray">From</p>
            <p className="text-primary text-[40px]">${amount}</p>
          </div>

          <MainButton text="Book" classes="w-[130px]" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOfferCard;
