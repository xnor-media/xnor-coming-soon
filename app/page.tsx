"use client";

import { useEffect, useRef, useState } from "react";
import GradientWaves from "./components/GradientWaves";
import GlitchText from "./components/GlitchText";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      setIntroFinished(true);
    };

    video.addEventListener("ended", handleEnded);

    video.play().catch(() => {
      // Browser may block autoplay.
    });

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#191216] text-white">
      {/* =====================================================
          INTRO VIDEO
      ===================================================== */}

      <section
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#191216] transition-all duration-[1400ms] ease-in-out ${
          introFinished
            ? "pointer-events-none scale-[1.03] opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        {/* Desktop / Laptop Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="hidden h-full w-full object-cover sm:block"
        >
          <source
            src="/videos/xnor-logo-animation.mp4"
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          className="block h-full w-full object-cover sm:hidden"
        >
          <source
            src="/videos/xnor-logo-animation-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#91169a"
          waveColor="#91169a"
          crestColor="#ba72ff"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </div>

      {/* =====================================================
          BACKGROUND OVERLAYS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Soft sheen */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.5) 48%, transparent 58%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 15%, #191216 90%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-32 pt-24 transition-all duration-[1600ms] ease-out ${
          introFinished
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex w-full max-w-[640px] flex-col pb-40 items-center text-center">
          {/* =================================================
              XNOR LOGO
          ================================================= */}

          <div className="mb-10">
            <img
              src="/xnor-logo.avif"
              alt="XNOR"
              className="h-9 w-auto opacity-90 drop-shadow-[0_0_20px_rgba(195,62,209,0.35)] sm:h-11"
            />
          </div>

          {/* =================================================
              HEADING — bumped up a size
          ================================================= */}

          <h1 className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-[66px] font-medium leading-[0.95] tracking-[-0.04em] text-transparent sm:text-[92px] md:text-[112px]">
            Coming
            <br />

            <span className="bg-gradient-to-r from-white via-[#f3d4f7] to-[#c33ed1] bg-clip-text text-transparent">
              soon.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mx-auto mt-6 max-w-[440px] text-[15px] leading-7 text-white/50 sm:text-[16px]">
            Something new is taking shape. XNOR is building what
            comes next.
          </p>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-10 h-px w-[120px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* =================================================
              UNIQUE STATUS
          ================================================= */}

          <div className="flex items-center gap-4">
            {/* Index */}
            <span className="text-[9px] font-medium tracking-[0.25em] text-[#c33ed1]/70">
              01
            </span>

            {/* Line */}
            <div className="relative h-[1px] w-[42px] overflow-hidden bg-white/[0.14]">
              <div
                className="absolute left-0 top-0 h-full w-[16px] bg-[#c33ed1]"
                style={{
                  boxShadow: "0 0 8px rgba(195,62,209,0.6)",
                  animation: "statusLine 2.4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Status */}
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
              Something is coming
            </span>

            {/* XNOR */}
            <span className="text-[9px] font-medium tracking-[0.25em] text-white/20">
              XNOR
            </span>
          </div>

          {/* =================================================
              SOCIAL MEDIA — bumped up a size
          ================================================= */}

          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              {
                label: "Facebook",
                href: "https://www.facebook.com/share/1AYMPd6YGq/",
                path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.732-.014c-.937 0-1.599.239-1.973.712-.276.353-.416.909-.416 1.723v1.55h3.639l-.487 3.667h-3.152v7.98H9.101z",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/xnor-media/",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/xnor_lk/",
                path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.36 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@xnormedia?_r=1&_t=ZS-99eLoTDM5xs",
                path: "M19.321 4.542a5.124 5.124 0 0 1-1.185-3.295h-3.423v13.677a3.055 3.055 0 1 1-3.055-3.055c.32 0 .628.05.916.14V8.521a6.48 6.48 0 1 0 5.562 6.403V8.001a8.47 8.47 0 0 0 5.054 1.672V6.25a5.12 5.12 0 0 1-3.869-1.708z",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group relative flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-[9px] border border-white/[0.12] bg-black/[0.16] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white"
              >
                {/* Inner glass border */}
                <span className="pointer-events-none absolute inset-[1px] rounded-[8px] border border-white/[0.025]" />

                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 h-[17px] w-[17px] fill-current transition-transform duration-300 group-hover:scale-110"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* =================================================
            GIANT XNOR WORDMARK — fixed clipped ascender on "O"
        ================================================= */}

        <div className="pointer-events-none absolute inset-x-0 md:bottom-[-45px] bottom-[-15px] z-0 flex justify-center overflow-x-hidden overflow-y-visible pt-[2vw]">
          {/* XNOR */}
          <span
            aria-hidden="true"
            className="select-none whitespace-nowrap bg-gradient-to-b from-white/[0.075] via-white/[0.025] to-transparent bg-clip-text text-[30vw] font-semibold leading-[0.85] tracking-[-0.085em] text-transparent opacity-90 sm:text-[25vw] md:text-[21vw]"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              textShadow: "0 -1px 0 rgba(255,255,255,0.06)",
            }}
          >
            XNOR
          </span>
        </div>
      </section>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes statusLine {
              0% {
                transform: translateX(-20px);
                opacity: 0;
              }

              20% {
                opacity: 1;
              }

              70% {
                opacity: 1;
              }

              100% {
                transform: translateX(52px);
                opacity: 0;
              }
            }
          `,
        }}
      />
    </main>
  );
}