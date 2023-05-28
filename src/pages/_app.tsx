import "@/styles/globals.css";
import "nprogress/nprogress.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";

import nProgress from "nprogress";

import { useEffect } from "react";

import useNProgressColor from "@/hooks/useNProgressColor";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  };

  const styles = {
    global: {
      body: {
        color: "#333",
        backgroundColor: "#fff8de",
        padding: 0,
        margin: 0,
        fontFamily: "",
      },
    },
  };
  const theme = extendTheme({ breakpoints, styles });
  useEffect(() => {
    router.events.on("routeChangeStart", () => nProgress.start());
    router.events.on("routeChangeComplete", () => nProgress.done());
    router.events.on("routeChangeError", () => nProgress.done());
  }, [router.events]);
  // 修改nprogress color
  useNProgressColor("#99A98F");
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
