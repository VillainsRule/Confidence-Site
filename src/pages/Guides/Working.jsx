import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Working() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>/work</div>
                <div className={styles.articleContent}>
                    /work is a command that is a full-on "jobs" system.<br />
                    There are several parts of /work, all detailed below!

                    <div className={styles.articleHeader}>/work list</div>
                    This command sends every job, as well as they pay of the jobs.<br />
                    There is no qualification required to get any job, and all of the jobs have advantages and disadvantages.<br />

                    Jobs have "special items" that can be rarely obtained from working, usually items exclusive to the job.<br />
                    There is also a flat rate of coins paid for every shift you work.

                    <div className={styles.articleHeader}>/work apply</div>
                    This is a command to apply for one of the jobs listed above.<br />
                    When you type out the name, it must be the full name - you cannot do <code>/work apply mcdonalds</code> for the McDonalds Worker.

                    <div className={styles.articleHeader}>/work shift</div>
                    This is how you actually work.<br />
                    As noted above, you will recieve coins and potentially items for your shift.

                    <div className={styles.articleHeader}>/work resign</div>
                    This is how you resign from your job.<br />
                    Once resigning, you cannot <code>/work apply</code> for three hours.
                </div>
            </div>
        </>
    );
};