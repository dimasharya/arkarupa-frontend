import React, { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./reducer/AuthSlice";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import CustomStyle from "./assets/css/Customstyle";

const RequiredAuth = lazy(() => import("./containers/RequiredAuth"));
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/authentication/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

const token = localStorage.getItem("theArkarupaSecureAuth");
if (token) {
  setAuthToken(token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <SidebarProvider>
          <Suspense fallback={<ThemedSuspense />}>
            <Windmill theme={CustomStyle}>
              <Toaster position="top-right" />
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/create-account" element={<CreateAccount />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  {/* Place new routes over this */}
                  <Route element={<RequiredAuth />}>
                    <Route path="/app/*" element={<Layout />} />
                  </Route>
                  {/* If you have an index page, you can remothis Redirect */}
                  {/* <Redirect exact from="/" to="/login" /> */}
                </Routes>
              </BrowserRouter>
            </Windmill>
          </Suspense>
        </SidebarProvider>
        ,
      </Provider>
    </>
  );
}

export default App;
