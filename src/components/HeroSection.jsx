import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="bg-[#3E5D9D] px-[30px] py-[50px] rounded-[31px] w-[90vw]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="relative flex flex-col justify-center items-center md:items-start gap-[15px] text-center md:text-start md:w-[55%] lg:w-[50%] xl:w-[80%]">
            <h1 className="w-[290px] md:w-[380px] lg:w-[450px] xl:w-[682px] text-white text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold uppercase md:leading-[43.20px] xl:leading-[57.60px]">
              Tailored Consumer Product Solutions for Supermarkets and
              Independent Stores
            </h1>

            <p className="w-[290px] md:w-[380px] lg:w-[500px] xl:w-[622.88px] text-center md:text-start text-white text-sm font-normal leading-[21px]">
              Discover the perfect consumer products for your business with our
              expert guidance. We work hard to ensure the ideal fit for your
              needs.
            </p>

            <button
              type="button"
              className="absolute md:static -bottom-[5rem] px-[50px] py-[15px] md:mt-[21px] bg-white rounded-[50px] shadow-2xl flex justify-center items-center gap-2"
            >
              <p className="text-center text-[#3E5D9D] text-base font-semibold capitalize leading-tight">
                Get in touch with us
              </p>
            </button>
          </div>

          <div className="lg:w-[50%] xl:w-[80%] relative mx-auto mt-[4.5rem] md:mt-0 md:mb-[4rem] lg:mb-[3rem]">
            <div className="lg:absolute lg:-bottom-[12rem] xl:-bottom-[15.5rem] lg:left-[5rem] xl:left-[2rem] aspect-[1/1.12] md:w-[300px] lg:w-[350px] xl:w-[450px] grid items-end rounded-[0_0_100vw_100vw] overflow-hidden">
              <span className="absolute inset-[auto_0_0] aspect-square rounded-[50%] mx-auto object-cover bg-[#6C9DD7]"></span>
              <Image
                src={"/assets/images/food.webp"}
                width={1920}
                height={1080}
                alt="food logo"
                priority
                className="z-[2] h-[25rem] xl:h-[500px] left-2 md:left-0 md:max-w-[300px] lg:max-w-[350px] xl:max-w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
