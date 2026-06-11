import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Building2,
  FileCheck2,
  Server,
  Lock,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure verification tooling",
    text: "Enterprise-oriented verification tooling for regulated AI workflows and controlled evidence handling.",
  },
  {
    icon: FileCheck2,
    title: "Audit report generation",
    text: "Structured PASS / FAIL verification reports and replay-verifiable evidence bundles.",
  },
  {
    icon: Server,
    title: "Private deployment options",
    text: "Planned support for controlled enterprise environments, private infrastructure and regulated deployments.",
  },
  {
    icon: Layers,
    title: "Conformance testing",
    text: "Validation workflows for DigiEmu-compatible implementations and verification pipelines.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-slate-950"
        >
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back to DigiEmu
        </Link>

        <div className="mt-12">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-[6px_6px_18px_#cfd6df,-6px_-6px_18px_#ffffff]">
            <Building2 className="h-4 w-4" />
            Planned commercial adoption layer
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            DigiEmu Enterprise
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            DigiEmu Enterprise is the planned commercial infrastructure layer
            around the DigiEmu verification ecosystem. It is intended for
            organizations that require secure verification workflows,
            controlled deployment environments, audit reporting and
            enterprise-grade governance integration.
          </p>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[16px_16px_40px_#c7ced8,-16px_-16px_40px_#ffffff] md:p-10">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-slate-300" />
              <h2 className="text-2xl font-semibold">
                Current positioning
              </h2>
            </div>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              DigiEmu Enterprise is currently positioned as an early-stage
              enterprise adoption concept and pilot preparation layer.
              The focus is on deterministic verification, audit-ready
              evidence generation and regulated-sector applicability.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[2rem] bg-white/60 p-7 shadow-[10px_10px_26px_#cbd2dc,-10px_-10px_26px_#ffffff]"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef2f6] shadow-[inset_4px_4px_10px_#d4dae2,inset_-4px_-4px_10px_#ffffff]">
                    <Icon className="h-5 w-5 text-slate-900" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] bg-white/55 p-8 shadow-[12px_12px_32px_#cbd2dc,-12px_-12px_32px_#ffffff] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Pilot adoption
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Enterprise pilots and strategic partnerships.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              DigiEmu Enterprise is intended to support future pilot
              programs, regulated-sector validation workflows and strategic
              partner integrations around deterministic AI verification and
              auditability.
            </p>

            <a
              href="mailto:contact@digiemu.ch"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[8px_8px_20px_#c2cad4,-8px_-8px_20px_#ffffff]"
            >
              Discuss enterprise collaboration
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
