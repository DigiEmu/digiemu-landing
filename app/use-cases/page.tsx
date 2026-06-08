import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const cases = [
  {
    title: "GazaCare AI",
    text: "Medical AI traceability: decision fingerprint, QR/hash evidence and verifiable recommendation history.",
  },
  {
    title: "Public Sector / CO₂",
    text: "Decision-state reconstruction for public-sector workflows, climate reporting and accountable administrative AI.",
  },
  {
    title: "TBN",
    text: "Complementary trust architecture: TBN verifies agent trust; DigiEmu reconstructs decision state.",
  },
  {
    title: "Antifragile.AI",
    text: "Potential governance interoperability: DigiEmu as deterministic evidence layer for AI approval workflows.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Use Cases
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          Partner-facing validation paths for DigiEmu.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          DigiEmu is designed for regulated workflows where decisions must remain
          reconstructable, verifiable and audit-ready after they happen.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-[2rem] bg-white/60 p-7 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]"
            >
              <h2 className="text-2xl font-semibold">{c.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
