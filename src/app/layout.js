import { Inter } from "next/font/google";
import "./globals.css";

import Chat from "./components/UI/Button/Chat";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrime.variable} font-sans`}>
        {children}
        <Chat href="#leadForm" ariaLabel="Open chat" bottom="90px" side="44px" />
      </body>
    </html>
  );
}
