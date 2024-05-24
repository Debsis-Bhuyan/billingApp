import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Sales from "./pages/Sales";
import Contact from "./pages/ContactForm";
import Dashboard from "./pages/Dashboard";
import StartPage from "./pages/StartPage";
import SideBar from "./components/SideBar";

import Navbar from "./components/NavBar";
import Signin from "./components/Login";
import SignUp from "./components/Register";
import ProfilePage from "./pages/ProfilePage";

import ItemsPage from "./pages/ItemsPage";
import ExpencePage from "./pages/ExpencePage";
import PurchasePage from "./pages/PurchasePage";
import UtilityPage from "./pages/UtilityPage";
import SettingPage from "./pages/SettingPage";
import CompanyPage from "./pages/CompanyPage";
import HelpPage from "./pages/HelpPage";
import EstimatePage from "./pages/EstimatePage";
import CreateEstimate from "./components/CreateEstimate";
import PurchaseOrderPage from "./pages/PuchaseOrderPage";
import CreatePurchaseOrder from "./components/CreatePurchaseOrder";
import CreateExpence from "./components/AddExpence";
import CreateExpencePage from "./pages/CreateExpencePage";
import EditProfile from "./components/EditProfile";
import ViewEstimate from "./components/ViewEstimate";
import SalesOrder from "./components/CreateSaleOrder";
import SalesTransaction from "./pages/SalesTransaction";
import CreatePurchaseBills from "./pages/CreatePurchaseBills";
import CreateSalesBills from "./pages/CreateSalesBills";

const Layout = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  return user?.user?.token ? (
    <div className="w-full h-screen p-0 m-0 ">
      <Navbar />
      <div className="w-full h-full flex border-t ">
        <div className="hidden lg:flex ">
          <SideBar />
        </div>
        <div className="w-full flex-1  pt-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};
function App() {
  return (
    <div className="w-full p-0 m-0 min-h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/sales" element={<Sales />} />
          <Route path="/sales-data" element={<SalesTransaction />} />
          <Route path="/create-sales" element={<SalesOrder />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/feedback" element={<Contact />} />

          <Route path="/items" element={<ItemsPage />} />
          <Route path="/expence" element={<ExpencePage />} />
          <Route path="/create-expence" element={<CreateExpencePage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/purchase-order" element={<PurchaseOrderPage />} />
          <Route path="/estimate" element={<EstimatePage />} />
          <Route path="/create-estimate" element={<CreateEstimate />} />
          <Route path="/view-estimate" element={<ViewEstimate />} />
          <Route path="/create-purchase" element={<CreatePurchaseOrder />} />
          <Route path="/utilitis" element={<UtilityPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Route>
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<Signin />} />
        <Route path="/auth/forget" element={<Signin />} />
        <Route path="/auth" element={<StartPage />} />
        <Route path="/create-sales-bills" element={<CreateSalesBills />} />
        <Route
          path="/create-purchase-bills"
          element={<CreatePurchaseBills />}
        />
      </Routes>
    </div>
  );
}

export default App;
