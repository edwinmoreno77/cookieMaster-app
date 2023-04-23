import { useEffect, useState } from "react";
import type { AppContext, AppProps } from "next/app";
import { customTheme, darkTheme, lightTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme = "light" }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const currentTheme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : cookieTheme === "custom"
        ? customTheme
        : lightTheme;
    setCurrentTheme(currentTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: "light" };
//   const validTheme = ["light", "dark", "custom"];

//   return {
//     theme: validTheme.includes(theme) ? theme : "dark",
//   };
// };
