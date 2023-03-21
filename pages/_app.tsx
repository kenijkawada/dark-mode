import "@/styles/globals.css";
import "boxicons/css/boxicons.min.css";

import type { AppProps } from "next/app";

import { ThemeProvider } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){let e,t=window.localStorage.getItem("color-mode");if(null!==t)e=t;else{let l=window.matchMedia("(prefers-color-scheme: dark)");e=l.matches?"dark":"light"}let a=document.documentElement;a.setAttribute("data-theme",e)}();`,
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
