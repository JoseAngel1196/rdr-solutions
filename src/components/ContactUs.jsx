import Link from "next/link";

const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="flex flex-col justify-center items-center space-y-10 bg-white px-[40px] py-[40px]"
    >
      <h2 className="text-center text-[#3E5D9D] font-header font-medium text-[2.5rem] tracking-tight">
        Let&apos;s talk about your idea or your business
      </h2>

      <p className="text-center max-w-lg text-[#3E5D9D] text-base font-normal font-sans leading-[21px] select-none">
        Have some big idea or brand to develop and need help? Then reach out
        we&apos;d love to hear about your project and provide help
      </p>

      <Link
        href="/contact"
        className="px-[50px] py-[15px] bg-[#6C9DD7] rounded-[35px] shadow-lg"
      >
        <p className="text-center text-white text-base font-semibold font-sans leading-tight">
          Get in touch
        </p>
      </Link>
    </section>
  );
};

export default ContactUs;
