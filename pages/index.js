import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";

import TitleBar from "../components/TitleBar.js";

export default function Index() {
  return (
    <div className={styles.container}>
      <TitleBar />
    </div>
  )
}