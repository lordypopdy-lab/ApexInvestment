import Index from "./pages/Index";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./admin/pages/Admin";
import Register from "./pages/Register";
import Deposite from "./pages/Deposite";
import Withdraw from "./pages/Withdraw";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import BuyAssets from "./pages/BuyAssets";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminContact from "./admin/pages/AdminContact";
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = 'https://tradevisterserver.vercel.app';
axios.defaults.withCredentials = true;

//http://localhost:8080 

function App() {

  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 4000 }} />
      <Router>
        <Routes>
          <Route index="/" element={<Index />} />
          <Route path="/buy" element={<BuyAssets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/deposite" element={<Deposite />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/contact" element={<AdminContact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
