import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-[71px] py-[100px] gap-[44px]">
      <Image
        src={"/assets/images/store.webp"}
        width={1049}
        height={787}
        priority
        className="w-[248px] h-[245.15px] md:w-[325.50px] md:h-[293.91px] lg:w-[524.43px] lg:h-[393.33px] rounded-[20px] shadow-2xl"
        alt="store"
      />

      <div className="flex flex-col justify-center items-center">
        <h2 className="w-[248px] md:w-full text-center lg:text-start text-[#3E5D9D] text-3xl font-bold tracking-tight pb-[22px]">
          About Us
        </h2>
        <p className="w-[248px] md:w-full text-neutral-800 text-base font-normal">
          We sell cleaning, personal care, and food products with a focus on
          quality, innovation, and service. Our goal is to improve our
          customers&apos; lives and we have a dedicated team to help us achieve that.
          Our products are trusted by our customers.
          <br />
          We sell cleaning, personal care, and food products with a focus on
          quality, innovation, and service. Our goal is to improve our
          customers&apos; lives and we have a dedicated team to help us achieve that.
          Our products are trusted by our customers.
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
