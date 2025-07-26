import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// IBM Plex Mono font configuration
const ibmPlexMono = localFont({
  src: [
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBM_Plex_Mono/IBMPlexMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap", // Improves font loading performance
});

export const metadata: Metadata = {
  title: "Remy Chiesa - Portfolio",
  description:
    "Portfolio website showcasing design work, case studies, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} font-mono antialiased m-auto transition-all duration-300 bg-white dark:bg-[#080808]`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
          <Toaster theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
