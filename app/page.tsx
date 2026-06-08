import { getSiteContent } from "@/lib/site";
import {
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  GitBranch,
  FileCheck2,
  Layers,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const data = getSiteContent();

  return (
    <main className="min-h-screen bg-[#eef2f6] text-slate-900">
      <section className="px-6 py-8 md:px-12 lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl bg-white/60 px-5 py-4 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl">
              <Image
  src="/logo-light.webp"
  alt="DigiEmu Logo"
  fill
  sizes="40px"
  priority
  className="object-contain"
/>
            </div>

            <div>
              <p className="text-sm font-semibold">{data.site.name}</p>
              <p className="text-xs text-slate-500">{data.site.tagline}</p>
            </div>
          </div>

          <div className="hidden gap-8 text-sm text-slate-600 md:flex">
            {data.navigation.map((item: any) => (
              <a key={item.href} href={item.href} className="hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-[6px_6px_18px_#cfd6df,-6px_-6px_18px_#ffffff]">
              <ShieldCheck className="h-4 w-4" />
              {data.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              {data.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              {data.hero.text}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={data.hero.primary_cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[8px_8px_20px_#c2cad4,-8px_-8px_20px_#ffffff]"
              >
                {data.hero.primary_cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={data.hero.secondary_cta.href}
                className="inline-flex items-center justify-center rounded-2xl bg-[#eef2f6] px-6 py-4 text-sm font-semibold text-slate-800 shadow-[inset_6px_6px_14px_#cfd6df,inset_-6px_-6px_14px_#ffffff]"
              >
                {data.hero.secondary_cta.label}
              </a>

              <a
                href={data.hero.download_cta.href}
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-[8px_8px_20px_#c2cad4,-8px_-8px_20px_#ffffff]"
              >
                {data.hero.download_cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#eef2f6] p-6 shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff]">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="mb-5 text-sm text-slate-400">
                {data.verification_flow.title}
              </p>

              <div className="space-y-4">
                {data.verification_flow.steps.map((step: string, index: number) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProofDemo data={data} />
      <ProjectFit data={data} />
      <ValidationTracks data={data} />
      <TechnicalReview data={data} />
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {data.sections.problem.label}
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            {data.sections.problem.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {data.sections.problem.text}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Fingerprint />}
              title="Deterministic state"
              text="Define exactly what belongs inside the reproducible knowledge boundary."
            />
            <FeatureCard
              icon={<GitBranch />}
              title="Transition integrity"
              text="Verify that one state correctly follows another through a receipt-backed transition."
            />
            <FeatureCard
              icon={<FileCheck2 />}
              title="Audit evidence"
              text="Generate PASS/FAIL reports that make verification concrete and inspectable."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <InfoPanel section={data.sections.core} />
          <InfoPanel section={data.sections.proof} />
        </div>
      </section>

      <section id={data.usecases.id} className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/55 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {data.usecases.label}
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            {data.usecases.title}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.usecases.cases.map((item: any) => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#eef2f6] p-6 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff]"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={data.contact.id} className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff] md:p-14">
          <Lock className="mx-auto h-10 w-10 text-slate-300" />

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            {data.contact.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {data.contact.text}
          </p>

          <a
            href={data.contact.cta.href}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
          >
            {data.contact.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      
    </main>
  );
}

function ProofDemo({ data }: { data: any }) {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/55 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {data.proof_demo.label}
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {data.proof_demo.title}
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          <ProofBox label="Input" value={data.proof_demo.input} />
          <ProofBox label="State" value={data.proof_demo.state} />
          <ProofBox label="Hash" value={data.proof_demo.hash} mono />

          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Verify
            </p>
            <p className="mt-3 text-3xl font-semibold">{data.proof_demo.result}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {data.proof_demo.steps.map((step: string) => (
            <span
              key={step}
              className="rounded-full bg-[#eef2f6] px-4 py-2 text-sm text-slate-700 shadow-[6px_6px_16px_#d0d7e0,-6px_-6px_16px_#ffffff]"
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValidationTracks({ data }: { data: any }) {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/55 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {data.validation_tracks.label}
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {data.validation_tracks.title}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.validation_tracks.cards.map((card: any) => (
            <div
              key={card.title}
              className="rounded-3xl bg-[#eef2f6] p-6 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff]"
            >
              <h3 className="font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalReview({ data }: { data: any }) {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff] md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          {data.technical_review.label}
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          {data.technical_review.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {data.technical_review.text}
        </p>

        <a
          href={data.technical_review.cta.href}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
        >
          {data.technical_review.cta.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function ProofBox({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-3xl bg-[#eef2f6] p-6 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff]">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p
        className={`mt-3 text-sm leading-6 text-slate-700 ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SeoContent({ data }: { data: any }) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white/45 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {data.seo_content.label}
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {data.seo_content.title}
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
          {data.seo_content.paragraphs.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.seo_content.topics.map((topic: any) => (
            <div
              key={topic.title}
              className="rounded-3xl bg-[#eef2f6] p-6 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff]"
            >
              <h3 className="font-semibold text-slate-950">{topic.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {topic.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFit({ data }: { data: any }) {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          {data.project_fit.label}
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
          {data.project_fit.title}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.project_fit.cards.map((card: any) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white/10 p-6"
            >
              <h3 className="font-semibold text-white">{card.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] bg-[#eef2f6] p-7 shadow-[10px_10px_26px_#cbd2dc,-10px_-10px_26px_#ffffff]">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/70 text-slate-800 shadow-[inset_4px_4px_10px_#d4dae2,inset_-4px_-4px_10px_#ffffff]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function InfoPanel({ section }: { section: any }) {
  return (
    <div
      id={section.id}
      className="rounded-[2rem] bg-[#eef2f6] p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm text-slate-600">
        <Layers className="h-4 w-4" />
        {section.label}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {section.title}
      </h2>

      <p className="mt-5 leading-8 text-slate-600">{section.text}</p>

      <div className="mt-7 space-y-3">
        {section.items.map((item: string) => (
          <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
            <CheckCircle2 className="h-5 w-5 text-slate-900" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}