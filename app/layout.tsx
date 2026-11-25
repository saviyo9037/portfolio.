import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saviyo George | Independent Web & Software Developer",
  description: "Independent full stack developer building business websites, e-commerce and custom software. Available for remote and international projects."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}