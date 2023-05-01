import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLink = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Codershouse'a Hoşgeldiniz" icon="logo">
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          mollitia nostrum odio, nulla consequatur ducimus, animi enim error
          eligendi nihil magni voluptate assumenda consequuntur quo aut
          perspiciatis, adipisci officiis commodi.
        </p>

        <div>
          <Button onClick={startRegister} text="Adınızı alın" />
        </div>

        <div className={styles.siginWrapper}>
          <span className={styles.hasInvite}>Üyeliğin var mı ?</span>
          <Link style={signInLink} to="/login">
            Giriş Yap
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
