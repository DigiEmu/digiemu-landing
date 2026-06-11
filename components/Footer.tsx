import Link from "next/link";

const links = [
  { label: "Standard", href: "/standard" },
  { label: "Core", href: "/core" },
  { label: "Proof", href: "/proof" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Licensing", href: "/licensing" },
  { label: "Company", href: "/company" },
  { label: "GitHub", href: "https://github.com/DigiEmu" },
  { label: "DigiEmu.com", href: "https://digiemu.com" },
  { label: "Impressum", href: "/impressum" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#eef2f6] px-6 py-10 text-slate-600 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/50 p-6 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff] md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-950">DigiEmu</p>
            <p className="mt-1 text-sm">
              Built by Baumgartner Digital Infrastructure
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-950"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} Baumgartner Digital Infrastructure. DigiEmu Core is positioned as a public standard; commercial enterprise adoption is provided separately.
        </div>
      </div>
    </footer>
  );
}
