   import Navigation from "@components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: ".:: Danny Mohr ::.",
 description: "Port Folio Seite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="de">
      <body>
         <Navigation />
         <main className={inter.className}>{children}
         </main>
      </body>
   </html>
  );
}
