import { useEffect, useState } from 'react';

import Background from '@components/Background';
import Navbar from '@components/Navbar';

import commandList from '@data/commands.js';

import styles from '@styles/commands.module.css';

export default function Commands() {
    let [commands, setCommands] = useState({});
    let [command, setCommand] = useState({});

    useEffect(() => setCommand({}), [commands]);

    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.main}>
                <div className={styles.commandsHead}>Confidence Commands</div>
                <div className={styles.commandCategories}>
                    <div className={styles.category} onClick={() => setCommands(commandList['blacket'])}>Blacket</div>
                    <div className={styles.category} onClick={() => setCommands(commandList['bot'])}>Bot</div>
                    <div className={styles.category} onClick={() => setCommands(commandList['currency'])}>Currency</div>
                    <div className={styles.category} onClick={() => setCommands(commandList['fun'])}>Fun</div>
                    <div className={styles.category} onClick={() => setCommands(commandList['mod'])}>Mod</div>
                    <div className={styles.category} onClick={() => setCommands(commandList['utility'])}>Utility</div>
                </div>

                <div className={styles.bottomContent}>
                    <div className={styles.commandList}>
                        {Object.entries(commands).length ? Object.entries(commands).map((cmd, i) => {
                            return (
                                <div className={styles.commandItem} key={cmd[0]} onClick={() => setCommand({
                                    ...cmd[1],
                                    name: cmd[0]
                                })}>{cmd[0]}</div>
                            );
                        }) : <div>select a category to get started...</div>}
                    </div>
                    <div className={styles.commandInfo} style={{
                        display: Object.entries(command).length ? '' : 'none',
                    }}>
                        <div className={styles.commandName}>/{command.name}</div>
                        <div className={styles.divider} />
                        <div className={styles.commandFunction}>{command.description}</div>
                        <div className={styles.extraInfo}>
                            <div className={styles.infoText}>Alias:</div>
                            <code className={styles.infoData}>/{command.alias}</code>
                        </div>
                        <div className={styles.extraInfo}>
                            <div className={styles.infoText}>Syntax:</div>
                            <code className={styles.infoData}>/{command.syntax}</code>
                        </div>
                        <div className={styles.smallNote}>{command.note}</div>
                    </div>
                </div>
            </div>
        </>
    );
};