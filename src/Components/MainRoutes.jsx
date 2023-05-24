import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Food } from "../pages/Food";
import SinglecardFood from "./Singlecard";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { Cart } from "../pages/Cart";
import MyProfile from "./User/Profile";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/food" element={<Food />} />
      <Route path="/food/:id" element={<SinglecardFood />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/myprofile" element={<MyProfile />}></Route>
    </Routes>
  );
}

export default MainRoutes;
