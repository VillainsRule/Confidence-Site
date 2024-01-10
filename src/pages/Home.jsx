import { Link } from 'react-router-dom';

import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/home.module.css';

export default function Home() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.botIntro}>
                <div className={styles.botName}>CONFIDENCE</div>
                <div className={styles.botDesc}>The #1 Verified Blacket Bot running now.</div>
                <Link to='https://blacket.org/chat' className={styles.tryButton}>TRY ME!</Link>
            </div>

            <div className={styles.disclaimer}>Confidence is <strong>not</strong> owned or maintained by Blacket owners.<br />Do not contact Blacket for reasons relating to Confidence.</div>
        </>
    );
};