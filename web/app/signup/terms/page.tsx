
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

function LotusLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="49" fill="#fff2e7" />
      <circle cx="50" cy="50" r="43" fill="#f58220" />
      <g fill="white">
        <path d="M50 24 C37 38 39 55 50 68 C61 55 63 38 50 24Z" />
        <path d="M34 34 C30 49 38 60 50 68 C46 51 42 41 34 34Z" />
        <path d="M66 34 C70 49 62 60 50 68 C54 51 58 41 66 34Z" />
        <path d="M20 51 C31 65 40 69 50 68 C37 78 25 69 20 51Z" />
        <path d="M80 51 C69 65 60 69 50 68 C63 78 75 69 80 51Z" />
        <path d="M50 67 L45 77 L50 74 L55 77Z" />
      </g>
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg {...common}>
      {type === "users" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8" />
          <path d="M18 14a5 5 0 0 1 3 5v1" />
        </>
      )}
      {type === "book" && (
        <>
          <path d="M12 7c-2-2-5-2-9-1v14c4-1 7-1 9 1" />
          <path d="M12 7c2-2 5-2 9-1v14c-4-1-7-1-9 1" />
          <path d="M12 7v14" />
        </>
      )}
      {type === "target" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </>
      )}
      {type === "grow" && (
        <>
          <path d="M12 21V11" />
          <path d="M12 14C5 14 5 7 5 7s7-1 7 7" />
          <path d="M12 11c0-6 7-7 7-7s1 7-7 7" />
        </>
      )}
    </svg>
  );
}

const features = [
  {
    title: "Connect",
    description: "Connect with like-minded people",
    icon: "users",
  },
  {
    title: "Learn",
    description: "Learn new knowledge from experts",
    icon: "book",
  },
  {
    title: "Practice",
    description: "Practise daily with guided habits",
    icon: "target",
  },
  {
    title: "Grow",
    description: "Grow and track your progress",
    icon: "grow",
  },
];

export default function SignupTermsPage() {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!agreed) {
      setMessage("Please agree to the LOTUS Community Rules.");
      return;
    }

    setMessage("Thank you! Your agreement has been recorded for this demo.");
  }

  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:flex lg:items-center lg:justify-center lg:px-12 lg:py-8">
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[1.65fr_1px_1fr] lg:gap-14">

        {/* LOTUS Brand Section */}
        <section className="flex flex-col items-center text-center">
          <div className="h-[120px] w-[120px] sm:h-[145px] sm:w-[145px]">
            <LotusLogo />
          </div>

          <h1 className="mt-3 text-[58px] font-extrabold tracking-[5px] text-[#f58220] sm:text-[70px]">
            LOTUS
          </h1>

          <p className="mt-1 max-w-[480px] text-[17px] leading-[1.7] text-[#666666] sm:text-[19px]">
            A calm place to meet people, gain knowledge,
            practise every day and grow into your best self.
          </p>

          <div className="mt-11 grid w-full max-w-[850px] grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[100px] items-center gap-4 rounded-[20px] border border-[#eeeeee] px-5 py-4 text-left"
              >
                <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border-2 border-[#f58220] bg-[#fff7f0] text-[#f58220]">
                  <FeatureIcon type={feature.icon} />
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#171717]">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[#666666]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vertical Divider */}
        <div className="hidden h-[610px] w-px bg-black lg:block" />

        {/* Final Terms Section */}
        <section className="relative mx-auto w-full max-w-[540px] rounded-[28px] border border-[#eeeeee] bg-white px-7 py-10 shadow-[0_20px_55px_rgba(0,0,0,0.07)] sm:px-12 sm:py-12">

          <div className="absolute -top-4 right-8 rounded-full bg-[#f58220] px-5 py-2 text-[13px] font-semibold text-white">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white" />
            Final step
          </div>

          <h2 className="text-[39px] font-bold leading-tight tracking-[-1.5px] text-[#111111] sm:text-[44px]">
            Almost done!
          </h2>

          <p className="mt-2 text-[16px] text-[#666666]">
            Terms & Conditions for LOTUS users
          </p>

          
{/* Scrollable Terms Box */}
<div
  className="mt-6 h-[335px] overflow-y-auto rounded-[20px] border border-[#e5e5e5] px-5 py-5 text-[13px] leading-[1.65] text-[#666666] sm:h-[335px]"
  style={{
    scrollbarWidth: "thin",
    scrollbarColor: "#f58220 transparent",
  }}
>
  <p className="mb-5">
    Welcome to LOTUS! By creating an account, you agree to follow
    these four principles to help build a meaningful, respectful,
    and spiritually enriching community.
  </p>

  <div className="mb-4">
    <h4 className="mb-1 font-bold text-[#171717]">
      <span className="mr-2 text-[#f58220]">1.</span>
      Connect with Respect
    </h4>
    <p>
      Treat every member with kindness. Respect different
      perspectives and maintain a friendly, inclusive environment.
      Harassment, hate speech, bullying, and discrimination are not allowed.
    </p>
  </div>

  <div className="mb-4">
    <h4 className="mb-1 font-bold text-[#171717]">
      <span className="mr-2 text-[#f58220]">2.</span>
      Learn & Share Knowledge
    </h4>
    <p>
      Share meaningful, authentic, and educational content.
      Respect knowledge, culture, and different perspectives.
      Avoid misinformation, fake news, and misleading content.
    </p>
  </div>

  <div className="mb-4">
    <h4 className="mb-1 font-bold text-[#171717]">
      <span className="mr-2 text-[#f58220]">3.</span>
      Practice Positive Values
    </h4>
    <p>
      Follow ethical principles and promote positive actions.
      Content promoting intoxication, gambling, meat consumption,
      animal cruelty, exploitation, or other activities that conflict
      with LOTUS's community values is not permitted.
    </p>
  </div>

  <div className="mb-4">
    <h4 className="mb-1 font-bold text-[#171717]">
      <span className="mr-2 text-[#f58220]">4.</span>
      Grow Together
    </h4>
    <p>
      Contribute to a safe, supportive, and meaningful community.
      Respect everyone's privacy, copyright, and personal rights.
      Follow LOTUS policies and help others grow.
    </p>
  </div>

  <p className="mt-5 font-medium text-[#555555]">
    Read our complete Terms & Privacy Policy below.
  </p>
</div>

          {/* Agreement Form */}
          <form onSubmit={handleSubmit}>
            
<label className="mt-5 flex cursor-pointer items-center gap-3 text-[14px] font-semibold text-[#171717]">
  <input
    type="checkbox"
    checked={agreed}
    onChange={(e) => {
      setAgreed(e.target.checked);
      setMessage("");
    }}
    className="h-[23px] w-[23px] shrink-0 cursor-pointer accent-[#f58220]"
  />
  <span>
    I agree to the LOTUS Community Rules and Terms of Service.
  </span>
</label>

            {message && (
              <p className="mt-3 text-[13px] text-[#f58220]">
                {message}
              </p>
            )}

            
{/* Bottom Options */}
<div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eeeeee] pt-5">

  <Link
    href="/terms"
    className="shrink-0 text-[13px] font-bold text-[#171717] underline underline-offset-2 hover:text-[#f58220]"
  >
    Terms & Privacy Policy
  </Link>

  <button
    type="submit"
    className="flex h-[52px] items-center justify-between gap-4 rounded-full bg-[#f58220] px-5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(245,130,32,0.25)] transition hover:bg-[#e97413] sm:min-w-[220px]"
  >
    <span>I Agree & Continue</span>
    <span className="text-[22px] font-normal">→</span>
  </button>

</div>

          </form>
        </section>
      </div>
    </main>
  );
}
