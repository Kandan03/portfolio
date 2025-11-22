import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skandan's Portfolio | Full Stack Developer",
  description: "Portfolio of Somaskandan - Full Stack Developer & Creative Problem Solver. Explore my projects, skills, and get in touch for collaborations.",
  keywords: ["portfolio", "full stack developer", "web developer", "react", "next.js", "javascript", "typescript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        <SmoothCursor />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
