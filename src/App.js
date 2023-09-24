import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LayoutPrimary = lazy(() => import("./layout/LayoutPrimary"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LayoutDetail = lazy(() => import("./layout/LayoutDetail"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutPrimary></LayoutPrimary>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>

        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
