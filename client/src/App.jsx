import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import CartPage from "./pages/CartPage";

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-50 pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={auth ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={auth ? <Navigate to="/" /> : <SignUp />}
            />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route
              path="/cart"
              element={auth ? <CartPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
