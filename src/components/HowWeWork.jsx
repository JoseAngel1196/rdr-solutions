import { processSteps } from "@/content/site";

// Hidden until RDR's real process is filled in (`processSteps` in site.js).
const HowWeWork = () => {
  if (processSteps.length === 0) return null;

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-title"
      className="bg-white py-20 md:py-28"
    >
      <div className="page-x">
        <h2
          id="how-title"
          className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] text-harbor md:text-[3.5rem]"
        >
          How we work
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative lg:pr-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-harbor font-serif text-xl text-white">
                  {i + 1}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-sky to-sky/0 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-6 font-serif text-[1.75rem] text-harbor">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[30ch] text-lg leading-relaxed text-ink/75">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWork;
