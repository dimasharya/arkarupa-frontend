import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { Toaster } from "react-hot-toast";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/authentication/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />}></Route>
          {/* If you have an index page, you can remothis Redirect */}
          {/* <Redirect exact from="/" to="/login" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
