
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

function FieldIcon({ type }: { type: string }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg {...common}>
      {type === "calendar" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </>
      )}
      {type === "gender" && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </>
      )}
      {type === "country" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </>
      )}
      {type === "address" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {type === "home" && (
        <>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v12h14V9M9 21v-7h6v7" />
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

const countries = [
  "India",
  "Bangladesh",
  "Nepal",
  "Bhutan",
  "Sri Lanka",
  "Pakistan",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Other",
];

export default function SignupProfilePage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("Profile details completed. Final step is coming next!");
  }

  const selectStyle =
    "h-full w-full appearance-none bg-transparent text-[15px] text-[#888888] outline-none cursor-pointer";

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
        <div className="hidden h-[620px] w-px bg-black lg:block" />

        {/* Step 2 Form */}
        <section className="relative mx-auto w-full max-w-[540px] rounded-[28px] border border-[#eeeeee] bg-white px-7 py-10 shadow-[0_20px_55px_rgba(0,0,0,0.07)] sm:px-12 sm:py-12">

          <div className="absolute -top-4 right-8 rounded-full bg-[#f58220] px-5 py-2 text-[13px] font-semibold text-white">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white" />
            Step 2 of 2
          </div>

          <h2 className="text-[42px] font-bold leading-tight tracking-[-1.5px] text-[#111111]">
            Sign up
          </h2>

          <p className="mt-2 max-w-[390px] text-[16px] leading-relaxed text-[#666666]">
            Create your LOTUS account and embark on a beautiful journey.
          </p>

          {/* Progress Indicator */}
          <div className="mt-5 flex gap-2">
            <div className="h-[4px] flex-1 rounded-full bg-[#f58220]" />
            <div className="h-[4px] flex-1 rounded-full bg-[#f58220]" />
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">

            {/* Date of Birth */}
            <div>
              <label className="mb-2 block pl-2 text-[13px] font-semibold text-[#222222]">
                Date of birth
              </label>

              <div className="flex h-[53px] items-center rounded-full border border-[#dddddd] px-5 transition focus-within:border-[#f58220]">
                <span className="mr-3 shrink-0 text-[#f58220]">
                  <FieldIcon type="calendar" />
                </span>

                <div className="grid flex-1 grid-cols-3 divide-x divide-[#dddddd]">
                  <select
                    required
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className={`${selectStyle} pr-2`}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className={`${selectStyle} px-3`}
                  >
                    <option value="">Month</option>
                    {[
                      "January", "February", "March", "April",
                      "May", "June", "July", "August",
                      "September", "October", "November", "December",
                    ].map((name, i) => (
                      <option key={name} value={i + 1}>
                        {name}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={`${selectStyle} pl-3`}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 107 }, (_, i) => 2026 - i).map(
                      (y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="relative flex h-[51px] items-center rounded-full border border-[#dddddd] px-6 transition focus-within:border-[#f58220]">
              <span className="mr-3 text-[#f58220]">
                <FieldIcon type="gender" />
              </span>

              <select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={selectStyle}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>

              <span className="pointer-events-none absolute right-6 text-[#222]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>

            {/* Country */}
            <div className="relative flex h-[51px] items-center rounded-full border border-[#dddddd] px-6 transition focus-within:border-[#f58220]">
              <span className="mr-3 text-[#f58220]">
                <FieldIcon type="country" />
              </span>

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={selectStyle}
              >
                <option value="">Country</option>
                {countries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-6 text-[#222]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>

            {/* Present Address */}
            <div className="flex h-[51px] items-center rounded-full border border-[#dddddd] px-6 transition focus-within:border-[#f58220]">
              <span className="mr-3 text-[#f58220]">
                <FieldIcon type="address" />
              </span>

              <input
                type="text"
                placeholder="Present address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                autoComplete="street-address"
                className="h-full w-full bg-transparent text-[15px] text-[#222] outline-none placeholder:text-[#999]"
              />
            </div>

            {/* Home Town */}
            <div className="flex h-[51px] items-center rounded-full border border-[#dddddd] px-6 transition focus-within:border-[#f58220]">
              <span className="mr-3 text-[#f58220]">
                <FieldIcon type="home" />
              </span>

              <input
                type="text"
                placeholder="Home town"
                value={homeTown}
                onChange={(e) => setHomeTown(e.target.value)}
                required
                className="h-full w-full bg-transparent text-[15px] text-[#222] outline-none placeholder:text-[#999]"
              />
            </div>

            {message && (
              <p className="px-2 pt-1 text-center text-sm text-[#f58220]">
                {message}
              </p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="mt-3 flex h-[60px] w-full items-center justify-between rounded-full bg-[#f58220] px-7 text-[16px] font-semibold text-white shadow-[0_12px_22px_rgba(245,130,32,0.25)] transition hover:bg-[#e97413]"
            >
              Sign up
              <span className="text-[25px] font-normal">→</span>
            </button>
          </form>

          <p className="mt-5 text-center text-[15px] text-[#666666]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#f58220] hover:underline"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
