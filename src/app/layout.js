
import ConditionalNavbar from "@/components/conditionalNavbar";
import localFont from "next/font/local";
import ClientProvider from "./clientProvider";
import "./globals.css";
import Footer from '../components/footer'
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EEVEE Gold",
  description: "Creating The Future With EEVEE Savings.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    appleTouchIcon: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body
        className={`bg-[--black]`}
      >
        <ClientProvider>{children}</ClientProvider>

      </body>
    </html>
  );
}
