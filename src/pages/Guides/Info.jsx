import { Link } from 'react-router-dom';

import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Info() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Confidence Guides</div>
                <div className={styles.centerContent}>
                    These are a set of guides on topics/commands people seem to have trouble with.
                    <div className={styles.articleHeader}>Articles</div>
                    <div className={styles.articleList}>
                        <Link to='/guides/achievements' className={styles.wikiLink}>Achievements</Link>
                        <Link to='/guides/games' className={styles.wikiLink}>Games</Link>
                        <Link to='/guides/passive' className={styles.wikiLink}>Passive Mode</Link>
                        <Link to='/guides/rates' className={styles.wikiLink}>Rates</Link>
                        <Link to='/guides/syntax' className={styles.wikiLink}>Command Syntax</Link>
                        <Link to='/guides/working' className={styles.wikiLink}>Work System</Link>
                    </div>
                </div>
            </div>
        </>
    );
};