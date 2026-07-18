import "./globals.css";

export const metadata = {
  title: "Concord Model United Nations Vadodara 2026",
  description: "Official website of Concord Model United Nations Vadodara 2026. Join India's premier MUN conference from 22-23 August 2026 at The Fern Residency Vadodara. Where Ideas Converge. Change Begins.",
  keywords: "Concord MUN, MUN Vadodara, Model United Nations, Vadodara MUN, Concord MUN 2026, Concord Model United Nations 2026, Fern Residency Vadodara MUN",
  authors: [{ name: "Team Concord MUN" }],
  openGraph: {
    title: "Concord Model United Nations Vadodara 2026",
    description: "Where Ideas Converge. Change Begins. India's premier MUN conference at The Fern Residency Vadodara, 22-23 August 2026.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-parchment text-almost-black">
        {children}
      </body>
    </html>
  );
}
