import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/rules.module.css';

export default function Rules() {
    return (
        <>
            <Background />
            <Navbar />
            
            <div className={styles.ruleContent}>
                <div className={styles.rulesHeader}>Confidence Rules</div>
                <div className={styles.rulesInfo}>By using Confidence, you agree to the following rules.<br />If you break any rules, we reserve the right to remove your access to any and/or all Confidence services.</div>

                <div className={styles.ruleHeader}>1. User-bots, Automation, and Macros</div>
                <div className={styles.ruleDesc}>Usage of user-bots, macros, scripts, auto-typers, or anything else enabling automation of commands is not allowed.</div>

                <div className={styles.ruleHeader}>2. Exploits</div>
                <div className={styles.ruleDesc}>Using exploits or exploitative bugs is forbidden.<br />Please report all exploits and bugs to Confidence Staff so that we can fix them as soon as possible.</div>

                <div className={styles.ruleHeader}>3. Etiquette</div>
                <div className={styles.ruleDesc}>Starting or spreading harmful rumors about the bot, causing unnecessary drama within Blacket about the bot, or witch-hunting/defaming staff members are all ban-worthy behaviors.</div>

                <div className={styles.ruleHeader}>4. Scamming</div>
                <div className={styles.ruleDesc}>Using the bot in any form of scamming other people is strictly forbidden.</div>

                <div className={styles.ruleHeader}>5. Alternate Accounts</div>
                <div className={styles.ruleDesc}>Alternate account usage is banned in all circumstances.<br />Using these will result in a bot ban for all accounts, including the "central" or "main" account.</div>

                <div className={styles.rulesEnding}>Bot Moderators <strong>may moderate on discretion.</strong><br />If <strong>if a rule is being broken</strong> or you <strong>truly find a ban unjust</strong>, DM <strong>@xthonk</strong> on Discord.</div>
            </div>
        </>
    );
};