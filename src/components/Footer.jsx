import Image from "next/image";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#3E5D9D] flex flex-col md:flex-row justify-center md:justify-between items-center py-[24px] px-[20px] gap-[24px] text-white">
      <Image
        src={"/assets/images/LogoBlue.webp"}
        width={315}
        height={90}
        priority
        className="w-[167px] h-[45px]"
      />

      <span>
        Copyright © 2023 -{" "}
        <span className="font-bold underline">RDR Solutions, LLC</span>
      </span>

      <span className="flex flex-row items-center gap-[20px]">
        <a href="#" className="bg-white p-[7px] rounded-full">
          <AiFillInstagram width={16} height={16} color="#3E5D9D" />
        </a>

        <a href="#" className="bg-white p-[7px] rounded-full">
          <AiFillFacebook width={16} height={16} color="#3E5D9D" />
        </a>

        <a href="#" className="bg-white p-[7px] rounded-full">
          <AiOutlineTwitter width={16} height={16} color="#3E5D9D" />
        </a>

        <a href="#" className="bg-white p-[7px] rounded-full">
          <AiFillLinkedin width={16} height={16} color="#3E5D9D" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
