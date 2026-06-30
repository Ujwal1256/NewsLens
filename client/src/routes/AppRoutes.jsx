import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import History from "../pages/History/History";
import Profile from "../pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/bookmarks" element={<Bookmarks />} />

          <Route path="/history" element={<History />} />

          <Route path="/profile" element={<Profile />} />

        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;