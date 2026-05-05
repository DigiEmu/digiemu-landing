export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-slate-500 hover:text-slate-950">
          ← Back to DigiEmu
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight md:text-7xl">
          Use Cases
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          DigiEmu is built for domains where decisions must be verifiable after
          they happen.
        </p>

        <div className="mt-12 space-y-6">
          {[
            {
              title: "Medical AI",
              text: "Triage decisions must be reproducible and auditable, especially when human approval boundaries are involved.",
            },
            {
              title: "Finance",
              text: "Policy-based decisions require deterministic verification and traceable state transitions.",
            },
            {
              title: "Legal & Compliance",
              text: "Regulated workflows need more than logs — they need reconstructable decision evidence.",
            },
            {
              title: "AI Governance",
              text: "Organizations must provide verifiable documentation aligned with EU AI Act requirements.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-[2rem] bg-white/60 p-6 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]"
            >
              <h2 className="text-2xl font-semibold">{c.title}</h2>
              <p className="mt-3 text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}