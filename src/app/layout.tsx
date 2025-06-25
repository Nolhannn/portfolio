
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css"
import Etoile from "./components/etoile";
import Headercompo from "./components/headercompo";
import Nav from "./components/nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   /*
   background-color: rgb(11, 11, 29);
  width: 100%;
  margin: 0%;
  padding-bottom: 25px;
  max-width: 100%;
  position: absolute;
  top: 0px;
  z-index: 5;
  position: fixed;
  color: white;
   */
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8"/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <title>Madani Nolhan</title>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Headercompo/>
        
        {children}
        <Etoile/>
      </body>
     
    </html>
  );
}
