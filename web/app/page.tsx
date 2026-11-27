
const features = [
  {
    title: "Connect",
    description: "Connect with like-minded people",
    icon: "connect",
  },
  {
    title: "Learn",
    description: "Learn new knowledge from experts",
    icon: "learn",
  },
  {
    title: "Practice",
    description: "Practise daily with guided habits",
    icon: "practice",
  },
  {
    title: "Grow",
    description: "Grow and track your progress",
    icon: "grow",
  },
];

function LotusLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16" fill="white">
      <path d="M50 10 C35 30 35 45 50 58 C65 45 65 30 50 10Z" />
      <path d="M46 56 C24 30 13 43 19 61 C25 75 38 69 46 56Z" />
      <path d="M54 56 C76 30 87 43 81 61 C75 75 62 69 54 56Z" />
      <path d="M50 55 C35 54 28 73 50 91 C72 73 65 54 50 55Z" />
      <path d="M12 63 C25 80 38 82 50 83 C62 82 75 80 88 63 C73 73 63 72 50 70 C37 72 27 73 12 63Z" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...common}>
      {type === "connect" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
          <path d="M16 15a5 5 0 0 1 5 5" />
        </>
      )}
      {type === "learn" && (
        <path d="M3 5.5c3.5-1.5 6.5-.5 9 2 2.5-2.5 5.5-3.5 9-2V19c-3.5-1.5-6.5-.5-9 2-2.5-2.5-5.5-3.5-9-2V5.5Z M12 8v13" />
      )}
      {type === "practice" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </>
      )}
      {type === "grow" && (
        <>
          <path d="M12 21V10" />
          <path d="M12 14C5 14 4 8 4 5c5 0 9 2 8 9Z" />
          <path d="M12 11c0-5 3-7 8-7 0 4-1 9-8 10" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#151515]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-center gap-10 px-5 py-12 lg:flex-row lg:gap-14 lg:px-12 xl:px-16">

        {/* Left Section */}
        <section className="flex w-full max-w-[850px] flex-col items-center text-center lg:flex-1">

          {/* LOTUS Branding */}
          <div className="mb-10 flex flex-col items-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-[#FFF3E9] bg-[#F58220]">
              <LotusLogo />
            </div>

            <h1 className="mt-3 text-6xl font-extrabold tracking-[0.12em] text-[#F58220] sm:text-7xl">
              LOTUS
            </h1>

            <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
              A calm place to meet people, gain knowledge,
              practise every day and grow into your best self.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[98px] items-center gap-4 rounded-[20px] border border-gray-200 bg-white px-5 py-4 text-left transition hover:border-[#F58220]/50"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#F58220] bg-[#FFF7F0] text-[#F58220]">
                  <FeatureIcon type={feature.icon} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vertical Divider */}
        <div className="hidden h-[490px] w-px bg-black lg:block" />

        {/* Right Section */}
        <section className="flex w-full max-w-[520px] items-center justify-center lg:flex-1">

          <div className="relative w-full rounded-[28px] border border-gray-200 bg-white px-7 py-10 shadow-[0_20px_55px_rgba(0,0,0,0.07)] sm:px-12 sm:py-12">

            {/* Free to Join Badge */}
            <div className="absolute -top-4 right-8 rounded-full bg-[#F58220] px-5 py-2 text-xs font-semibold text-white">
              ● &nbsp; Free to join
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get Started
            </h2>

            <p className="mt-2 text-base text-gray-500 sm:text-lg">
              Start with Login or Sign up
            </p>

            {/* Login */}
            <div className="mt-9">
              <p className="mb-3 text-sm font-semibold">
                Already have an account?
              </p>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-full border-2 border-[#F58220] px-6 py-4 font-semibold text-[#F58220] shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition hover:bg-[#FFF7F0] hover:shadow-[0_7px_22px_rgba(0,0,0,0.28)]"
              >
                <span>Login</span>
                <span className="text-2xl">→</span>
              </button>
            </div>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Sign Up */}
            <div>
              <p className="mb-3 text-sm font-semibold">
                Create an account
              </p>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-full border-2 border-[#F58220] bg-[#F58220] px-6 py-4 font-semibold text-white shadow-[0_5px_18px_rgba(0,0,0,0.22)] transition hover:bg-[#E97515] hover:shadow-[0_7px_24px_rgba(0,0,0,0.32)]"
              >
                <span>Sign up</span>
                <span className="text-2xl">→</span>
              </button>
            </div>

            {/* Terms */}
            <p className="mt-8 text-center text-xs leading-6 text-gray-400">
              By continuing you agree to Lotus{" "}
              <span className="font-semibold text-gray-800">
                Terms of Service
              </span>
              <br />
              and{" "}
              <span className="font-semibold text-gray-800">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
