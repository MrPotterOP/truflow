import { Inter } from "next/font/google";
import "./globals.css";

import Chat from "./components/UI/Button/Chat";

import Script from "next/script";


const fontPrime = Inter({
  variable: "--font-prime",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Truflo | Home",
  description: "Unify fragmented commerce data in real time with TruFlo. Unlock actionable insights to drive performance and enable profitable omnichannel growth.",
};

const GTM_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
      </head>
      <body className={`${fontPrime.variable} font-sans`}>
        {/* Google Tag Manager NoScript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <Chat href="#leadForm" ariaLabel="Open chat" bottom="90px" side="44px" />
      </body>
    </html>
  );
}
