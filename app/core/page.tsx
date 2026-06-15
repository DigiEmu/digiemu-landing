import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CorePage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight md:text-7xl">
          DigiEmu Core
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Core defines deterministic knowledge boundaries for AI systems. It
          separates reproducible facts from non-deterministic metadata, so
          decision states can be reconstructed and verified.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            "Canonical JSON snapshots",
            "Inside-hash vs outside-hash boundary",
            "SHA-256 state identity",
            "Replay-ready decision states",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] bg-white/60 p-6 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]"
            >
              <h2 className="text-xl font-semibold">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}