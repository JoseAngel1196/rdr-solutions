"use client";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { toast } from "sonner";
import { useFormik } from "formik";

import { ContactSchema } from "@/validations/ContactSchema";
import { sendEmail } from "@/actions";
const Form = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      const sendEmailFunction = await sendEmail({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });

      if (sendEmailFunction.error) {
        toast.error(sendEmailFunction.error, {
          style: { background: "#0E5F8C", color: "#fff" },
        });

        return;
      }

      if (sendEmailFunction.success) {
        toast.success(
          "Thank you for reaching out!, We will get back to you soon",
          {
            style: { background: "#0E5F8C", color: "#fff" },
          }
        );

        formik.resetForm();
      }
    },
  });

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 2000);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="absolute inset-0 h-[calc(100%-15%)] md:h-[calc(100%-17%)] 2xl:h-full bg-[#3E5D9D]" />

      <div
        className={`relative ${
          pathname === "/contact" && "3xl:mt-[10%]"
        } mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="flex flex-col justify-start gap-5">
              <h1 className="text-lg font-sans font-semibold text-white/75">
                {pathname === "/contact"
                  ? "Let´s get in touch"
                  : "Want to be part of our team?"}
              </h1>

              <h2
                className={`text-white font-header text-2xl ${
                  pathname === "/contact"
                    ? "xl:text-4xl 2xl:text-5xl"
                    : "xl:text-3xl 2xl:text-4xl"
                } font-bold tracking-tight`}
              >
                {pathname === "/contact" ? (
                  <p>
                    If you have an idea or project in mind and you need help?…Reach out, we would love to hear about it and provide a solution!
                  </p>
                ) : (
                  "We are always looking for talented people to join us. If you are a Salesman and/or distributor this is your opportunity to grow. Send us an email in contact us section. Join us today!"
                )}
              </h2>

              <h4 className="font-sans text-lg font-semibold text-white/75">
                Contact information
              </h4>

              <div className="flex flex-col gap-2 font-sans text-lg font-medium text-white/75">
                <span className="flex items-center space-x-4">
                  <FaEnvelope />
                  <p>info@rdrsolution.com</p>
                </span>

                <span className="flex items-center space-x-4">
                  <BsFillTelephoneFill />
                  <p>(305)542-9612</p>
                </span>

                <span className="flex items-center space-x-4">
                  <IoLocationSharp />
                  <p>175 SW, 7TH St Suite 1815, Miami FL 33130, USA</p>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#F7F7F7] p-8 shadow-2xl lg:col-span-3 lg:p-12">
            <h3 className="mb-8 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-header text-[#0E5F8C] tracking-tight">
              Send us a message
            </h3>

            <form
              className="font-sans text-lg font-medium"
              onSubmit={formik.handleSubmit}
            >
              <div className="space-y-2">
                <label className="block" htmlFor="name">
                  <span className="block font-medium text-gray-800 p-3">
                    Your Name
                  </span>

                  <input
                    className={`w-full rounded-lg bg-[#DAF0FB] border border-gray-300 p-3 placeholder:text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                      formik.errors.name &&
                      "border-pink-500 ring-pink-500 text-pink-600 bg-pink-50 focus:border-pink-500 focus:ring-pink-500"
                    }`}
                    placeholder="Enter your full name here"
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    disabled={formik.isSubmitting}
                    name="name"
                    autoComplete="given-name"
                    aria-label="Name"
                    required
                    aria-required
                    aria-invalid={formik.errors.name && formik.touched.name}
                  />
                </label>

                <p className="text-red-500 text-sm pl-3">
                  {formik.errors.name || "\u00A0"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:gap-x-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block" htmlFor="email">
                    <span className="block font-medium text-gray-800 p-3">
                      Your Email address
                    </span>

                    <input
                      className={`w-full rounded-lg bg-[#DAF0FB] border border-gray-300 p-3 placeholder:text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 lowercase placeholder:normal-case ${
                        formik.errors.email &&
                        "border-pink-500 ring-pink-500 text-pink-600 bg-pink-50 focus:border-pink-500 focus:ring-pink-500"
                      }`}
                      placeholder={"Enter your email address here"}
                      type="email"
                      id="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      disabled={formik.isSubmitting}
                      name="email"
                      required
                      autoComplete="email"
                      aria-label="Email"
                      aria-required
                      aria-invalid={formik.errors.email && formik.touched.email}
                      aria-describedby="email-description"
                      autoCapitalize="off"
                      spellCheck="false"
                      autoCorrect="off"
                      inputMode="email"
                    />
                  </label>

                  <p className="text-red-500 text-sm pl-3">
                    {formik.errors.email || "\u00A0"}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block" htmlFor="phone">
                    <span className="block font-medium text-gray-800 p-3">
                      Your phone number
                    </span>

                    <input
                      className={`w-full rounded-lg bg-[#DAF0FB] border border-gray-300 p-3 placeholder:text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                        formik.errors.phone &&
                        "border-pink-500 ring-pink-500 text-pink-600 bg-pink-50 focus:border-pink-500 focus:ring-pink-500"
                      }`}
                      placeholder={"Please fill in your phone number"}
                      type="tel"
                      id="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      disabled={formik.isSubmitting}
                      name="phone"
                      required
                      autoComplete="tel"
                      aria-label="Phone"
                      aria-required
                      aria-describedby="phone-description"
                      inputMode="tel"
                      aria-invalid={formik.errors.phone && formik.touched.phone}
                    />
                  </label>

                  <p className="text-red-500 text-sm pl-3">
                    {formik.errors.phone || "\u00A0"}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block" htmlFor="message">
                  <span className="block font-medium text-gray-800 p-3">
                    Message
                  </span>

                  <textarea
                    className={`w-full rounded-lg bg-[#DAF0FB] border border-gray-300 p-3 placeholder:text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                      formik.errors.message &&
                      "border-pink-500 ring-pink-500 text-pink-600 bg-pink-50 focus:border-pink-500 focus:ring-pink-500"
                    }`}
                    placeholder={"Enter your message here"}
                    rows="8"
                    id="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    disabled={formik.isSubmitting}
                    name="message"
                    required
                    aria-label="Message"
                    aria-required
                    aria-describedby="message-description"
                    spellCheck
                  ></textarea>
                </label>

                <p className="text-red-500 text-sm pl-3">
                  {formik.errors.message || "\u00A0"}
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-[#6C9DD7] text-white shadow-lg rounded-[35px] py-[13px] px-5 w-full sm:w-auto font-sans font-medium inline-block disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send my contact request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
