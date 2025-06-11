import { Inter, Poppins } from "next/font/google";
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
  description: "Truflo Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrime.variable} font-sans`}>
        {children}
        <Chat href="#leadForm" ariaLabel="Open chat" />
      </body>
    </html>
  );
}
