//React
import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Loja</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
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
