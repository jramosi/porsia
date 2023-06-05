"use client";
import { Tabs } from "antd";
import styles from "./page.module.css";
import Login from "@/components/Web/FormLogin/Login";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Inicia Sesion`,
    children: <Login />,
  },
  {
    key: "2",
    label: `Crea un Usuario`,
    children: `Content of Tab Pane 2`,
  },
];
const Auth = () => (
  <div className={styles.tab}>
    <h1>Formulario</h1>
    <div className={styles.form}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  </div>
);
export default Auth;
