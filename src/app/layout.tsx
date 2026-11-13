import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { ToastProvider } from "@/components/store/ToastProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "China Vibes",
    template: "%s | China Vibes",
  },
  description: "Consumer electronics and accessories for everyday audio, charging, and mobile technology.",
  openGraph: {
    title: "China Vibes",
    description: "Consumer electronics and accessories for everyday audio, charging, and mobile technology.",
    type: "website",
    siteName: "China Vibes",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070708",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${plusJakarta.variable} h-full antialiased light`}>
      <body className="page-bg min-h-full">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
