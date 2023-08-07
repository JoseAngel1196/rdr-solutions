import Image from "next/image";

const LocalBrands = () => {
  return (
    <>
      <h2 className="text-center text-[#0E5F8C] text-[40px] font-bold tracking-tight">
        Regional local brands
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 place-content-center items-center py-[60px] px-[1.25rem] md:px-[59px] gap-3">
        <span className="w-full bg-[#6C9DD7] h-[200px] border border-gray-400">
          <Image
            src={"/assets/images/Bingo.svg"}
            width={100}
            height={40}
            alt="Bingo Logo"
            priority
            className="mx-auto w-[70%] lg:w-1/2 xl:w-[80%] h-full"
          />
        </span>

        <span className="w-full bg-[#6C9DD7] h-[200px] border border-gray-400">
          <Image
            src={"/assets/images/Suavitel.svg"}
            width={100}
            height={40}
            alt="Suavitel Logo"
            priority
            className="mx-auto w-[70%] lg:w-1/2 xl:w-[80%] h-full"
          />
        </span>

        <span className="w-full bg-[#6C9DD7] h-[200px] border border-gray-400">
          <Image
            src={"/assets/images/Fabuloso.svg"}
            width={100}
            height={40}
            alt="Fabuloso Logo"
            priority
            className="mx-auto w-[70%] lg:w-1/2 xl:w-[80%] h-full"
          />
        </span>

        <span className="w-full bg-[#6C9DD7] h-[200px] border border-gray-400">
          <Image
            src={"/assets/images/Colgate.svg"}
            width={100}
            height={40}
            alt="Colgate Logo"
            priority
            className="mx-auto w-[70%] lg:w-1/2 xl:w-[80%] h-full"
          />
        </span>

        <span className="w-full md:col-span-2 lg:col-span-1 bg-[#6C9DD7] h-[200px] border border-gray-400">
          <Image
            src={"/assets/images/Fiori.svg"}
            width={140}
            height={50}
            alt="Fiori Logo"
            priority
            className="mx-auto w-[70%] lg:w-1/2 xl:w-[80%] h-full"
          />
        </span>
      </div>
    </>
  );
};

export default LocalBrands;
