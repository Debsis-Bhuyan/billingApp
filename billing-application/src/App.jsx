import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Sales from "./pages/Sales";
import Contact from "./pages/ContactForm";
import Dashboard from "./pages/Dashboard";
import StartPage from "./pages/StartPage";
import SideBar from "./components/SideBar";

import Navbar from "./components/NavBar";
import Signin from "./components/Login";
import SignUp from "./components/Register";
import ProfilePage from "./pages/ProfilePage";
import useStore from "./store";

import ItemsPage from "./pages/ItemsPage";
import ExpencePage from "./pages/ExpencePage";
import PurchasePage from "./pages/PurchasePage";
import UtilityPage from "./pages/UtilityPage";
import SettingPage from "./pages/SettingPage";
import CompanyPage from "./pages/CompanyPage";
import HelpPage from "./pages/HelpPage";
import EstimatePage from "./pages/EstimatePage";
import CreateEstimate from "./components/CreateEstimate";

const Layout = () => {
  const { user } = useStore((state) => state);

  const location = useLocation();

  return user?.token ? (
    <div className="w-full h-screen p-0 m-0 ">
      <Navbar />
      <div className="w-full h-full flex border-t ">
        <div className="hidden lg:flex ">
          <SideBar />
        </div>
        <div className="w-full flex-1 px-6 py-4 overflow-y-auto">
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/feedback" element={<Contact />} />
          {/* <Route path="/logout" element={<LogoutPage />} /> */}

          <Route path="/items" element={<ItemsPage />} />
          <Route path="/expence" element={<ExpencePage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/estimate" element={<EstimatePage />} />
          <Route path="/create-estimate" element = {<CreateEstimate/>}/>
          <Route path="/utilitis" element={<UtilityPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Route>
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<Signin />} />
        <Route path="/auth/forget" element={<Signin />} />
        <Route path="/auth" element={<StartPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;
