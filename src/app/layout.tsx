import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import config from "../../config.json";

const fira_code = Fira_Code({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: config.title,
  description: config.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${fira_code.className} bg-background text-foreground text-base md:text-lg min-w-max h-screen p-2 antialiased overflow-y-hidden overflow-x-auto`}
      >
        {children}
      </body>
    </html>
  );
}
