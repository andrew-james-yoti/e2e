import React from 'react';
import styles from './header.scss';

const Header = () => {
    return (
        <h1
            data-qa="header"
            className={styles.container}
        >
            End To End Tests
        </h1>
    );
};

export default Header;
