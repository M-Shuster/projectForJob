import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Home } from "./Pages/Home";
import CryptoHomepage from "./Pages/crypto-homepage";
import DeadEnd from "./Pages/dead-end";

export const Router = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/dead-end" element={<DeadEnd />} />
        <Route path = "/cryptocurrencies" element={<CryptoHomepage />} />
      </Routes>
    </BrowserRouter>
    )
  }