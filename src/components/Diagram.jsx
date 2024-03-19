import Image from "next/image";

const Diagram = () => {
  return (
    <section
      id="diagram"
      className="bg-white w-full h-auto py-[20px] flex justify-center items-center"
    >
      <Image
        src={"/assets/images/Diagram.webp"}
        alt="Diagram"
        className="w-full h-auto max-h-[500px] object-contain object-center"
        priority
        width={1920}
        height={1080}
        quality={100}
      />
    </section>
  );
};
export default Diagram;
