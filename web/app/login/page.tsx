
"use client";

import Link from "next/link";
import { useState } from "react";

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
    icon: "sprout",
  },
];

function LotusLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="50" fill="#F58220" />
      <g fill="white">
        <path d="M50 22 C34 38 38 62 50 76 C62 62 66 38 50 22Z" />
        <path d="M35 32 C23 48 31 67 47 76 C40 57 39 43 35 32Z" />
        <path d="M65 32 C77 48 69 67 53 76 C60 57 61 43 65 32Z" />
        <path d="M22 48 C23 65 38 77 50 79 C38 65 30 56 22 48Z" />
        <path d="M78 48 C77 65 62 77 50 79 C62 65 70 56 78 48Z" />
        <path d="M50 74 L44 84 L56 84Z" />
      </g>
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
      {type === "users" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c0-3 2.2-5 5.5-5s5.5 2 5.5 5" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8M17 14c2.2.5 3.5 2.2 3.5 4.5" />
        </>
      )}
      {type === "book" && (
        <>
          <path d="M3 5.5c3.5-1.5 6.5-.5 9 2v13c-2.5-2.5-5.5-3.5-9-2z" />
          <path d="M21 5.5c-3.5-1.5-6.5-.5-9 2v13c2.5-2.5 5.5-3.5 9-2z" />
        </>
      )}
      {type === "target" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </>
      )}
      {type === "sprout" && (
        <>
          <path d="M12 21V11" />
          <path d="M12 13C5 13 4 8 4 5c5 0 8 2 8 8Z" />
          <path d="M12 10c0-5 3-7 8-7 0 4-1 9-8 9" />
        </>
      )}
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      {visible && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:flex lg:items-center lg:justify-center lg:px-12 lg:py-12">

      <div className="mx-auto grid w-full max-w-[1480px] items-center gap-10 lg:grid-cols-[1.65fr_1px_1fr] lg:gap-14">

        {/* LEFT SIDE - LOTUS BRAND */}

        <section className="flex flex-col items-center text-center">

          <div className="mb-3 h-36 w-36 rounded-full border-[10px] border-[#FFF3E8] p-1">
            <LotusLogo />
          </div>

          <h1 className="text-6xl font-extrabold tracking-[0.08em] text-[#F58220] sm:text-7xl">
            LOTUS
          </h1>

          <p className="mt-3 max-w-[490px] text-lg leading-[1.65] text-[#666666]">
            A calm place to meet people, gain knowledge,
            practise every day and grow into your best self.
          </p>

          <div className="mt-11 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[98px] items-center gap-4 rounded-[20px] border border-[#EEEEEE] px-5 py-4 text-left transition hover:border-[#F58220] hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#F58220] bg-[#FFF7F0] text-[#F58220]">
                  <FeatureIcon type={feature.icon} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#171717]">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#666666]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* VERTICAL DIVIDER */}

        <div className="hidden h-[490px] w-px bg-black lg:block" />

        {/* RIGHT SIDE - LOGIN FORM */}

        <section className="w-full">
          <div className="mx-auto w-full max-w-[520px] rounded-[30px] border border-[#EEEEEE] bg-white px-7 py-10 shadow-[0_15px_55px_rgba(0,0,0,0.07)] sm:px-12 sm:py-12">

            <h2 className="text-4xl font-bold tracking-tight text-[#151515]">
              Welcome Back!
            </h2>

            <p className="mt-2 text-base text-[#666666]">
              Login to continue your journey
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* EMAIL */}

              <div className="flex h-14 items-center gap-3 rounded-full border border-[#DDDDDD] px-6 transition focus-within:border-[#F58220]">
                <span className="text-[#F58220]">
                  <MailIcon />
                </span>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-[#888888]"
                />
              </div>

              {/* PASSWORD */}

              <div className="flex h-14 items-center gap-3 rounded-full border border-[#DDDDDD] px-6 transition focus-within:border-[#F58220]">
                <span className="text-[#F58220]">
                  <LockIcon />
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-[#888888]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#999999] transition hover:text-[#F58220]"
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>

              {/* FORGOT PASSWORD AND SIGN UP */}

              <div className="flex flex-wrap items-center justify-between gap-2 px-1 pt-1 text-sm">
                <button
                  type="button"
                  className="font-semibold text-[#171717] hover:text-[#F58220]"
                >
                  Forgot password?
                </button>

                <p className="text-[#666666]">
                  New here?{" "}
                  <Link
                    href="/signup"
                    className="font-bold text-[#F58220] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="flex h-[60px] w-full items-center justify-between rounded-full bg-[#F58220] px-7 text-base font-semibold text-white shadow-[0_8px_20px_rgba(245,130,32,0.28)] transition hover:bg-[#E97515] hover:shadow-[0_10px_25px_rgba(245,130,32,0.38)]"
              >
                Sign in
                <span className="text-2xl">→</span>
              </button>

            </form>

            {/* SOCIAL LOGIN */}

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#EEEEEE]" />
              <span className="text-xs text-[#999999]">
                or sign in with
              </span>
              <div className="h-px flex-1 bg-[#EEEEEE]" />
            </div>

            <div className="grid grid-cols-3 gap-2">

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#DDDDDD] text-sm font-semibold text-[#222222] transition hover:border-[#F58220] hover:bg-[#FFF7F0]"
              >
                <span className="font-extrabold text-lg text-[#4285F4]">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#DDDDDD] text-sm font-semibold text-[#222222] transition hover:border-[#F58220] hover:bg-[#FFF7F0]"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-xs font-bold text-white">
                  f
                </span>
                Facebook
              </button>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#DDDDDD] text-sm font-semibold text-[#222222] transition hover:border-[#F58220] hover:bg-[#FFF7F0]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
                Instagram
              </button>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
