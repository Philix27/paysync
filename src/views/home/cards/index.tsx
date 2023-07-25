import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";

export default function CardsView() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        {cardItem({
          img: "./cards/c1.png",
          title: "Tokens",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          img: "./cards/c3.png",
          title: "Security",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          img: "./cards/c2.png",
          title: "Funds",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
      </div>
    </section>
  );
}
function cardItem(data: {
  img: string;
  title: string;
  p: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.img} alt="hero_img" />
      </div>
      <div className={styles.text_content}>
        <h3>{data.title}</h3>
        <p>{data.p}</p>
      </div>
    </div>
  );
}
