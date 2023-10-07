import React from "react";
import style from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../../assets/getlinked.png"

function NavBar() {
  return (
    <div className={style.navbar}>
        {/* <img className={style.logo} src={Logo} alt="" srcset="" /> */}
        <h2 className={style.logo}>get<span className={style.logolink}>Linked</span></h2>
        <div className={style.nav_contents}>
          <ul className={style.navbar_item_list}>
            <li>TimeLine</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contacts</li>
          </ul>
          <Button value="Register" link="www.google.com"/>
        </div>
    </div>
  );
}

export default NavBar;
