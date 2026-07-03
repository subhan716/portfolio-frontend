import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Subhan.dev",
  description:
    "Showcase your skills and projects with a modern, responsive developer portfolio that highlights your experience and personal brand effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
