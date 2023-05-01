import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStlye = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
    display: 'flex',
    alignItems: "center", 
  };

  const logoText = {
    marginLeft: "10px",
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandStlye}>
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
