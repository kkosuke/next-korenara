import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import GoogleTagManager, { GtmId } from "@/component/GoogleTagManager";
import { gtmId } from "@/constants/utils/gtm";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <GoogleTagManager gtmId={gtmId as GtmId} />
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}
