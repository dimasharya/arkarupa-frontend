import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "../routes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const ProjectDashboard = lazy(() =>
  import("../pages/projectdashboard/ProjectDasborad")
);
const ProjectBudgeting = lazy(() => import("../pages/projectbudgeting"));
const Schedule = lazy(() => import("../pages/schedule/Schedule"));
const UserManagement = lazy(() => import("../pages/user/UserManagement"));
const PermitToWork = lazy(() => import("../pages/permittowork/PermitToWork"));
const Project = lazy(() => import("../pages/projectdashboard/Project"));

const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              <Route path="project" exact element={<ProjectDashboard />}/>
              <Route path="project/:projectId" element={<Project />} />
              <Route path="projectbudgeting" element={<ProjectBudgeting />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="usermanagement" element={<UserManagement />} />
              <Route path="permittowork" element={<PermitToWork />} />
              <Route />
            </Routes>
          </Suspense>

          {/* <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              })}
              <Route component={Page404} />
            </Switch> */}
        </Main>
      </div>
    </div>
  );
}

export default Layout;
