import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import RoleBased from "./RoleBased"
import { useSelector } from "react-redux";
import { selectUser } from "../reducer/AuthSlice";
import { routeADM, routePM, routeQS, routeSE, routeSM, routeSPV } from "../routes/sidebar";

const ProjectDashboard = lazy(() =>
  import("../pages/projectdashboard/ProjectDasborad")
);
const Greeting = lazy(() => import("../pages/Greeting"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const ProjectBudgeting = lazy(() => import("../pages/projectbudgeting"));
// const Schedule = lazy(() => import("../pages/schedule/Schedule"));
const UserManagement = lazy(() => import("../pages/user/UserManagement"));
const PermitToWork = lazy(() => import("../pages/permittowork/PermitToWork"));
const ProjectPM = lazy(() => import("../pages/projectdashboard/ProjectPM"));
const ProjectSPV = lazy(() => import("../pages/projectdashboard/ProjectSPV"));
const ProjectSM = lazy(() => import("../pages/projectdashboard/ProjectSM"));
const ProjectQS = lazy(() => import("../pages/projectdashboard/ProjectQS"));

// const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  const user = useSelector(selectUser);
  let routes = [];

  if (user.role === "pm") {
    routes = routePM;
  }else if (user.role === "spv") {
    routes = routeSPV
  }else if (user.role === "sm") {
    routes = routeSM
  }else if (user.role === "se") {
    routes = routeSE
  }else if (user.role === "qs") {
    routes = routeQS
  }else if (user.role === "adm") {
    routes = routeADM
  }

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar route={routes} />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              <Route path="" exact element={<Greeting />} />
              <Route path="profile" exact element={<UserProfile />} />
              {/* route pm */}
              <Route element={<RoleBased allowedRole={"pm"} />}>
                <Route path="pm/project" exact element={<ProjectDashboard />} />
                <Route path="pm/project/:projectId" element={<ProjectPM />} />
              </Route>
              <Route element={<RoleBased allowedRole={"spv"} />}>
                <Route path="spv/project" exact element={<ProjectDashboard />} />
                <Route path="spv/project/:projectId" element={<ProjectSPV />} />
                <Route path="spv/permittowork" element={<PermitToWork />} />
              </Route>
              <Route element={<RoleBased allowedRole={"se"} />}>
                <Route path="se/projectbudgeting" exact element={<ProjectBudgeting />} />
                <Route path="se/projectbudgeting/:projectId" element={<ProjectBudgeting />} />
                {/* <Route path="se/schedule" element={<Schedule />} /> */}
              </Route>
              <Route element={<RoleBased allowedRole={"sm"} />}>
                <Route path="sm/project" exact element={<ProjectDashboard />} />
                <Route path="sm/project/:projectId" element={<ProjectSM />} />
                <Route path="sm/permittowork" element={<PermitToWork />} />
              </Route>
              <Route element={<RoleBased allowedRole={"qs"} />}>
                <Route path="qs/project" exact element={<ProjectDashboard />} />
                <Route path="qs/project/:projectId" element={<ProjectQS />} />
              </Route>
              <Route element={<RoleBased allowedRole={"adm"} />}>
                <Route path="adm/usermanagement" element={<UserManagement />} />
              </Route>
              <Route />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
