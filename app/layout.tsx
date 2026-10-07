import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saviyo — Full Stack Developer",
  description: "Portfolio of Saviyo, Full Stack Developer & Software Solution Builder."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}