import React from "react";
import styles from '../../styles/Header.module.css'
import { adminNavigation } from "@/Utils/constData";
import Link from "next/link";

function Header() {
  return (
      <div className={styles.headerContainer}>
<nav>
  <ul>
    {
      adminNavigation.map((link: any, index: any) => {
        return(
          <li key={index}>
          <Link href={link.path}>{link.name}</Link>
        </li>
        )
        })
    }
   
  </ul>
</nav>
    </div>
  );
}

export default Header;
