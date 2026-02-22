import Image from "next/image";
import BentoCard from "@/components/BentoCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Blur Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
                  Next Gen Workplace
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                Freshly Fueling <br />
                <span className="gradient-text">Your Workforce</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Replace your vending machine with a diverse selection of fresh
                food. Provide a variety of quick dining options in your workplace
                with On The Go Markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-bold py-4 px-8 rounded-xl transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2 text-lg"
                >
                  Contact Us Today
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-display font-medium py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  How It Works
                </button>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-200 dark:bg-emerald-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-200">
                    J
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-200">
                    M
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-amber-700 dark:text-amber-200">
                    S
                  </div>
                </div>
                <p>Serving Iowa City, Cedar Rapids & Beyond.</p>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="relative w-full h-[600px]">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                    alt="Modern bright micro market in an office"
                    fill
                    className="object-cover object-center transform transition duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl flex items-start gap-4 shadow-lg">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg text-emerald-700 dark:text-emerald-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                      Healthy & Fresh
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      Curated nutritious options, fresh salads, and organic
                      beverages available 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-4xl text-slate-900 dark:text-white mb-4">
              Support Your Staff With Sustenance
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Elevate your workplace culture with a modern refreshment solution
              designed for wellness and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-6 h-auto lg:h-[800px]">
            {/* Large Card - Team Morale */}
            <BentoCard
              variant="large"
              title="Boost Team Morale"
              description="Quality snacks and beverages create natural gathering spots for collaboration and recharge."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            />

            {/* Self-Checkout Tech */}
            <BentoCard
              title="Self-Checkout Tech"
              description="Cashless transactions, mobile app integration, and custom promotions."
              badge="Seamless"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              }
              iconBgColor="bg-blue-50 dark:bg-blue-900/20"
            />

            {/* Fresh Daily - Dark Card */}
            <BentoCard
              variant="dark"
              title="Fresh Daily"
              description="Stocked daily with fresh produce, salads, and meals."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              }
            />

            {/* Custom Fit - Centered */}
            <BentoCard
              variant="centered"
              title="Custom Fit"
              description="Tailored to your office size."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              iconBgColor="bg-orange-50 dark:bg-orange-900/20"
            />

            {/* Healthy Choices - Wide Card */}
            <BentoCard
              variant="wide"
              title="Healthy Choices Only"
              description="We prioritize health. Our markets are stocked with gluten-free, organic, and nutritious options to keep your team energized without the crash. No more vending machine junk food."
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              tags={["Gluten-Free", "Organic", "Non-GMO"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden" id="contact">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="bg-slate-800 border border-slate-700 p-12 rounded-3xl">
            <span className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4 block">
              Get Started Today
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Put an end to growling stomachs.
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Choose On The Go Markets today to replace your vending machine with
              a diverse selection of fresh food. Experience the difference of a
              premium micro-market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-yellow-500/20 transform hover:scale-105">
                Book A Site Audit
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-display font-medium py-4 px-10 rounded-xl transition-all">
                Request Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
