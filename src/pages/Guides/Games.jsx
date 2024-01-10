import { Link } from 'react-router-dom';

import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Games() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Games</div>
                <div className={styles.articleContent}>
                    Confidence has "game nights" where we have custom games for everyone to enjoy!<br />
                    These gamenights are always approved by an Owner before we move the bot to global chat.
                    <div className={styles.articleHeader}>Guess the Blook</div>
                    Guess the Blook is a fun gamemode where you have to guess the name of the blook.<br />
                    Confidence will send a Blook Emoji, and you will have to say the name first.<br />
                    You cannot misspell the name, but case doesn't matter.<br />
                    You cannot use "slang" for a name or shorthand; for example, Rainbow Astronaut cannot become Rainbow Astro or RB astronaut.<br />
                    <br />
                    The game is fully automated, and the chosen blooks are randomised.
                </div>
            </div>
        </>
    );
};