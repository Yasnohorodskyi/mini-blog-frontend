import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/svg/mini-blog-logo.svg?react';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
