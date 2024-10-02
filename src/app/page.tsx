import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="">
        <Header />
        <div className={styles.containerStyle}>
          <section className={styles.content}>
            <Sidebar/>

          </section>
        </div>

      </div>

    </main>
  );
}
