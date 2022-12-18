import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  startNavigationProgress,
  setNavigationProgress,
  NavigationProgress,
} from "@mantine/nprogress";
import { closeAllModals } from "@mantine/modals";
import { cleanNotifications } from "@mantine/notifications";

export default function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && startNavigationProgress();
    const handleComplete = () => {
      setNavigationProgress(100);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    closeAllModals();
    cleanNotifications();

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.pathname]);

  return <NavigationProgress />;
}
