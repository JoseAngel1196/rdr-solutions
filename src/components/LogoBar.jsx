import Image from "next/image";

const LogoBar = () => {
  return (
    <div className="flex justify-center items-center pb-[60px]">
      {/* En pantallas medianas y grandes */}
      <div className="hidden w-[90vw] md:flex items-center md:px-5 lg:px-[50px] py-[60px] bg-[#3E5D9D] rounded-[20px] shadow-2xl md:gap-7 lg:gap-10">
        <Image
          src={"/assets/images/Bingo.svg"}
          width={100}
          height={40}
          alt="Bingo Logo"
          priority
          className="mx-auto xl:w-[150px]"
        />
        <Image
          src={"/assets/images/Suavitel.svg"}
          width={100}
          height={40}
          alt="Suavitel Logo"
          priority
          className="mx-auto xl:w-[150px]"
        />
        <Image
          src={"/assets/images/Fabuloso.svg"}
          width={100}
          height={40}
          alt="Fabuloso Logo"
          priority
          className="mx-auto xl:w-[150px]"
        />
        <Image
          src={"/assets/images/Colgate.svg"}
          width={100}
          height={40}
          alt="Colgate Logo"
          priority
          className="mx-auto xl:w-[200px]"
        />
        <Image
          src={"/assets/images/Fiori.svg"}
          width={140}
          height={50}
          alt="Fiori Logo"
          priority
          className="mx-auto xl:w-[200px]"
        />
      </div>

      {/* En tamaño móvil */}
      <div className="md:hidden grid grid-cols-2 items-center w-[90vw] px-[30px] py-[60px] bg-[#3E5D9D] rounded-[20px] shadow-2xl gap-10">
        <Image
          src={"/assets/images/Bingo.svg"}
          width={100}
          height={40}
          alt="Bingo Logo"
          priority
          className="mx-auto"
        />
        <Image
          src={"/assets/images/Suavitel.svg"}
          width={100}
          height={40}
          alt="Suavitel Logo"
          priority
          className="mx-auto"
        />
        <Image
          src={"/assets/images/Fabuloso.svg"}
          width={100}
          height={40}
          alt="Fabuloso Logo"
          priority
          className="mx-auto"
        />
        <Image
          src={"/assets/images/Colgate.svg"}
          width={100}
          height={40}
          alt="Colgate Logo"
          priority
          className="mx-auto"
        />
        <div className="col-span-full flex justify-center">
          <Image
            src={"/assets/images/Fiori.svg"}
            width={190}
            height={50}
            alt="Fiori Logo"
            priority
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
