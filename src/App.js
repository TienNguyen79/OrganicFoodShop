import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authCheckToken } from "./store/auth/auth-slice";

const LayoutPrimary = lazy(() => import("./layout/LayoutPrimary"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LayoutDetail = lazy(() => import("./layout/LayoutDetail"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const ShopPage = lazy(() => import("./pages/ShopPage"));

function App() {
  const { user, accessToken } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: LoginPage.js:32 ~ LoginPage ~ user:", user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheckToken());
  }, []);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutPrimary></LayoutPrimary>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>

        <Route element={<LayoutDetail></LayoutDetail>}>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>

          <Route path="/shop/:slug" element={<ShopPage></ShopPage>}></Route>
        </Route>

        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/forgot-pass"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/reset-pass"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route
          path="/verify-email"
          element={<VerifyEmail></VerifyEmail>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
