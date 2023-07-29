import Image from "next/image";
import React from "react";

const items = [
  {
    id: 1,
    title: "Freight Forwarding and Logistics",
    text: "With an extensive global network, we can handle your small parcels, LCL (Less container Load), FCL (Full Container Load) and refrigerated. Rest assured of our professional services, to give you peace of mind when moving your goods around the world.",
  },
  {
    id: 2,
    title: "Freight Forwarding and Logistics",
    text: "With an extensive global network, we can handle your small parcels, LCL (Less container Load), FCL (Full Container Load) and refrigerated. Rest assured of our professional services, to give you peace of mind when moving your goods around the world.",
  },
  {
    id: 3,
    title: "Freight Forwarding and Logistics",
    text: "With an extensive global network, we can handle your small parcels, LCL (Less container Load), FCL (Full Container Load) and refrigerated. Rest assured of our professional services, to give you peace of mind when moving your goods around the world.",
  },
  {
    id: 4,
    title: "Freight Forwarding and Logistics",
    text: "With an extensive global network, we can handle your small parcels, LCL (Less container Load), FCL (Full Container Load) and refrigerated. Rest assured of our professional services, to give you peace of mind when moving your goods around the world.",
  },
];

const OurServices = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center  bg-[#3E5D9D] px-[1.25rem] md:px-[59px] py-[4.5rem] rounded-[2.5rem] w-[90vw] gap-[2.5rem] shadow-2xl">
        <div className="flex flex-col items-center gap-[1.8125rem] self-stretch">
          <h2 className="text-center text-white text-[2.5rem] font-bold tracking-tight">
            Our Services
          </h2>

          <p className="text-center text-white text-[1rem] font-normal">
            Our mission is to give you simple solutions according to your needs,
            priorities and affordable to your unique situation
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[30px] lg:gap-[40px] lg:grid lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center py-[2.5rem] px-[1.875rem] gap-[1.25rem] self-stretch rounded-[20px] bg-[#F9F9F9]"
            >
              <span className="flex flex-col justify-center items-center gap-[10px] bg-[#6C9DD7]/[0.50] w-[72px] h-[72px] rounded-[2000px]">
                <Image
                  src={"/assets/images/truckIcon.svg"}
                  width={40}
                  height={40}
                  alt="truckIcon"
                  priority
                />
              </span>

              <span className="flex flex-col justify-center items-center gap-[24px]">
                <h4 className="self-stretch text-[#3E5D9D] text-center text-[28px] font-bold leading-[25px] tracking-[0.28px]">
                  {item.title}
                </h4>

                <p className="self-stretch text-center text-[16px] text-[#242424]">
                  {item.text}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
