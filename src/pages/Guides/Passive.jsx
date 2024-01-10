import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Passive() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Passive</div>
                <div className={styles.articleContent}>
                    Robbing and harmful items (ice cream, nugget, etc) are a large part of Confidence.<br />
                    Some users don't want to take part in this chaos and be affected when trying to grind.<br />
                    <br />
                    Introducing...Passive! Passive is a mode that can be edited <b>once a day</b> to stop users from affecting you.<br />
                    <br />
                    <div className={styles.articleHeader}>Powers/Limitations</div>
                    When in passive, you are immune to:
                    <ul>
                        <li>Robbing</li>
                        <li>Ice Creams or "Icing"</li>
                        <li>Nuggets</li>
                        <li>Gifts (/give command)</li>
                    </ul>
                    <br />
                    On the other hand, in passive you cannot:
                    <ul>
                        <li>Rob</li>
                        <li>Use Ice Creams/Nuggets</li>
                        <li>Give (/give command)</li>
                    </ul>
                    <br />
                    <div className={styles.articleHeader}>How?</div>
                    To enable passive, run <code>/settings passive enable</code>.<br />
                    To disable passive, run <code>/settings passive disable</code>.<br />
                    The command /passive has been depricated and no longer works.
                    <br />
                    <div className={styles.articleHeader}>1 Day Cooldown</div>
                    Passive mode can only be changed once a day.<br />
                    We do this to prevent a disable, rob, enable cycle.<br />
                    Passive can be changed again at 12:00 AM EST.
                </div>
            </div>
        </>
    );
};