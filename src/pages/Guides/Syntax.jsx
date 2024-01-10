import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Syntax() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Syntax</div>
                <div className={styles.articleContent}>
                    Confidence is a very advanced bot - meaning we have advanced commands and systems to make the bot the best it can be.<br />
                    Command syntaxes are important. If you don't understand these, using the bot will be very hard.<br />
                    <br />
                    Side note: throughout this tutorial, we will be prefixing some arguments with [] and (). Please do not literally type these out.
                    <div className={styles.articleHeader}>Basic Vocabulary</div>
                    <ul>
                        <li>"command" - the command. For example: "ban" in /ban Xotic 999 hi</li>
                        <li>"arguments" - extra info you give to the command. For example, "Xotic", "999" and "hi" in /ban Xotic 999 hi</li>
                        <li>"required" - something you NEED to give the command in order for it to work properly. For example, "Xotic" and "999" in /ban Xotic 999 hi (because the command needs to know who & how long).</li>
                        <li>"optional" - a helpful argument or something that will be preset if you don't send it. For example, "hi" in /ban Xotic 999 hi (because if you don't send it, the reason is just "No reason").</li>
                    </ul>
                    <br />
                    That's literally the entire tutorial, because it's not hard to understand syntax.
                </div>
            </div>
        </>
    );
};