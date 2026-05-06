import Link from "next/link";
import { ArrowLeft, TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#eef2f6] px-6 text-slate-900">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/20 blur-3xl" />

      {/* Floating Orbs */}
      <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/60 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff]">
          <TriangleAlert className="h-10 w-10 text-slate-900" />
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
          Verification failed
        </p>

        <h1 className="mt-6 text-7xl font-black tracking-tight text-slate-950 md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
          State not found.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The requested knowledge state could not be reconstructed. The route
          may have changed, the state may no longer exist, or verification
          continuity has been interrupted.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[8px_8px_20px_#c2cad4,-8px_-8px_20px_#ffffff] transition hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to DigiEmu
          </Link>

          <Link
            href="/proof"
            className="inline-flex items-center justify-center rounded-2xl bg-[#eef2f6] px-6 py-4 text-sm font-semibold text-slate-800 shadow-[inset_6px_6px_14px_#cfd6df,inset_-6px_-6px_14px_#ffffff]"
          >
            Explore Proof
          </Link>
        </div>

        {/* Verification Box */}
        <div className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-slate-950 p-6 text-left text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff]">
          <p className="text-sm text-slate-400">
            Replay verifier output
          </p>

          <pre className="mt-5 overflow-x-auto rounded-2xl bg-white/10 p-5 text-sm text-slate-200">
{`{
  "route": "/unknown",
  "verification": "FAIL",
  "reason": "state_not_found",
  "continuity": "broken"
}`}
          </pre>
        </div>
      </div>
    </main>
  );
}