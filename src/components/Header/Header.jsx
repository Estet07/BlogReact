import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <h1 className={styles.headerTitle}>Приветствие</h1>
        </header>
    );
};

export default Header;