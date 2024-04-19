import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Reports from "./reports";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <h1>This is the home page</h1>
      <Reports />
    </Fragment>
  );
}
