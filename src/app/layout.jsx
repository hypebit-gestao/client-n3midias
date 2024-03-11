"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import ServiceModal from "./components/modals/ServiceModal";
import useServiceModal from "./utils/hooks/useServiceModal";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  const serviceModal = useServiceModal();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ServiceModal
          isOpen={serviceModal.isOpen}
          onClose={serviceModal.onClose}
          text={serviceModal.text}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
