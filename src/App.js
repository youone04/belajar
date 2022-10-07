
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import { store } from "../src/redux/store";
import { Provider } from 'react-redux';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id/:nama/:nim/:prodi" element={<Edit />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
