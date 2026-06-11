import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

const passChecks = [
  "canonical_state_hash",
  "receipt_prev_state_hash",
  "receipt_next_state_hash",
  "chain_continuity",
  "tamper_detection",
];

const failExamples = [
  {
    title: "Hash mismatch",
    reason: "The reconstructed canonical state does not match the expected state hash.",
  },
  {
    title: "Broken receipt chain",
    reason: "A receipt does not correctly link the previous state hash to the next state hash.",
  },
  {
    title: "Boundary violation",
    reason: "Non-deterministic metadata was included inside the deterministic state boundary.",
  },
];

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          DigiEmu Proof
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          PASS / FAIL verification for deterministic execution integrity.
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
          DigiEmu Proof checks whether snapshots, receipts and transition chains
          compose into a verifiable result. The goal is not another explanation
          layer, but concrete verification evidence.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-300" />
              <h2 className="text-2xl font-semibold">PASS example</h2>
            </div>

            <pre className="mt-6 overflow-x-auto rounded-2xl bg-white/10 p-5 text-sm text-slate-200">
    {`{
        "verifier": "digiemu-proof",
        "core": "2.0-draft.4",
        "result": "PASS",
        "checks": [
          "canonical_state_hash",
          "receipt_prev_state_hash",
          "receipt_next_state_hash",
          "chain_continuity",
          "tamper_detection"
        ]
      }`}
            </pre>
          </div>

          <div className="rounded-[2rem] bg-white/60 p-6 shadow-[10px_10px_26px_#cbd2dc,-10px_-10px_26px_#ffffff]">
            <h2 className="text-2xl font-semibold">Verified checks</h2>

            <div className="mt-6 space-y-3">
              {passChecks.map((check) => (
                <div key={check} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-slate-950" />
                  <span className="font-mono">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Conformance failure examples
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950">
            Failures should be visible, reproducible and explainable.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {failExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-white/60 p-6 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]"
              >
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-slate-950" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}