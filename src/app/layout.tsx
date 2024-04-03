'use client';
// Page Imports//
import { useState } from "react";
import Home from "@/app/pages/Home";
import Education from "@/app/pages/Education";
import Projects from "@/app/pages/Projects";
// Component Imports //
import Navigation from "./components/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Page from "@/app/page";

const inter = Inter({ subsets: ["latin"] });

//export const metadata: Metadata = {
//  title: ".:: Danny Mohr ::.",
//  description: "Port Folio Seite",
//};

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
         {/* <BrowserRouter>
               <Routes>
                  <Route index element = {<Home />} />
                  <Route path="Home" element = {<Home />} />
                  <Route path="Education" element = {<Education />} />
                  <Route path="Projects" element = {<Projects />} />
               </Routes>
            </BrowserRouter> */}
         </main>
      </body>
   </html>
  );
}
