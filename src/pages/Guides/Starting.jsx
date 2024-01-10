import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Starting() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Getting Started</div>
                <div className={styles.articleContent}>
                    Confidence has a very large currency system, and getting started can seem confusing or downright impossible.<br />
                    This guide will outline everything you need to know to make Confidence fun & easy to play!<br />
                    <br />
                    <div className={styles.articleHeader}>Grinding</div>
                    If you quickly run <code>/coinlb</code>, you'll see some pretty big values.<br />
                    All of the people here got here by grinding, grinding, and what was that third one? Oh yea, grinding.<br />
                    Confidence is extremely <strike>additive</strike> time-consuming. Commit some time to the bot, and you'll be fine.<br />
                    <br />
                    Back to grinding. There are several commands you have to consecutively use to grind.<br />
                    Here's basic ups and downs of each.
                    <ul>
                        <li><code>/crime</code> - has a random chance of succeeding and giving money, or failing and taking it.</li>
                        <li><code>/search</code> - if you succeed, you get rewards. if you fail, nothing happens.</li>
                        <li><code>/highlow</code> - also known as /hl, this is a minigame that gives coins upon winning.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};