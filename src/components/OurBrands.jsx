import Image from "next/image";

const OurBrands = () => {
  return (
    <section
      id="brands"
      className="bg-white py-[40px] flex flex-col justify-center font-header"
    >
      <h2 className="text-center text-[#3E5D9D] text-[2.5rem] font-header font-medium tracking-tight">
        Our Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-1">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Colgate_logo.webp"}
              width={500}
              height={500}
              alt="Colgate logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-125"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Palmolive_logo.webp"}
              width={500}
              height={500}
              alt="Palmolive logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Fabuloso_logo.webp"}
              width={500}
              height={500}
              alt="Fabuloso logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-110"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Ajax_logo.webp"}
              width={500}
              height={500}
              alt="Ajax logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Tips_calbaq_logo.webp"}
              width={500}
              height={500}
              alt="Tips Calbaq logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain scale-90 md:scale-125"
            />
          </div>
          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Fiori_Bruna_Logo.webp"}
              width={500}
              height={500}
              alt="Fiori Bruna logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-125 xl:scale-150"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Bambu_logo.webp"}
              width={500}
              height={500}
              alt="Bambú logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-125"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:mr-4 lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Guarina_logo.webp"}
              width={500}
              height={500}
              alt="Guarina logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Lavador_logo.webp"}
              width={500}
              height={500}
              alt="Lavador logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain scale-[2.0] md:scale-[1.8]"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Suavitel_logo.webp"}
              width={500}
              height={500}
              alt="Suavitel logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain scale-150"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Ardil_logo.webp"}
              width={500}
              height={500}
              alt="Suavitel logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-125"
            />
          </div>

          <div className="items-center justify-center p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
            <Image
              src={"/assets/images/Brands/Magnifico_logo.webp"}
              width={500}
              height={500}
              alt="Suavitel logo"
              className="h-[80px] w-full md:max-w-[100px] object-contain md:scale-125"
            />
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 md:justify-self-center mt-5 md:mt-0 p-[0_20px] md:p-[10px_20px] lg:p-[10px_30px] 2xl:p-[10px_50px]">
          <Image
            src={"/assets/images/Brands/LDorado_logo.webp"}
            width={500}
            height={500}
            alt="Suavitel logo"
            className="h-[80px] w-full md:max-w-[100px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
