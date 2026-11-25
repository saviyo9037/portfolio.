import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saviyo George | Freelance Web Developer Kerala",
  description: "Custom business websites, e-commerce and ERP, POS and CRM software development in Kerala. Discuss your project with Saviyo George."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}