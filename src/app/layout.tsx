import type { Metadata } from "next";
import { Orbitron, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "500", "800", "900", "700"],
});
const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["700", "300", "500", "600", "200"],
});

export const metadata: Metadata = {
  title: "Lumex 3d test",
  description: "ThreeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${ibm.variable} font-ibm antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
