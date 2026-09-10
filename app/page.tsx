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
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/xnor-logo-animation.mp4"
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
              HEADING
          ================================================= */}

          

          <h1 className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-[56px] font-medium leading-[0.95] tracking-[-0.04em] text-transparent sm:text-[76px] md:text-[92px]">
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
              SOCIAL MEDIA
          ================================================= */}

          <div className="mt-10 flex items-center justify-center gap-2.5">
            {[
              {
                label: "X",
                href: "#",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.258 2.25h6.826l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 3.923H5.117L17.083 19.77z",
              },
              {
                label: "Facebook",
                href: "#",
                path: "M13.5 22v-8.5h2.85l.43-3.31H13.5V8.05c0-.96.27-1.61 1.64-1.61h1.75V3.49A23.6 23.6 0 0 0 14.6 3.4c-2.62 0-4.42 1.6-4.42 4.53v2.26H7.32v3.31h2.86V22z",
              },
              {
                label: "Instagram",
                href: "#",
                path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15c-.55-.55-.9-1.11-1.15-1.77-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0zm0 5.4A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4zm0 10.88a4.28 4.28 0 1 1 0-8.56 4.28 4.28 0 0 1 0 8.56zm6.85-11.14a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0z",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group relative flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-[8px] border border-white/[0.12] bg-black/[0.16] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white"
              >
                {/* Inner glass border */}
                <span className="pointer-events-none absolute inset-[1px] rounded-[7px] border border-white/[0.025]" />

                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 h-[14px] w-[14px] fill-current transition-transform duration-300 group-hover:scale-110"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* =================================================
            GIANT XNOR WORDMARK
        ================================================= */}

        <div className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-0 flex justify-center overflow-hidden">
          

          {/* XNOR */}
          <span
            aria-hidden="true"
            className="select-none whitespace-nowrap bg-gradient-to-b from-white/[0.075] via-white/[0.025] to-transparent bg-clip-text text-[30vw] font-semibold leading-[0.72] tracking-[-0.085em] text-transparent opacity-90 sm:text-[25vw] md:text-[21vw]"
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