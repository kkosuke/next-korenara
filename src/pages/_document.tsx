import { gtmId } from "@/constants/utils/gtm";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
          }}
        />
        <Main />
        <NextScript />
        <script src="https://unpkg.com/alpinejs" defer></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
      </body>
    </Html>
  );
}
