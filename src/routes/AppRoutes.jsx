import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Packages from "../Pages/Packages/Packages";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
// import Booking from "../Pages/Booking/Booking";
import Booking from "../pages/Booking/Booking";
import Payment from "../pages/Payment/Payment";
import MyBookings from "../pages/MyBookings/MyBookings";
import Guides from "../pages/Guides/Guides";
import Reviews from "../pages/Reviews/Reviews";
import Profile from "../pages/Profile/Profile";
import Support from "../pages/Support/Support";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/packages" element={<Packages />} />
<Route path="/packages/:id" element={<PackageDetails />} />
<Route path="/booking" element={<Booking />} />
<Route path="/payment" element={<Payment />} />
<Route path="/my-bookings" element={<MyBookings />} />
<Route path="/guides" element={<Guides />} />
<Route path="/reviews/:id" element={<Reviews />} />
<Route path="/profile" element={<Profile />} />
<Route path="/support" element={<Support />} />
        </Routes>
    );
}

export default AppRoutes;