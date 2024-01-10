import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Achievements() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Achievements</div>
                <div className={styles.articleContent}>
                    These are various milestones you will hit during play, mostly with several levels.<br />
                    The best players have all of them. Do you?

                    <div className={styles.articleHeader}>Betting</div>
                    There are two achievements for betting:
                    <ul>
                        <li>100 Bet Wins</li>
                        <li>200 Bet Wins</li>
                    </ul>
                    Tip: <code>/bet has a 40% unless you're using a Box of Fries. When you have Fries, the rate is 50%.</code>

                    <div className={styles.articleHeader}>Robbing</div>
                    There are also two achievements related to robbing:
                    <ul>
                        <li>5,000,000 robbed</li>
                        <li>10,000,000 robbed</li>
                    </ul>
                    Back when robbing was new, there was also 1M robbed and 2M robbed.

                    <div className={styles.articleHeader}>Commands</div>
                    There are a full three achievements for commands:
                    <ul>
                        <li>2,000 commands</li>
                        <li>5,000 commands</li>
                        <li>10,000 commands</li>
                    </ul>
                    Previously, there was only 1,000 commands and 2,000 commands.<br />
                    The only way to get this achievement is just grinding.

                    <div className={styles.articleHeader}>HL Commands</div>
                    There is only one achievement for /highlow, and that's 500 successful guesses.<br />
                    Tip: <code>The /highlow jackpot counts as TEN highlow wins (it's still a waste of time)!</code>

                    <div className={styles.articleHeader}>Collector</div>
                    This is obtained by having every item.<br />
                    I still wouldn't call it the hardest...10K commands is hours of work...
                </div>
            </div>
        </>
    );
};