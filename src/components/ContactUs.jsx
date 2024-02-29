import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();

  return (
    <section
      id="ContactUs"
      className="flex flex-col justify-center items-center space-y-10 bg-white px-[40px] py-[40px]"
    >
      <h2 className="text-center text-[#0E5F8C] font-header font-medium text-[2.5rem] tracking-tight">
        Let&apos;s talk business
      </h2>

      <p className="text-center max-w-lg text-[#0E5F8C] text-base font-normal font-sans leading-[21px] select-none">
        Have some big idea or brand to develop and need help? Then reach out
        we&apos;d love to hear about your project and provide help
      </p>

      <button
        onClick={() => router.push("/contact")}
        className="bg-[#6C9DD7] text-white text-base shadow-lg rounded-[35px] py-[13px] w-full max-w-xs font-sans font-medium"
      >
        Get in touch
      </button>
    </section>
  );
};

export default ContactUs;
