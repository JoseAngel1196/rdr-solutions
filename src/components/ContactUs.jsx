const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="flex flex-col justify-center items-center md:grid md:grid-cols-2 bg-[#3E5D9D] px-[40px] py-[72px] gap-[135px] md:gap-[50px] lg:gap-[135px] text-white"
    >
      <div className="flex flex-col gap-[54px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[40px] font-bold tracking-[0.4px]">
            Let’s Talk Business!
          </h2>

          <p className="text-[16px]">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h5 className="text-[22px] font-bold leading-[25px] tracking-[0.22px]">
            Email
          </h5>
          <p className="text-[16px]">beebs@gmail.com</p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h5 className="text-[22px] font-bold leading-[25px] tracking-[0.22px]">
            Phone
          </h5>
          <p className="text-[16px]">(000) 000 - 0000</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[28px]">
        <div className="flex flex-col gap-[15px]">
          <h5 className="text-[#F9F9F9] text-[16px]">Name</h5>
          <input
            type="text"
            className="bg-white h-[46px] rounded-[36px] shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-[15px]">
          <h5 className="text-[#F9F9F9] text-[16px]">Email</h5>
          <input
            type="text"
            className="bg-white h-[46px] rounded-[36px] shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-[15px]">
          <h5 className="text-[#F9F9F9] text-[16px]">Message</h5>
          <input
            type="text"
            className="bg-white h-[165px] rounded-[36px] shadow-lg"
          />
        </div>

        <button className="bg-[#6C9DD7] shadow-lg rounded-[35px] py-[13px] w-full text-[16px] font-bold tracking-[0.16px]">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
