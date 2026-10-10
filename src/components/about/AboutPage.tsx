import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from 'next/link'
import {
  ArrowUpRight,
  BookOpen,
  FileSearch,
  Languages,
  ScanText,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  const principles = [
    {
      key: "precision",
      icon: FileSearch,
    },
    {
      key: "multilingual",
      icon: Languages,
    },
    {
      key: "efficiency",
      icon: Sparkles,
    },
    {
      key: "privacy",
      icon: ShieldCheck,
    },
  ] as const;

  const technologies = [
    {
      key: "search",
      icon: FileSearch,
    },
    {
      key: "ocr",
      icon: ScanText,
    },
    {
      key: "translation",
      icon: Languages,
    },
    {
      key: "assistant",
      icon: BookOpen,
    },
  ] as const;

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#59E7A6] via-[#DDF9EC] to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-12 px-6 py-16 lg:px-8 max-lg:grid-cols-1">
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#007D78]">
              {t("hero.eyebrow")}
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#07384D] md:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#496873]">
              {t("hero.description")}
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <Image
              src="/images/about/research.svg"
              alt=""
              width={600}
              height={420}
              priority
              className="h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-6 lg:px-8 max-lg:grid-cols-1">
          <div className="flex justify-center">
            <Image
              src="/images/about/about-team-collaboration.svg"
              alt=""
              width={600}
              height={420}
              className="h-auto w-full max-w-[570px]"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#00A99D]">
              {t("intro.eyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#07384D] md:text-4xl">
              {t("intro.title")}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#667085] md:text-lg">
              <p>{t("intro.description1")}</p>
              <p>{t("intro.description2")}</p>
              <p>{t("intro.description3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-[#F7FBFA] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1">
            <div>
              <Image
                src="/images/about/about-mission-vision.svg"
                alt=""
                width={600}
                height={420}
                className="h-auto w-full"
              />
            </div>

            <div className="grid gap-6">
              <article className="rounded-xl border border-[#DCE9E7] bg-white p-8 shadow-sm">
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#EAF7F5] text-[#00A99D]">
                  <Target size={25} />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#00A99D]">
                  {t("mission.eyebrow")}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#07384D] md:text-3xl">
                  {t("mission.title")}
                </h2>

                <p className="mt-4 leading-7 text-[#667085]">
                  {t("mission.description")}
                </p>
              </article>

              <article className="rounded-xl border border-[#DCE9E7] bg-white p-8 shadow-sm">
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#EAF7F5] text-[#00A99D]">
                  <Eye size={25} />
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#00A99D]">
                  {t("vision.eyebrow")}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#07384D] md:text-3xl">
                  {t("vision.title")}
                </h2>

                <p className="mt-4 leading-7 text-[#667085]">
                  {t("vision.description")}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#00A99D]">
              {t("principles.eyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#07384D] md:text-4xl">
              {t("principles.title")}
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {principles.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="group rounded-2xl border border-[#DCE9E7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#EAF7F5] text-[#00A99D] transition group-hover:bg-[#00A99D] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-[#07384D]">
                  {t(`principles.${key}.title`)}
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  {t(`principles.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#F7FBFA] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#00A99D]">
              {t("technology.eyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#07384D] md:text-4xl">
              {t("technology.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              {t("technology.description")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {technologies.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="rounded-2xl border border-[#DCE9E7] bg-white p-7"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#EAF7F5] text-[#00A99D]">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-[#07384D]">
                  {t(`technology.${key}.title`)}
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  {t(`technology.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[linear-gradient(110deg,#59E7A6_0%,#9AF0C7_30%,#DDF9EC_65%,#FFFFFF_100%)] px-8 py-14 md:px-14 md:py-16">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#007D78]">
              {t("closing.eyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#07384D] md:text-5xl">
              {t("closing.title")}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#496873]">
              {t("closing.description")}
            </p>

            <Link
              href="https://schobot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00A99D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#007D78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07384D] focus-visible:ring-offset-2"
            >
              {t("closing.button")}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
