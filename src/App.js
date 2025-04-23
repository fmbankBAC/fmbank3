import React from 'react';


function App() {
  return (
    <main className="w-full flex flex-col items-center justify-center px-4 py-8 space-y-12">
      <section className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">F&M Bank</h1>
        <p className="text-lg">
          Digital-first. Blockchain-ready. Traditional trust.
        </p>
        <p className="mt-4 text-gray-600">
          F&M Bank is a next-generation financial institution designed for the hybrid era. We combine the reliability of traditional banking with the agility of blockchain technology.
        </p>
        <p className="mt-4 text-sm text-yellow-600">
          ⚠️ The web frontend is currently being updated. All services remain fully accessible via the mobile app for existing account holders.
        </p>
      </section>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Retail & Corporate Banking</h2>
          <p>
            Secure accounts, smart payments, lending, and enterprise-grade treasury tools.
            Whether you're an individual or a multinational, we’ve got you covered.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Digital Asset Solutions (BAC)</h2>
          <p>
            Discover BAC — our gateway to Bitcoin and crypto investments, built with compliance, custody, and risk in mind. Coming soon.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Innovation & Compliance</h2>
          <p>
            Cutting-edge doesn't mean cutting corners. We deliver innovation under strict regulatory frameworks, ensuring security, transparency, and performance.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">One Platform, Total Control</h2>
          <p>
            Our unified dashboard provides seamless access to all your financial tools, fiat or crypto — all under one secure login.
          </p>
        </div>
      </section>

      <section className="text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold">Daniele [Cognome]</h3>
            <p className="italic text-gray-600 mb-2">Chief Innovation Officer</p>
            <p>
              With over 20 years of banking experience — from branch director to high-level strategic advisor — Daniele leads innovation at F&M Bank, building bridges between traditional finance and the digital asset ecosystem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
