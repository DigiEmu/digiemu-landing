import Link from "next/link";
import { ArrowLeft, CheckCircle2, GitBranch, FileCheck2 } from "lucide-react";

const principles = [
  "Public standard layer for deterministic AI decision-state verification",
  "Transparent terminology and reproducible state-boundary definitions",
  "Canonical snapshots and replay-verifiable transition logic",
  "Conformance-oriented examples for independent technical review",
];

export default function StandardPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Public Standard
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          DigiEmu Core as an open deterministic verification standard.
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
          DigiEmu Core is positioned as a public standard layer for deterministic
          AI decision-state verification. The standard is designed to be
          transparent, reviewable and interoperable, while commercial enterprise
          adoption is provided separately by Baumgartner Digital Infrastructure.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-[2rem] bg-white/60 p-6 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-950" />
              <p className="leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff] md:p-10">
          <div className="flex items-center gap-3">
            <GitBranch className="h-6 w-6 text-slate-300" />
            <h2 className="text-2xl font-semibold">Core 2.0 draft.4</h2>
          </div>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            The current public-standard milestone focuses on canonical snapshots,
            inside-hash versus outside-hash boundaries, replay verification,
            receipt continuity and conformance-oriented technical review.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] bg-white/55 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-10">
          <div className="flex items-center gap-3">
            <FileCheck2 className="h-6 w-6 text-slate-900" />
            <h2 className="text-2xl font-semibold">Open standard, commercial adoption</h2>
          </div>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            The standard may be open. Verified enterprise adoption is not free.
            DigiEmu-compatible claims, conformance testing, audit reports,
            enterprise tooling and regulated-sector integrations require separate
            commercial arrangements with Baumgartner Digital Infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/licensing"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white"
            >
              View Licensing
            </Link>
            <Link
              href="/proof"
              className="inline-flex items-center justify-center rounded-2xl bg-[#eef2f6] px-6 py-4 text-sm font-semibold text-slate-800 shadow-[inset_6px_6px_14px_#cfd6df,inset_-6px_-6px_14px_#ffffff]"
            >
              View Proof
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
