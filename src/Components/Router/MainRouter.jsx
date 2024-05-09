import React, { startTransition } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//index route
const Content = React.lazy(() => import("../Content"));
const Paymentmethod = React.lazy(() => import("../UserDashboard/payment"));
const SearchResult = React.lazy(() =>
  import("../UserDashboard/Dashboard/SearchResult")
);
const Detail = React.lazy(() => import("../UserDashboard/Detail"));

// Layout Routes
const UserLayout = React.lazy(() => import("../layout/Userlayout"));
// const AdminLayout = React.lazy(() => import("../layout/Adminlayout"));

const PageNotFound = React.lazy(() => import("../UserDashboard/PageNotFound"));

// User-Dashboard

// Authentication
const Login = React.lazy(() => import("../auth/Login"));
const Signup = React.lazy(() => import("../auth/Signup"));

// User inside Dashboard
// const HotProduct = React.lazy(() => import("../UserDashboard/Dashboard/HotProduct"));

export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User Layout */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Content />} />
        {/* <Route index element={<DashBoard />} /> */}
      </Route>
      {/* Admin Routes */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="hotproduct" element={<HotProduct />} />
        
      </Route> */}
      {/* Auth Routes */}
      {/* <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route> */}
      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/searchresult/:id" element={<SearchResult />} />
      <Route path="/detail" element={<Detail title="Detail" />} />;
      <Route path="/payment" element={<Paymentmethod title="Payment " />} />
    </Route>
  )
);

const App = () => {
  return startTransition(() => <MainRoute />);
};

export default App;
