import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useNavigate();
  const onLogout = () => {
    authService?.logout();
  };
  useEffect(() => {
    authService?.onAuthChange((user) => {
      //? 연산자 통해서 대충 해결은 했는데 모르겠음
      if (!user) {
        history("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
