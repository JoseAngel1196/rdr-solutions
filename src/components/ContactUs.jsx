import Link from "next/link";

const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="flex flex-col justify-center items-center space-y-10 px-[40px] py-[40px]"
    >
      <h2 className="text-center text-white font-header font-medium text-[2.5rem] tracking-tight">
        Let&apos;s talk about your idea or your business
      </h2>

      <p className="text-center max-w-lg text-white text-base font-normal font-sans leading-[21px] select-none">
        If you have an idea or project in mind and you need help?…Reach out, we
        would love to hear about it and provide a solution!
      </p>

      <Link
        href="/contact"
        className="px-[50px] py-[15px] bg-white rounded-[35px] shadow-lg"
      >
        <p className="text-center text-[#3E5D9D] text-base font-semibold font-sans leading-tight">
          Get in touch
        </p>
      </Link>
    </section>
  );
};

export default ContactUs;
