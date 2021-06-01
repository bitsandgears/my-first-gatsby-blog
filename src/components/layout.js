import * as React from "react";
import { Link } from "gatsby";
import { 
  title, 
  container,
  navLinks,
  navLinkItem,
  navLinkText, 
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={title}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
