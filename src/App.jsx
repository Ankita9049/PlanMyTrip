import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";
import Guides from "./Pages/Guides/Guides";
import Booking from "./Pages/Booking/Booking";
import Payment from "./Pages/Payment/Payment";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Support from "./Pages/Support/Support";
import Dashboard from "./Pages/Admin/Dashboard";
import MyBookings from "./Pages/MyBookings/MyBooking";
import Profile from "./Pages/Profile/Profile";
import GuideDetails from "./Pages/GuideDetails/GuideDetails";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:id" element={<PackageDetails />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/guides/:id" element={<GuideDetails />} />

                {/* Protected Routes */}
                <Route
                    path="/booking"
                    element={
                        <ProtectedRoute>
                            <Booking />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/payment"
                    element={
                        <ProtectedRoute>
                            <Payment />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/wishlist"
                    element={
                        <ProtectedRoute>
                            <Wishlist />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/support"
                    element={
                        <ProtectedRoute>
                            <Support />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-bookings"
                    element={
                        <ProtectedRoute>
                            <MyBookings />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;