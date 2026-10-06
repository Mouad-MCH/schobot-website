"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Slide {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  ctaHref: string;
  artClass: string;
  artContent: React.ReactNode;
}

function ArtAI() {
  return (
    <>
      <div className="hero-floor" />
      <div className="hero-orb" />
      <div className="hero-server hero-s1" />
      <div className="hero-server hero-s2" />
      <div className="hero-screen hero-sc1">
        <span /><span /><span />
      </div>
      <div className="hero-screen hero-sc2">
        <span /><span />
      </div>
      <div className="hero-chip" />
      <div className="hero-spark hero-sp1" />
      <div className="hero-spark hero-sp2" />
      <div className="hero-spark hero-sp3" />
    </>
  );
}

function ArtOCR() {
  return (
    <>
      <div className="ocr-scanner" />
      <div className="ocr-doc ocr-doc-a">
        <i /><i /><i /><i />
      </div>
      <div className="ocr-doc ocr-doc-b">
        <i /><i /><i />
      </div>
      <div className="ocr-magnifier" />
      <div className="ocr-scan-beam" />
      <div className="ocr-node-cloud ocr-nc1" />
      <div className="ocr-node-cloud ocr-nc2" />
    </>
  );
}

function ArtSpeech() {
  return (
    <>
      <div className="speech-sound-ring speech-sr1" />
      <div className="speech-sound-ring speech-sr2" />
      <div className="speech-audio-deck">
        <b /><b /><b /><b /><b /><b /><b /><b /><b />
      </div>
      <div className="speech-mic-capsule" />
      <div className="speech-card">
        <i /><i /><i /><i />
      </div>
      <div className="speech-mini-server" />
    </>
  );
}

function ArtTTS() {
  return (
    <>
      <div className="tts-pulse tts-pr1" />
      <div className="tts-pulse tts-pr2" />
      <div className="tts-speaker" />
      <div className="tts-voice-wave" />
      <div className="tts-text-sheet">
        <i /><i /><i /><i />
      </div>
      <div className="tts-headphones" />
    </>
  );
}

export default function HeroSlider() {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: Slide[] = [
    {
      id: "academic",
      eyebrow: t("s1eyebrow"),
      heading: t("s1heading"),
      body: t("s1body"),
      cta: t("s1cta"),
      ctaHref: "#products",
      artClass: "art-ai",
      artContent: <ArtAI />,
    },
    {
      id: "ocr",
      eyebrow: t("s2eyebrow"),
      heading: t("s2heading"),
      body: t("s2body"),
      cta: t("s2cta"),
      ctaHref: "#ocr",
      artClass: "art-ocr",
      artContent: <ArtOCR />,
    },
    {
      id: "speech",
      eyebrow: t("s3eyebrow"),
      heading: t("s3heading"),
      body: t("s3body"),
      cta: t("s3cta"),
      ctaHref: "#speech",
      artClass: "art-speech",
      artContent: <ArtSpeech />,
    },
    {
      id: "tts",
      eyebrow: t("s4eyebrow"),
      heading: t("s4heading"),
      body: t("s4body"),
      cta: t("s4cta"),
      ctaHref: "#speech",
      artClass: "art-tts",
      artContent: <ArtTTS />,
    },
  ];

  function go(index: number) {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
    restart();
  }

  function restart() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6500);
  }

  useEffect(() => {
    restart();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="hero-section"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      {/* Background radial glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-slider">
        {slides.map((slide, i) => (
          <article
            key={slide.id}
            className={`hero-slide${i === current ? " hero-slide--active" : ""}`}
            aria-hidden={i !== current}
            aria-roledescription="slide"
          >
            <div className="wrap hero-grid">
              {/* Copy */}
              <div className="hero-copy">
                <span className="section-eyebrow hero-eyebrow">
                  {slide.eyebrow}
                </span>
                <h1 className="hero-heading">
                  {slide.heading}
                </h1>
                <p className="hero-body">
                  {slide.body}
                </p>
                <div className="hero-actions">
                  <a
                    href={slide.ctaHref}
                    className="btn-primary hero-btn-primary"
                  >
                    {slide.cta}
                    <span className="rtl-flip" aria-hidden="true">↗</span>
                  </a>
                  <Link href="/products" className="hero-read-more">
                    <ArrowRight size={14} className="rtl-flip" />
                  </Link>
                </div>
              </div>

              {/* Art */}
              <div
                className={`hero-art ${slide.artClass}`}
                aria-hidden="true"
              >
                {slide.artContent}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button
          className="hero-nav-btn"
          onClick={() => go(current - 1)}
          aria-label={t("prevSlide")}
        >
          ‹
        </button>

        <div className="hero-dots" role="tablist">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              className={`hero-dot${i === current ? " hero-dot--active" : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

        <button
          className="hero-nav-btn"
          onClick={() => go(current + 1)}
          aria-label={t("nextSlide")}
        >
          ›
        </button>
      </div>
    </section>
  );
}
