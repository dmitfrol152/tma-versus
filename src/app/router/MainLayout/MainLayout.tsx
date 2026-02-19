import { Footer } from "@/widgets/Footer";
import { NewHeader } from "@/widgets/NewHeader";
import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";
import { useNewUserInit } from "@/pages/NewHomePage/model/hooks/useNewUserInit";
import { useNewUserBalanseInit } from "@/pages/NewHomePage/model/hooks/useNewUserBalanseInit";
import { useNewActiveTeamInit } from "@/pages/NewHomePage/model/hooks/useNewActiveTeamInit";
import { useFetchHomePage } from "@/shared/api/newFetchHomePage/model/hooks/useFetchHomePage";
import { useNewPrizeInit } from "@/pages/NewHomePage/model/hooks/useNewPrizeInit";
import { NewScrollToUp } from "@/shared/ui/NewScrollToUp/NewScrollToUp";

export const MainLayout = () => {
  const { data: dataHomePage, isSuccess: isSuccessHomePage } =
    useFetchHomePage();

  // init user
  useNewUserInit();

  // init user_balanse
  useNewUserBalanseInit(
    dataHomePage ? dataHomePage.user_balance : null,
    isSuccessHomePage,
  );

  // init prize
  useNewPrizeInit(dataHomePage ? dataHomePage.season : null, isSuccessHomePage);

  // init active_team
  useNewActiveTeamInit(
    dataHomePage ? dataHomePage.user_balance : null,
    isSuccessHomePage,
  );

  return (
    <div className={styles.mainLayout}>
      <NewScrollToUp />
      <NewHeader />
      <main>
        <div className={styles.mainLayout__main}>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
