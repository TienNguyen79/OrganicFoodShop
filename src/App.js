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
const FeautureProPage = lazy(() => import("./pages/FeautureProPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const TopProductPage = lazy(() => import("./pages/TopProductPage"));
const WishListPage = lazy(() => import("./pages/WishListPage"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LayoutUser = lazy(() => import("./layout/LayoutUser"));
const OrderHistoryPage = lazy(() => import("./pages/OrderHistoryPage"));
const UserDashBoardPage = lazy(() => import("./pages/UserDashBoardPage"));
const OrderDetailsPage = lazy(() => import("./pages/OrderDetailsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

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
          <Route
            path="/productDetails/:slug"
            element={<ProductDetailPage></ProductDetailPage>}
          ></Route>
          <Route
            path="/featureProducts"
            element={<FeautureProPage></FeautureProPage>}
          ></Route>
          <Route
            path="/topProducts"
            element={<TopProductPage></TopProductPage>}
          ></Route>
          <Route
            path="/shoppingCart"
            element={<ShoppingCartPage></ShoppingCartPage>}
          ></Route>
          <Route
            path="/wishList"
            element={<WishListPage></WishListPage>}
          ></Route>
          <Route
            path="/checkout"
            element={<CheckOutPage></CheckOutPage>}
          ></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogDetailPage></BlogDetailPage>}
          ></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        </Route>

        <Route element={<LayoutUser></LayoutUser>}>
          <Route
            path="/user_dashboard"
            element={<UserDashBoardPage></UserDashBoardPage>}
          ></Route>
          <Route
            path="/order_history"
            element={<OrderHistoryPage></OrderHistoryPage>}
          ></Route>
          <Route
            path="/order_details/:slug"
            element={<OrderDetailsPage></OrderDetailsPage>}
          ></Route>
          <Route
            path="/settings"
            element={<SettingsPage></SettingsPage>}
          ></Route>
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
