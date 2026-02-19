import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@app/providers/context/ThemeProvider";
import AppRouter from "@app/router/AppRouter";
import { useQuery } from "@tanstack/react-query";
import { registerChart } from "@/shared/lib/chart/registerChart";
import { useInitTelegram } from "@/shared/api/newFetchTelegram/model/hooks/useInitTelegram";
import { newFetchTelegram } from "@/shared/api/newFetchTelegram/newFetchTelegram";
import { useEffect } from "react";
import styles from "./App.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewBlockOrientationUI } from "@/shared/ui/NewBlockOrientationUI";
import { getBlockDevtools } from "@/shared/lib/helpers/getBlockDevtools";

export default function App() {
  const { tgInitData } = useInitTelegram();
  registerChart();

  const url = new URL(window.location.href);
  const referId = Number(url.searchParams.get("refer_id") ?? 0);

  const telegramQueryInit = useQuery({
    queryFn: () => newFetchTelegram(tgInitData, referId),
    queryKey: ["telegram"],
    enabled: !!tgInitData,
    retry: false,
  });

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    // tg.ready();
    // tg.expand();
    // tg.requestFullscreen();

    const root = document.documentElement;

    const updateStyles = () => {
      const safeArea = tg.safeAreaInset;
      root.style.setProperty("--app-padding-bottom", `${safeArea.bottom}px`);

      if (tg.isFullscreen) {
        const isFullscrinSystemTop = safeArea.top;

        root.style.setProperty(
          "--app-padding-top",
          `${isFullscrinSystemTop ? isFullscrinSystemTop + 40 : 90}px`,
        );
      } else {
        root.style.setProperty("--app-padding-top", "0px");
      }
    };

    updateStyles();

    tg.onEvent("fullscreenChanged", updateStyles);
    tg.onEvent("safeAreaChanged", updateStyles);

    return () => {
      tg.offEvent("fullscreenChanged", updateStyles);
      tg.offEvent("safeAreaChanged", updateStyles);
    };
  }, []);

  useEffect(() => {
    getBlockDevtools();
  }, []);

  return (
    <>
      <NewBlockOrientationUI />
      {telegramQueryInit.isError ? (
        <div className={styles.app}>
          <div className={styles.app__error}>
            <span className={styles.app__text}>
              Error authorization. Please try again.
            </span>
            <NewButtonUi
              type="button"
              size="textXS"
              variant="textXS"
              color="blue"
              onClickButton={() => telegramQueryInit.refetch()}
            >
              Click here
            </NewButtonUi>
          </div>
        </div>
      ) : telegramQueryInit.isLoading ? (
        <div className={styles.app__loading}>
          <span className={styles.app__text}>Loading..</span>
        </div>
      ) : (
        <BrowserRouter>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </BrowserRouter>
      )}
    </>
  );
}
