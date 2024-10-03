import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";
import Categories from "../pages/category/Categories";
import Banner from "../pages/Banner/Banner";
import FeatureServices from "../pages/featureservice/FeatureServices";
import Services from "../pages/services/Services";
import Clients from "../pages/clients/Clients";
import Principles from "../pages/principles/Principles";
import Customers from "../pages/customers/Customers";
const AppRoutes = () => {
  const user = localStorage.getItem("email");

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/products/edit-product/:id" element={<EditProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/feature-services" element={<FeatureServices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
