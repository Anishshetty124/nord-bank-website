import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Nord bank" },
  { label: "Ultraviolet" },
  { label: "Security" },
  { label: "Companies" },
];

const getExtraLinks = (label) => {
  switch (label) {
    case "Nord bank":
      return (
        <ul className="space-y-2">
          <li><Link to="/menu_pages/NordBankplus">NordBankPlus</Link></li>
          <li><Link to="/menu_pages/NordBankCrypto">NordBankCrypto</Link></li>
          <li>NordPay</li>
          <li>NordCel</li>
          <li><Link to="/menu_pages/NordShopping">Nord Shopping</Link></li>
          <li>Income Tax</li>
        </ul>
      );
    case "Ultraviolet":
      return (
        <ul className="space-y-2">
          <li>Cashback Benefits</li>
          <li>Premium Lounge Access</li>
          <li>Travel Insurance</li>
          <li>Concierge Services</li>
          <li>Wealth Growth</li>
        </ul>
      );
    case "Security":
      return (
        <ul className="space-y-2">
          <li>2FA Setup</li>
          <li>Suspicious Activity Alerts</li>
          <li>Biometric Access</li>
          <li>Cybersecurity Center</li>
          <li>Fraud Claims</li>
        </ul>
      );
    case "Companies":
      return (
        <ul className="space-y-2">
          <li>Business Tools</li>
          <li>Company Registration</li>
          <li>Expense Reports</li>
          <li>Vendor Management</li>
          <li>Business Tax Filing</li>
        </ul>
      );
    default:
      return null;
  }
};

export function Login() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeoutActive, setTimeoutActive] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setTimeoutActive(false);
  };

  const handleMouseLeave = () => {
    setTimeoutActive(true);
  };

  useEffect(() => {
    if (timeoutActive) {
      const timer = setTimeout(() => {
        if (!dropdownHovered) {
          setHoveredItem(null);
        }
        setTimeoutActive(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    
  }, [timeoutActive, dropdownHovered]);

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-9 bg-black rounded-full">
            <a href="/">
              <img
                src="logo.jpg"
                alt="Nubank Logo"
                className="w-full h-full object-cover rounded-md"
              />
            </a>
          </div>
        </div>
          
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-black text-base font-medium relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer flex items-center gap-1">
                {item.label} <span className="text-sm">▾</span>
              </span>

              {hoveredItem === item.label && (
                <div
                  className="absolute left-0 top-10 w-full md:w-[700px] bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 z-50"
                  onMouseEnter={() => setDropdownHovered(true)}
                  onMouseLeave={() => {
                    setDropdownHovered(false);
                    setTimeoutActive(true);
                  }}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/3">
                    <img
                      src="logo.jpg"
                      alt={item.label}
                      className="rounded-lg w-full"
                    />
                    <h3 className="mt-2 font-semibold text-black">{item.label}</h3>
                    <p className="text-sm text-gray-600">
                      Free digital account, international card, and much more.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-amber-700 font-medium mt-1 inline-block"
                    >
                      Get to know {item.label} →
                    </a>
                  </div>

                  {/* Links */}
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 text-sm text-black">
                    <ul className="space-y-2">
                      {item.label === "Nord bank" ? (
                        <>
                          <li><Link to="/menu_pages/NordBankAccount">Nord Bank Account</Link></li>
                          <li><Link to="/menu_pages/NordBankCard">Nord Bank Card</Link></li>
                          <li><Link to="/menu_pages/Investments">Investments</Link></li>
                          <li><Link to="/menu_pages/Loans">Loans</Link></li>
                          <li><Link to="/menu_pages/Insurance">Insurance</Link></li>
                          <li><Link to="/menu_pages/OpenFinance">Open Finance</Link></li>
                        </>
                      ) : item.label === "Ultraviolet" ? (
                        <>
                          <li><Link to="/menu_pages/UltravioletPage">What is Ultraviolet?</Link></li>
                          <li>Exclusive Benefits</li>
                          <li>Wealth Management</li>
                          <li>Priority Support</li>
                          <li>Black Card</li>
                          <li>Pricing & Access</li>
                        </>
                      ) : item.label === "Security" ? (
                        <>
                          <li><Link to="/menu_pages/AccountProtection">Account Protection</Link></li>
                          <li>Card Safety</li>
                          <li>Fraud Prevention</li>
                          <li>Data Privacy</li>
                          <li>Secure Login</li>
                          <li>Emergency Help</li>
                        </>
                      ) : item.label === "Companies" ? (
                        <>
                          <li>Business Account</li>
                          <li>Payments</li>
                          <li>Employee Management</li>
                          <li>Business Loans</li>
                          <li>Billing Tools</li>
                          <li>Tax Services</li>
                        </>
                      ) : null}
                    </ul>
                    {getExtraLinks(item.label)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-amber-100 text-black px-4 py-2 rounded-full text-sm">
            Login Companies
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            I want to be Ultraviolet
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 text-black">
            {navItems.map((item) => (
              <div key={item.label} className="mb-2">
                <details className="group">
                  <summary className="cursor-pointer font-medium flex justify-between items-center">
                    {item.label}
                    <span className="text-lg">▾</span>
                  </summary>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    {item.label === "Nord bank" ? (
                      <>
                        <li><Link to="/menu_pages/NordBankAccount">Nord Bank Account</Link></li>
                        <li><Link to="/menu_pages/NordBankCard">Nord Bank Card</Link></li>
                        <li><Link to="/menu_pages/Investments">Investments</Link></li>
                        <li><Link to="/menu_pages/Loans">Loans</Link></li>
                        <li><Link to="/menu_pages/Insurance">Insurance</Link></li>
                        <li><Link to="/menu_pages/OpenFinance">Open Finance</Link></li>
                      </>
                    ) : item.label === "Ultraviolet" ? (
                      <>
                        <li><Link to="/menu_pages/UltravioletPage">What is Ultraviolet?</Link></li>
                        <li>Exclusive Benefits</li>
                        <li>Wealth Management</li>
                        <li>Priority Support</li>
                        <li>Black Card</li>
                        <li>Pricing & Access</li>
                      </>
                    ) : item.label === "Security" ? (
                      <>
                        <li><Link to="/menu_pages/AccountProtection">Account Protection</Link></li>
                        <li>Card Safety</li>
                        <li>Fraud Prevention</li>
                        <li>Data Privacy</li>
                        <li>Secure Login</li>
                        <li>Emergency Help</li>
                      </>
                    ) : item.label === "Companies" ? (
                      <>
                        <li>Business Account</li>
                        <li>Payments</li>
                        <li>Employee Management</li>
                        <li>Business Loans</li>
                        <li>Billing Tools</li>
                        <li>Tax Services</li>
                      </>
                    ) : null}
                    {getExtraLinks(item.label)?.props.children}
                  </ul>
                </details>
              </div>
            ))}
            <button className="bg-amber-100 text-black px-4 py-2 rounded-full text-sm mt-2">
              Login Companies
            </button>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm mt-2">
              I want to be Ultraviolet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
