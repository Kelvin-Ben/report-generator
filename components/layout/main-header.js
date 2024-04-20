import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Home</Link>
      </div>
      <nav className={classes.logo}>
        <ul>
          <li>
            <Link href="/reports">All Reports</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
