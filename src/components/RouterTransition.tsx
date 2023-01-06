import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  startNavigationProgress,
  setNavigationProgress,
  NavigationProgress,
} from "@mantine/nprogress";
// import { closeAllModals } from "@mantine/modals";
// import { cleanNotifications } from "@mantine/notifications";

export default function RouterTransition() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // closeAllModals();
    // cleanNotifications();

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  useEffect(() => {
    if (loading) {
      startNavigationProgress();
    } else {
      setNavigationProgress(100);
    }
  }, [loading]);

  // return loading ? <NavigationProgress autoReset /> : <div />;
  return <NavigationProgress autoReset zIndex={10000} />;
}
