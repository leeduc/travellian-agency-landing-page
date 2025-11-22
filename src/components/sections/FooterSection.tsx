import { url } from "inspector";
import React from "react";

function FooterSection() {
  const menus = [
    {
      name: "Home", href: "#",
    },
    { name: "Explore", href: "#explorer" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Feedbacks", href: "#feedbacks" },
  ];

  const informations = [
    "Destinations",
    "Supports",
    "Terms & COnditions",
    "Privacy",
  ];

  const contacts = [
    {
      name: "+(84) 934 970 677",
      href: "https://wa.me/+84934970677",
    },
    {
      name: "nguyenbathanhlocdn@gmail.com",
      href: "mailto:nguyenbathanhlocdn@gmail.com",
    },
    {
      name: "Da Nang, Vietnam",
      href: "https://www.google.com/maps/place/Da+Nang,+Vietnam",
    },
  ];

  const socials = [
    { src: "/images/facebook.png", alt: "Facebook", url: "https://www.facebook.com/nguyenbathanhlocdn" },
    { src: "/images/instagram.png", alt: "Instagram", url: "https://www.instagram.com/locthanh415" },
  ];
  return (
    <section className="bg-[#172432] text-white pb-[100px] px-4 xl:px-[182px] flex flex-col gap-8 md:flex-row justify-between pt-[100px]">
      <div>
        <div>
          <img src="/images/new/text-logo-234.png" alt="footer logo" />
        </div>
        <p>Copyright © ThanhLocTransfer 2025</p>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Menu</p>
        <div className="flex flex-col gap-3">
          {menus.map((item, index) => (
            <a key={index} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
      {/* <div>
        <p className="font-medium text-[24px] mb-2">Information</p>
        <div className="flex flex-col gap-3">
          {informations.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div> */}
      <div>
        <p className="font-medium text-[24px] mb-2">Contact Info</p>
        <div className="flex flex-col gap-3">
          {contacts.map((item, index) => (
            <a key={index} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Follow us on</p>
        <div className="flex gap-3 items-center">
          {socials.map((item, index) => (
            <div key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt={item.alt} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
