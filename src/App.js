import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authCheckToken, authFetchMe } from "./store/auth/auth-slice";
import { getToken } from "./utils/auth";

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
const LayoutAdmin = lazy(() => import("./layout/LayoutAdmin"));
const AdCustomerPage = lazy(() => import("./pages/admin/AdCustomerPage"));
const AdDashBoardPage = lazy(() => import("./pages/admin/AdDashBoardPage"));
const AddCustomerPage = lazy(() => import("./pages/admin/AddCustomerPage"));
const UpdateCustomer = lazy(() => import("./pages/admin/UpdateCustomer"));
const AdCategoriesPage = lazy(() => import("./pages/admin/AdCategoriesPage"));
const AddCategoryPage = lazy(() => import("./pages/admin/AddCategoryPage"));
const UpdateCategoryPage = lazy(() =>
  import("./pages/admin/UpdateCategoryPage")
);
const CustomerDetailsPage = lazy(() =>
  import("./pages/admin/CustomerDetailsPage")
);
const ProductsPage = lazy(() => import("./pages/admin/ProductsPage"));
const AddProductPage = lazy(() => import("./pages/admin/AddProductPage"));
const UpdateProduct = lazy(() => import("./pages/admin/UpdateProduct"));
const AdProDetailPage = lazy(() => import("./pages/admin/AdProDetailPage"));
const AdOrderPage = lazy(() => import("./pages/admin/AdOrderPage"));
const AdOrderDetailsPage = lazy(() =>
  import("./pages/admin/AdOrderDetailsPage")
);
const AdLoginPage = lazy(() => import("./pages/admin/AdLoginPage"));
const ShipHomePage = lazy(() => import("./pages/ship/ShipHomePage"));
const UpdateBlogPage = lazy(() => import("./pages/admin/UpdateBlogPage"));
const AddBlogPage = lazy(() => import("./pages/admin/AddBlogPage"));
const AdBlogsPage = lazy(() => import("./pages/admin/AdBlogsPage"));
const AdBlogDetailsPage = lazy(() => import("./pages/admin/AdBlogDetailsPage"));
const AdSettingsPage = lazy(() => import("./pages/admin/AdSettingsPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheckToken());
  }, [dispatch]);

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

        {/* ADMIN */}
        <Route element={<LayoutAdmin></LayoutAdmin>}>
          <Route
            path="/admin"
            element={<AdDashBoardPage></AdDashBoardPage>}
          ></Route>
        </Route>

        <Route
          path="/admin/customers"
          element={<AdCustomerPage></AdCustomerPage>}
        ></Route>
        <Route
          path="/admin/add_customer"
          element={<AddCustomerPage></AddCustomerPage>}
        ></Route>
        <Route
          path="/admin/update_customer"
          element={<UpdateCustomer></UpdateCustomer>}
        ></Route>
        <Route
          path="/admin/categories"
          element={<AdCategoriesPage></AdCategoriesPage>}
        ></Route>
        <Route
          path="/admin/add_category"
          element={<AddCategoryPage></AddCategoryPage>}
        ></Route>
        <Route
          path="/admin/update_category/:slug"
          element={<UpdateCategoryPage></UpdateCategoryPage>}
        ></Route>
        <Route
          path="/admin/customers/:slug"
          element={<CustomerDetailsPage></CustomerDetailsPage>}
        ></Route>
        <Route
          path="/admin/products/product_list"
          element={<ProductsPage></ProductsPage>}
        ></Route>
        <Route
          path="/admin/add_product"
          element={<AddProductPage></AddProductPage>}
        ></Route>
        <Route
          path="/admin/update_product/:slug"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
        <Route
          path="/admin/products/product_list/:slug"
          element={<AdProDetailPage></AdProDetailPage>}
        ></Route>
        <Route
          path="/admin/order"
          element={<AdOrderPage></AdOrderPage>}
        ></Route>
        <Route
          path="/admin/order/:slug"
          element={<AdOrderDetailsPage></AdOrderDetailsPage>}
        ></Route>

        <Route
          path="/admin/login"
          element={<AdLoginPage></AdLoginPage>}
        ></Route>

        <Route
          path="/admin/blog/blog_list"
          element={<AdBlogsPage></AdBlogsPage>}
        ></Route>
        <Route
          path="/admin/blog/blog_list/:slug"
          element={<AdBlogDetailsPage></AdBlogDetailsPage>}
        ></Route>
        <Route
          path="/admin/add_blog"
          element={<AddBlogPage></AddBlogPage>}
        ></Route>
        <Route
          path="/admin/update_blog/:slug"
          element={<UpdateBlogPage></UpdateBlogPage>}
        ></Route>
        <Route
          path="/admin/settings"
          element={<AdSettingsPage></AdSettingsPage>}
        ></Route>

        <Route
          path="/ship/home"
          element={<ShipHomePage></ShipHomePage>}
        ></Route>

        {/* ADMIN */}
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
