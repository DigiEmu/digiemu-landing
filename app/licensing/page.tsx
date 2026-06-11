import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const rows = [
  ["DigiEmu Core Public Standard", "Public"],
  ["Specification & Concepts", "Public"],
  ["Reference Examples", "Public / Source-available"],
  ["Conformance Testing", "Commercial"],
  ["DigiEmu Secure", "Commercial"],
  ["DigiEmu Enterprise", "Commercial"],
  ["Audit Report Tooling", "Commercial"],
  ["Enterprise Integration", "Commercial"],
  ["Regulated-sector Deployment", "Commercial"],
];

export default function LicensingPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Licensing
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          Open standard. Commercial enterprise adoption.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          DigiEmu Core is published as a public verification standard.
          Commercial enterprise infrastructure and regulated-sector adoption
          are provided by Baumgartner Digital Infrastructure.
        </p>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white/60 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]">
          <table className="w-full">
            <tbody>
              {rows.map(([name, status]) => (
                <tr key={name} className="border-b border-slate-200/50">
                  <td className="px-6 py-5 font-medium">{name}</td>
                  <td className="px-6 py-5 text-right text-slate-600">
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
