import Image from "next/image";

const Tastings = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[60px] px-[20px]">
      <h2 className="text-center text-[#0E5F8C] text-[40px] font-bold tracking-tight">
        Tastings
      </h2>

      <div className="flex flex-row flex-wrap py-[60px] px-[20px] gap-[32px]">
        <div className="flex-[100%] md:flex-[25%]">
          <Image
            src={"/assets/images/Tastings/1.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[400px] rounded-[20px] mb-[32px]`}
            priority
          />

          <Image
            src={"/assets/images/Tastings/2.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[284px] rounded-[20px]`}
            priority
          />
        </div>

        <div className="flex-[100%] md:flex-[25%]">
          <Image
            src={"/assets/images/Tastings/3.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[284px] rounded-[20px] mb-[32px]`}
            priority
          />

          <Image
            src={"/assets/images/Tastings/4.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[400px] rounded-[20px]`}
            priority
          />
        </div>

        <div className="flex-[100%] md:flex-[25%]">
          <Image
            src={"/assets/images/Tastings/5.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[239px] rounded-[20px] mb-[32px]`}
            priority
          />

          <Image
            src={"/assets/images/Tastings/6.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[194px] rounded-[20px] mb-[32px]`}
            priority
          />

          <Image
            src={"/assets/images/Tastings/7.webp"}
            width={350}
            height={400}
            alt="Tastings"
            className={`object-cover w-full h-[218px] rounded-[20px]`}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Tastings;
