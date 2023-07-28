import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Food",
    img: "/assets/images/food_product.webp",
  },
  {
    id: 2,
    name: "Home Care",
    img: "/assets/images/home_care.webp",
  },
  {
    id: 3,
    name: "Personal Care",
    img: "/assets/images/personal_care.webp",
  },
  {
    id: 4,
    name: "Oral Hygiene",
    img: "/assets/images/oral_hygiene.webp",
  },
  {
    id: 5,
    name: "Assorted",
    img: "/assets/images/assorted.webp",
  },
];

const OurProducts = () => {
  return (
    <section id="OurProducts" className="py-[100px]">
      <h2 className="text-center text-[#0E5F8C] text-[40px] font-bold tracking-tight">
        Our Products
      </h2>

      <div className="flex flex-row items-center justify-start py-[60px] overflow-x-auto scroll-smooth">
        {products.map((product, i) => (
          <div key={product.id}>
            <div
              className={`flex flex-col items-center w-[200px] h-[243px] ${
                i === 0 && "ml-[4rem]"
              } mx-[12px] gap-y-[20px] hover:scale-105 transition-all`}
            >
              <Image
                src={product.img}
                width={200}
                height={200}
                className="rounded-[100px] shadow-lg w-[200px] h-[200px] object-cover"
                alt={product.name}
              />
              <p className="text-center text-neutral-800 text-[22px] font-bold leading-[25px] tracking-tight">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="w-56 h-[51px] px-[50px] py-[15px] bg-[#3E5D9D] rounded-[50px] shadow-lg gap-2 text-center text-stone-50 text-base font-semibold capitalize leading-tight">
          View Catalogue
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
