"use client";

import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";
import { toast } from "sonner";
import { useFormik } from "formik";

import { contact } from "@/content/site";
import { ContactSchema } from "@/validations/ContactSchema";
import SocialLinks from "./SocialLinks";

const copy = {
  contact: {
    title: "Let's get in touch",
    intro:
      "If you have an idea or project in mind and need help, reach out. We would love to hear about it and provide a solution.",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your business or idea",
    submit: "Start the conversation",
  },
  join: {
    title: "Apply to join the team",
    intro:
      "We are always looking for talented people to join us. If you are a salesman and/or distributor, this is your opportunity to grow. Send us a message and join us today.",
    emailPlaceholder: "you@email.com",
    messageLabel: "Tell us about your experience",
    messagePlaceholder:
      "Sales or distribution experience, territories, brands you've worked with",
    submit: "Send message",
  },
};

const Field = ({ formik, name, label, optional = false, className = "", children }) => {
  const error = formik.touched[name] && formik.errors[name];
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-harbor">
        {label}
        {optional && <span className="font-normal text-ink/75"> (optional)</span>}
      </label>
      {children({
        id: name,
        name,
        value: formik.values[name],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        disabled: formik.isSubmitting,
        required: !optional,
        "aria-invalid": Boolean(error),
        "aria-describedby": `${name}-error`,
        className: `field ${error ? "field-error" : ""}`,
      })}
      <p id={`${name}-error`} className="mt-1.5 min-h-[1.25rem] text-sm text-[#B42318]">
        {error || ""}
      </p>
    </div>
  );
};

const Form = ({ variant = "contact" }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      const sendEmail = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .catch(() => ({ error: "Your message could not be sent. Check your connection and try again." }));

      if (sendEmail.error) {
        toast.error(sendEmail.error);
        return;
      }

      if (sendEmail.success) {
        toast.success("Thank you for reaching out! We will get back to you soon.");
        formik.resetForm();
      }
    },
  });

  const { title, intro, emailPlaceholder, messageLabel, messagePlaceholder, submit } =
    copy[variant];

  return (
    <div className="page-x grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <h1 className="font-serif text-[2.75rem] leading-[1.04] tracking-[-0.02em] text-harbor sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-ink/80">
          {intro}
        </p>

        <h2 className="mt-12 text-base font-semibold text-harbor">
          Contact information
        </h2>
        <ul className="mt-4 space-y-4 text-lg text-ink/85">
          <li>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 hover:text-brand">
              <PiEnvelopeSimple size={24} className="shrink-0 text-brand" aria-hidden="true" />
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.phoneHref} className="flex items-center gap-4 hover:text-brand">
              <PiPhone size={24} className="shrink-0 text-brand" aria-hidden="true" />
              {contact.phone}
            </a>
          </li>
          <li>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-brand"
            >
              <PiMapPin size={24} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              {contact.address}
            </a>
          </li>
        </ul>
        <SocialLinks className="mt-8" />
      </div>

      <div className="rounded-3xl bg-white p-6 ring-1 ring-harbor/10 sm:p-10 lg:col-span-7">
        <h2 className="font-serif text-3xl text-harbor sm:text-4xl">
          Send us a message
        </h2>

        <form className="mt-8" onSubmit={formik.handleSubmit} noValidate>
          <Field formik={formik} name="name" label="Your name">
            {(props) => (
              <input {...props} type="text" autoComplete="name" placeholder="Full name" />
            )}
          </Field>

          <div className="grid gap-x-4 sm:grid-cols-2">
            <Field formik={formik} name="email" label="Email address">
              {(props) => (
                <input
                  {...props}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="off"
                  spellCheck="false"
                  placeholder={emailPlaceholder}
                />
              )}
            </Field>
            <Field formik={formik} name="phone" label="Phone number" optional>
              {(props) => (
                <input
                  {...props}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(305) 000-0000"
                />
              )}
            </Field>
          </div>

          <Field formik={formik} name="message" label={messageLabel}>
            {(props) => (
              <textarea {...props} rows={6} placeholder={messagePlaceholder} />
            )}
          </Field>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn-signal mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {formik.isSubmitting ? "Sending…" : submit}
          </button>
          {variant === "contact" && typeof contact.replyDays === "number" && (
            <p className="mt-4 text-sm text-ink/70">
              We&apos;ll reply within {contact.replyDays} business{" "}
              {contact.replyDays === 1 ? "day" : "days"}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
