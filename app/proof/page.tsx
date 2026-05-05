export default function ProofPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-slate-500 hover:text-slate-950">
          ← Back to DigiEmu
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight md:text-7xl">
          DigiEmu Proof
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Proof is the minimal technical verifier for deterministic execution
          integrity. It checks canonical states, receipts and transition
          continuity.
        </p>

        <div className="mt-12 rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl">
          <p className="text-sm text-slate-400">Verification output</p>

          <pre className="mt-6 overflow-x-auto rounded-2xl bg-white/10 p-5 text-sm">
{`{
  "verifier": "digiemu-proof",
  "result": "PASS",
  "checks": [
    "canonical_state_hash",
    "receipt_prev_state_hash",
    "receipt_next_state_hash",
    "chain_continuity"
  ]
}`}
          </pre>
        </div>
      </div>
    </main>
  );
}