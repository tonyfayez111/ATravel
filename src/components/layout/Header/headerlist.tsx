import styles from "./header.module.css";

import Link from "next/link";
export default function HeaderList() {
  return (
    <div className="flex w-full gap-[40px] md:justify-between md:flex-row flex-col  ">
      <li className={styles.list}>
        <Link href="#home">Home</Link>
      </li>
      <li className={styles.list}>
        <Link href="#tours">Tours</Link>
      </li>
      <li className={styles.list}>
        <Link href="#reviews">Reviews</Link>
      </li>
      <li className={styles.list}>
        <Link href="#about">About Us</Link>
      </li>
      <li className={styles.list}>
        <Link href="#contact">Contact Us</Link>
      </li>
      <li className={styles.list}>
        <Link href="#faqs">FAQs</Link>
      </li>
    </div>
  );
}
