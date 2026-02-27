import NewOnBoarding from "@/pages/NewOnBoarding";
import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";
import { MainLayout } from "@/app/router/MainLayout/MainLayout";
import { useFetchHomePage } from "@/shared/api/newFetchHomePage/model/hooks/useFetchHomePage";
import styles from "./AppRouter.module.scss";

const NewHomePage = lazy(() => import("@/pages/NewHomePage"));
const NewProfilePage = lazy(() => import("@/pages/NewProfilePage"));
const NewOfficePage = lazy(() => import("@/pages/NewOfficePage"));
const NewStorePage = lazy(() => import("@/pages/NewStorePage"));
const NewTeamPage = lazy(() => import("@/pages/NewTeamPage"));
const CommunityPage = lazy(() => import("@/pages/Community"));
const UserDetailPage = lazy(() => import("@/pages/UserDetail"));

export default function AppRouter() {
  const { data: dataHomePage, isLoading: isLoadingHomePage } =
    useFetchHomePage();

  if (isLoadingHomePage) {
    return (
      <div className={styles.appRouter__loading}>
        <span className={styles.appRouter__text}>Loading..</span>
      </div>
    );
  }

  const hasTeam = dataHomePage?.user_balance?.team;

  return (
    <Routes>
      <Route
        path="/"
        element={hasTeam ? <Navigate to="/home" replace /> : <NewOnBoarding />}
      />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<NewHomePage />} />
        <Route path="/office" element={<NewOfficePage />} />
        <Route path="/store" element={<NewStorePage />} />
        <Route path="/team" element={<NewTeamPage />} />
        <Route path="/profile" element={<NewProfilePage />} />
        // TODO
        <Route path="/community" element={<CommunityPage />} />
        // TODO: отдельная ручка на пользака
        <Route
          path="/community/:layerNumber/:nickname"
          element={<UserDetailPage />}
        />
      </Route>
    </Routes>
  );
}
