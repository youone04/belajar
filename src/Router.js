import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import Belajar from "./pages/Belajar";
import SimpleBottomNavigation from "./components/NavigationComp";
import CounterRedux from './pages/CounterRedux';

function Router() {
  return (
    <BrowserRouter>
    <SimpleBottomNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/belajar" element={<Belajar />} />
        <Route path="/counter" element={<CounterRedux />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router