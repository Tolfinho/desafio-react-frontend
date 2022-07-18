//React
import React from 'react';

//Styles
import styles from './Navbar.module.css';

//Images
import defaultUser from '../../assets/defaultUser.png';

//React-Icons
import { BsQuestionCircle } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.start}>
        <h2 className={styles.logo}>
          mini<span>Commerce</span>
        </h2>
        <nav className={styles.desktop}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Loja</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.end}>
        <div className={styles.shopIcon}>
          <BiShoppingBag />
          <div>0</div>
        </div>
        <img src={defaultUser} alt="user" className={styles.userPhoto} />
      </div>
    </div>
  );
};

export default Navbar;
