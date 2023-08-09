import React, { useRef, useState } from "react";
import Image from "next/image";

import OurServicesModal from "./OurServicesModal";

const items = [
  {
    id: 1,
    title: "Consulting",
    text: `More than 25 years of successful and high performance professionals working with global leading organizations in the USA and abroad, available to you.
    Marketing
    Financial Advisory
    Accounting & Taxes
    Real Estate`,
    logo: "handshakeIcon",
  },
  {
    id: 2,
    title: "Commercial Execution",
    text: `5 Ps and Innovation, new products development, Price study & price strategy, identify opportunities for distribution and network, activation by retail environment.
    5 P’s best practices
    Network & Distribution`,
    logo: "lightbulbIcon",
  },
  {
    id: 3,
    title: "Sourcing Strategies",
    text: `Logistics; warehouse, transportation and freight forward.
    Contract Manufacturing
    Distribution: DSD / Networking`,
    logo: "planeLadderIcon",
  },
  {
    id: 4,
    title: "Development of websites",
    text: `Elevate your business in the digital era with our expert webpage solutions. Our team of skilled developers will create a captivating online presence that engages your audience, drives growth, and achieves tangible results.`,
    logo: "laptopIcon",
  },
  {
    id: 5,
    title: "Our Business Partners",
    text: `Our distribution representing global brands and strong regional and local brands.
    Oral care
    Personal care
    Laundry and Home Care
    Food grocery’s
    Fresh and Produces`,
    logo: "cartIcon",
  },
];

const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const modalRef = useRef(null);

  return (
    <div className="flex justify-center items-center pb-[72px]">
      <div className="flex flex-col items-center bg-[#3E5D9D] px-[1.25rem] md:px-[59px] py-[4.5rem] rounded-[2.5rem] w-[90vw] gap-[2.5rem] shadow-2xl">
        <div className="flex flex-col items-center gap-[1.8125rem] self-stretch">
          <h2 className="text-center text-white text-[2.5rem] font-bold tracking-tight">
            Our Services
          </h2>

          <p className="text-center text-white text-[1rem] font-normal">
            Our mission is to give you simple solutions according to your needs,
            priorities and affordable to your unique situation
          </p>
        </div>

        {/* Renders first two cards */}
        <div className="hidden lg:flex lg:flex-row gap-[40px]">
          {items.slice(0, 2).map((item) => {
            const lines = item.text.split("\n");

            return (
              <div
                key={item.id}
                className="w-1/2 flex flex-col items-center py-[2.5rem] px-[1.875rem] gap-[1.25rem] self-stretch rounded-[20px] bg-[#F9F9F9] overflow-hidden"
                onClick={() => {
                  setOpen(true);
                  setModalItem(item);
                }}
              >
                <span className="flex flex-col justify-center items-center gap-[10px] w-[72px] h-[72px] rounded-[2000px]">
                  <Image
                    src={`/assets/images/${item.logo}.svg`}
                    width={66}
                    height={61}
                    alt="icon"
                    priority
                  />
                </span>

                <span className="flex flex-col justify-center items-center gap-[24px]">
                  <h4 className="self-stretch text-[#3E5D9D] text-center text-[28px] font-bold leading-[25px] tracking-[0.28px]">
                    {item.title}
                  </h4>

                  <p className="self-stretch text-center text-[16px] text-[#242424] servicesEllipsis">
                    {lines[0].trim()}
                  </p>
                </span>
              </div>
            );
          })}
        </div>

        {/* Renders rest of cards */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-[30px] lg:gap-[40px]">
          {items.map((item, i) => {
            const lines = item.text.split("\n");

            return (
              <div
                key={item.id}
                className={`${
                  i === 0 || i === 1 ? "lg:hidden" : ""
                } flex flex-col items-center lg:justify-between py-[2.5rem] px-[1.875rem] gap-[1.25rem] self-stretch rounded-[20px] bg-[#F9F9F9] overflow-hidden`}
              >
                <span className="flex flex-col justify-center items-center gap-[10px] w-[72px] h-[72px] rounded-[2000px]">
                  <Image
                    src={`/assets/images/${item.logo}.svg`}
                    width={66}
                    height={61}
                    alt="icon"
                    priority
                  />
                </span>

                <span className="flex flex-col justify-center items-center gap-[24px]">
                  <h4 className="self-stretch text-[#3E5D9D] text-center text-[28px] font-bold leading-[25px] tracking-[0.28px]">
                    {item.title}
                  </h4>

                  <p className="self-stretch text-center text-[16px] h-[96px] text-[#242424] servicesEllipsis">
                    {lines[0].trim()}
                  </p>

                  <button
                    onClick={() => {
                      setOpen(true);
                      setModalItem(item);
                    }}
                    className="bg-[#6C9DD7] text-white shadow-lg rounded-[35px] py-[13px] w-full text-[16px] font-bold tracking-[0.16px] transition-all active:scale-90"
                  >
                    See more
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {open && modalItem && (
        <OurServicesModal
          item={modalItem}
          open={open}
          onClose={() => setOpen(false)}
          modal={modalRef}
        />
      )}
    </div>
  );
};

export default OurServices;
