import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const nav =
    "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200";
  const navActive =
    "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-800 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 ";
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <NavLink
        className="ml-6 text-lg text-center font-bold text-gray-800 dark:text-gray-200"
        to="/app"
      >
        Arkarupa
      </NavLink>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact="true"
                to={route.path}
                className={(navData) => (navData.isActive ? navActive : nav)}
              >
                <Routes>
                  <Route path={route.path} exact={route.exact}></Route>
                </Routes>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <Outlet />
      {/* <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  );
}

export default SidebarContent;
