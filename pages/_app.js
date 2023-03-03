import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import useLoading from "@/hooks/useLoading";

export default function App({ Component, pageProps }) {
  const loading = useLoading().loading;
  const greet = useLoading().greet;
  console.log(loading);
  const visibleStyle = {
    display: "",
    transition: "display 3s",
  };
  const inVisibleStyle = {
    display: "none",
    transition: "display 3s",
  };
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
