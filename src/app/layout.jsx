"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import ServiceModal from "./components/modals/ServiceModal";
import useServiceModal from "./utils/hooks/useServiceModal";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  const serviceModal = useServiceModal();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>   
      <Script>
          {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TCB3HZ55');
          `}
        </Script>
      <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-28XVNNPNK8');
                `}
        </Script>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '718269036844982');
              fbq('track', 'PageView');
            `}
        </Script>
      </head>
      <body className={poppins.className}>

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCB3HZ55"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <ServiceModal
          isOpen={serviceModal.isOpen}
          onClose={serviceModal.onClose}
          text={serviceModal.text}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
