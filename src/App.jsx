import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login"; 
import { HeroSection } from "./components/HeroSection";
import SlidingSection from "./components/SlidingSection";
import VerticalSlider from "./components/VerticalSlider";
import ImgSec from "./components/ImgSec";
import InvestmentSection from "./components/InvestmentSec";
import Footer from "./components/Footer";

// Dropdown menu pages
import NordBankAccount from "./menu_pages/NordBankAccount";
import NordBankCard from "./menu_pages/NordBankCard";
import Investments from "./menu_pages/Investments";
import Loans from "./menu_pages/Loans";
import Insurance from "./menu_pages/Insurance";
import OpenFinance from "./menu_pages/OpenFinance";

// New components
import NordBankPlus from "./menu_pages/NordBankPlus";
import NordBankCrypto from "./menu_pages/NordBankCrypto";
import NordShopping from "./menu_pages/NordShopping";
import AccountProtection from "./menu_pages/AccountProtection";
import UltravioletPage from "./menu_pages/UltravioletPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route 
          path="/" 
          element={
            <>
              <Login />
              <HeroSection />
              <SlidingSection />
              <VerticalSlider />
              <ImgSec />
              <InvestmentSection />
              <Footer />
            </>
          } 
        />

        {/* Dropdown menu pages */}
        <Route path="/menu_pages/NordBankAccount" element={<NordBankAccount />} />
        <Route path="/menu_pages/NordBankCard" element={<NordBankCard />} />
        <Route path="/menu_pages/Investments" element={<Investments />} />
        <Route path="/menu_pages/Loans" element={<Loans />} />
        <Route path="/menu_pages/Insurance" element={<Insurance />} />
        <Route path="/menu_pages/OpenFinance" element={<OpenFinance />} />

        {/* Newly added pages */}
        <Route path="/menu_pages/NordBankPlus" element={<NordBankPlus />} />
        <Route path="/menu_pages/NordBankCrypto" element={<NordBankCrypto />} />
        <Route path="/menu_pages/NordShopping" element={<NordShopping />} />
        <Route path="/menu_pages/AccountProtection" element={<AccountProtection />} /> 
        <Route path="/menu_pages/UltravioletPage" element={<UltravioletPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
