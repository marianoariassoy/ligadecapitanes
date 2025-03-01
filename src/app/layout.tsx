import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ReactGA from "react-ga4";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Liga de Capitanes",
    template: "%s - Liga de Capitanes",
  },
  description: " ",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ligadecapitanes.com.ar",
    title: "Liga de Capitanes",
    description: " ",
    images: [
      {
        url: "/assets/ligadecapitanes.jpg",
        width: 500,
        height: 500,
        alt: "Liga de Capitanes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ReactGA.initialize("G-G1DBH0K86R");

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#252525" />
      </head>
      <body
        className="bg-background text-foreground min-h-screen flex flex-col"
        style={{ fontFamily: montserrat.style.fontFamily }}
      >
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
        <div className="fixed top-0 left-0 bg-[url('/assets/background.avif')] h-screen w-screen -z-10 opacity-10"></div>
      </body>
    </html>
  );
}
