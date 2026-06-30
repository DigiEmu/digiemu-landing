import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Company
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          Baumgartner Digital Infrastructure
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-600">
          Baumgartner Digital Infrastructure (BDI) develops and operates
          commercial infrastructure around the DigiEmu ecosystem, including
          Secure verification tooling, Enterprise deployment, Conformance
          Testing, Audit Reporting and regulated-sector integration support.
        </p>

        <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff]">
          <h2 className="text-2xl font-semibold">
            Commercial infrastructure focus
          </h2>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• DigiEmu Secure</li>
            <li>• DigiEmu Enterprise</li>
            <li>• Conformance Testing</li>
            <li>• Audit Report Tooling</li>
            <li>• Applied integration evaluation</li>
            <li>• GovTech / Health AI adoption support</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
