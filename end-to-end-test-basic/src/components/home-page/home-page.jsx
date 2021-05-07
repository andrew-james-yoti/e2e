import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home-page.scss';

const HomePage = () => {
    return (
        <div
            data-qa="home-page"
            className={styles.container}
        >
            <h2 data-qa="home-page-title">Home page</h2>
            <div>
                <Link to="/content" data-qa="content-page-link">Content Page</Link>
            </div>
        </div>
    );
};

export default HomePage;
