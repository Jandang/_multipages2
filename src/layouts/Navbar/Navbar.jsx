/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar({ tab, setTab, products, carts, setToken }) {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button
          className={
            "btn " +
            (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
        >
          HOME
        </button>
      </Link>
      <Link to="/calculator">
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
        >
          CALCULATOR
        </button>
      </Link>
      <Link to="/Animation">
        <button
          className={
            "btn " +
            (tab === "animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("animation")}
        >
          ANIMATION
        </button>
      </Link>
      <Link to="/components">
        <button
          className={
            "btn " +
            (tab === "components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("components")}
        >
          COMPONENTS
        </button>
      </Link>
      <Link to="/todo">
        <button
          className={
            "btn " +
            (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          TODO
        </button>
      </Link>
      <Link to="/products">
        <button
          className={
            "btn " +
            (tab === "products" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("products")}
        >
          PRODUCTS ({products.length})
        </button>
      </Link>
      <Link to="/carts">
        <button
          className={
            "position-relative btn " +
            (tab === "carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("carts")}
        >
          CARTS
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button
        className="btn btn-outline-danger"
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          setToken("");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Navbar;
