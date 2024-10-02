import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="">
        <Header />
        <div className={styles.containerStyle}>
          <section className={styles.content}>
            

          </section>
        </div>

      </div>

    </main>
  );
}
