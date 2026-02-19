declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        isFullscreen: boolean;
        safeAreaInset: {
          top: number;
          right: number;
          bottom: number;
          left: number;
        };
        ready: () => void;
        expand: () => void;
        requestFullscreen: () => void;
        onEvent: (eventType: string, eventHandler: () => void) => void;
        offEvent: (eventType: string, eventHandler: () => void) => void;
        openTelegramLink: (link: string) => void;
        openLink: (link: string) => void;
      };
    };
  }
}

export function useInitTelegram() {
  const hash =
    "user=%7B%22id%22%3A296769521%2C%22first_name%22%3A%22Dima%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22dimon_frolkov%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FGGQ6QzHVc2xXsxKa_uOriE8DG3p-w0BvCkbciaGp8-Q.svg%22%7D&auth_date=1769773959&signature=LuRJt0yPqmlSg4N6nTOv0XCScppDOnZZU-f51-lLXJkjBeoKnK-j-O6KIl-yWHD_gO-csfWNKvVznfbDao5RAQ&hash=d7d1f504bca6d4761ab83a4704f0ceb9659832105706c39b34e5954eccc49652";

  const tgInitData: string = import.meta.env.DEV
    ? hash
    : window.Telegram.WebApp.initData;

  return { tgInitData };
}
