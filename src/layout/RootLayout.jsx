// src/components/RootLayout.jsx
import { Outlet } from "react-router-dom";

import Navbar from "./../components/Navbar";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 ">
      <Navbar />
      <main className="relative z-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
