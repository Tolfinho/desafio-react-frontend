import React from 'react';

//Styles
import styles from './Footer.module.css';

//React-Icons
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy;2022 Desenvolvido por João Tolfo - Todos Direitos Reservados
      </p>
      <div className={styles.socialIcons}>
        <a href="/">
          <FaWhatsapp className={styles.icon} />
        </a>
        <a href="/">
          <FaFacebookF className={styles.icon} />
        </a>
        <a href="/">
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
