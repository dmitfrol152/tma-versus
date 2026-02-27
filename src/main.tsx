import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@shared/styles/styles.scss";
import App from "@/app/App.tsx";
import store from "@app/providers/store";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/lib/store/queryClient";
// import { TonConnectUIProvider } from "@tonconnect/ui-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <TonConnectUIProvider manifestUrl="https://versuschain.com/tonconnect-manifest.json"> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </TonConnectUIProvider> */}
    </QueryClientProvider>
  </StrictMode>,
);
