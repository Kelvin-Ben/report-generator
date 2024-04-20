import { Inter } from "next/font/google";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="alert">
      <h1>This is the Home page</h1>
    </div>
  );
}
