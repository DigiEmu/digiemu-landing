import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <h1 className="mt-12 text-5xl font-semibold tracking-tight md:text-7xl">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 rounded-[2rem] bg-white/60 p-8 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]">
          <section>
            <h2 className="text-2xl font-semibold">Responsible for this website</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Baumgartner Digital Infrastructure<br />
              Bruno Baumgartner<br />
              Switzerland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Email:{" "}
              <a className="underline" href="mailto:contact@digiemu.ch">
                contact@digiemu.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Project</h2>
            <p className="mt-4 leading-7 text-slate-600">
              DigiEmu is a deterministic knowledge infrastructure and verification
              concept for reproducible, verifiable and auditable AI-assisted
              decision states.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Disclaimer</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The information on this website is provided for general informational
              purposes. No guarantee is given for completeness, accuracy or current
              validity. External links are provided for convenience; responsibility
              for external content remains with the respective providers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
