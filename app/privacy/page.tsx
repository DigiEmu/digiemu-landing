export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#eef2f6] px-6 py-16 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">Privacy Policy</h1>

        <div className="mt-10 space-y-8 rounded-[2rem] bg-white/60 p-8 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]">
          <section>
            <h2 className="text-2xl font-semibold">Responsible party</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Baumgartner Digital Infrastructure<br />
              Bruno Baumgartner<br />
              Switzerland<br />
              Email: <a className="underline" href="mailto:contact@digiemu.ch">contact@digiemu.ch</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Personal data</h2>
            <p className="mt-4 leading-7 text-slate-600">
              This website may process personal data if visitors contact us by email.
              In that case, the submitted contact information and message content are used
              only to respond to the inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Hosting and technical data</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The website may process technical access data such as IP address, browser type,
              date and time of access and requested pages for security, hosting and operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Downloads</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The website provides downloadable documents. Download access may create standard
              technical server logs, but no separate user account is required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your rights</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Depending on applicable law, visitors may request information, correction or deletion
              of their personal data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Status</h2>
            <p className="mt-4 leading-7 text-slate-600">
              This privacy policy may be updated as the DigiEmu website and services evolve.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
