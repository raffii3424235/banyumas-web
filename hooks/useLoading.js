import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const date = new Date();
  const hours = date.getHours();

  const makeGreeting = () => {
    if (hours < 8) {
      setGreeting("Pagi");
    } else if (hours < 14) {
      setGreeting("Siang");
    } else if (hours < 19) {
      setGreeting("Sore");
    } else {
      setGreeting("Malam");
    }
  };

  useEffect(() => {
    // const handleStart = (url) => url !== router.asPath && setLoading(true);
    // const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));

    makeGreeting();

    return () => {
      router.events.on("routeChangeStart", () => setLoading(true));
      router.events.on("routeChangeComplete", () => setLoading(false));
    };
  });

  return { loading: loading, greet: greeting };
}

export default useLoading;
