/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Animation from "./pages/Animation/Animation";
import Components from "./pages/Components/Components";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";

import { fetchProducts } from "./Data/products";

import "./App.css";

const initPage = "home";

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  // const productsRef = useRef([]);
  // const cartsRef = useRef([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => console.log(products), [products]);

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/components" element={<Components />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
