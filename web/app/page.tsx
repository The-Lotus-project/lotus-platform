
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="min-h-screen flex flex-col lg:flex-row">

        {/* Left Panel */}
        <section className="w-full lg:w-[48%] bg-gray-100 flex flex-col justify-between p-8 sm:p-12 lg:p-16">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-9 h-9"
                  fill="white"
                >
                  <path d="M50 10 C35 30 35 45 50 55 C65 45 65 30 50 10Z" />
                  <path d="M50 55 C20 35 10 55 20 70 C30 82 45 70 50 55Z" />
                  <path d="M50 55 C80 35 90 55 80 70 C70 82 55 70 50 55Z" />
                  <path d="M50 55 C35 55 28 75 50 90 C72 75 65 55 50 55Z" />
                </svg>
              </div>

              <span className="text-3xl font-bold tracking-wide">
                LOTUS
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 ml-1">
              A spiritual social community
            </p>
          </div>

          {/* Main Content */}
          <div className="my-16 lg:my-0 max-w-xl">
            <p className="text-orange-600 font-semibold tracking-widest text-sm uppercase mb-5">
              Welcome to LOTUS
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
              Connect with
              <span className="block text-orange-600">
                Spirituality.
              </span>
              Grow Together.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-7 max-w-lg">
              Discover a meaningful digital community where
              you can connect with people, learn Vedic wisdom,
              practice spiritual values and grow together.
            </p>

            <button className="mt-9 bg-black text-white px-9 py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>

          {/* Footer */}
          <div className="text-sm text-gray-500">
            © 2026 LOTUS Community. All rights reserved.
          </div>
        </section>

        {/* Right Panel */}
        <section className="w-full lg:w-[52%] flex flex-col justify-center items-center px-6 py-16 sm:px-12 lg:px-20">

          <div className="w-full max-w-md">

            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
                A New Beginning
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                Be Part of LOTUS
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Join a community dedicated to spiritual
                learning, meaningful connections and growth.
              </p>
            </div>

            {/* Login */}
            <button className="w-full border border-gray-300 rounded-xl py-4 font-semibold hover:bg-gray-50 transition">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-gray-400 text-sm">or</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Sign Up */}
            <button className="w-full bg-orange-600 text-white rounded-xl py-4 font-semibold hover:bg-orange-700 transition">
              Sign Up
            </button>

            {/* Philosophy */}
            <div className="mt-16 text-center">
              <h3 className="font-semibold text-gray-800">
                The LOTUS Philosophy
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {["Connect", "Learn", "Practice", "Grow"].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-50 border border-gray-100 rounded-xl py-4 text-gray-700 font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
