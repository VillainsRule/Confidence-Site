import Background from '@components/Background';
import Navbar from '@components/Navbar';

import styles from '@styles/guides.module.css';

export default function Rates() {
    return (
        <>
            <Background />
            <Navbar />

            <div className={styles.article}>
                <div className={styles.articleTitle}>Rates</div>
                <div className={styles.articleContent}>
                    There are a lot of randomized chances in Confidence, and I'm here to document as many as I feel should be released.<br />
                    The chances are written oddly in Confidence, and sometimes, it's not even clear to me how they're coded.

                    <div className={styles.articleHeader}>/bet</div>
                    Success rates:
                    <ul>
                        <li>Normal: 40%</li>
                        <li>With Fries: 50%</li>
                        <li>With Nugget: 30%</li>
                        <li>With Fries & Nugget: 35%</li>
                    </ul>

                    <div className={styles.articleHeader}>/crime</div>
                    Success rates:
                    <ul>
                        <li>Normal: 50%</li>
                        <li>With Fries: 60%</li>
                        <li>With Nugget: 40%</li>
                        <li>With Fries & Nugget: 45%</li>
                    </ul>

                    <div className={styles.articleHeader}>/dig</div>
                    Drop Rates (Normal):
                    <ul>
                        <li>Nothing: 40%</li>
                        <li>5K - 7.5K: 25%</li>
                        <li>6.5K - 9K: 15%</li>
                        <li>8K - 10K: 10%</li>
                        <li>Coal Chunk: 5%</li>
                        <li>Gold Nugget: 3%</li>
                        <li>Ruby: 1.5%</li>
                        <li>Emerald: 0.4%</li>
                        <li>Diamond: 0.1%</li>
                    </ul>

                    Drop Rates (Fries):
                    <ul>
                        <li>Nothing: 30%</li>
                        <li>5K - 7.5K: 28%</li>
                        <li>6.5K - 9K: 17%</li>
                        <li>8K - 10K: 12%</li>
                        <li>Coal Chunk: 7%</li>
                        <li>Gold Nugget: 3.5%</li>
                        <li>Ruby: 1.8%</li>
                        <li>Emerald: 0.55%</li>
                        <li>Diamond: 0.15%</li>
                    </ul>

                    Drop Rates (Nugget):
                    <ul>
                        <li>Nothing: 50%</li>
                        <li>5K - 7.5K: 22%</li>
                        <li>6.5K - 9K: 13%</li>
                        <li>8K - 10K: 8%</li>
                        <li>Coal Chunk: 3%</li>
                        <li>Gold Nugget: 2.5%</li>
                        <li>Ruby: 1.2%</li>
                        <li>Emerald: 0.25%</li>
                        <li>Diamond: 0.05%</li>
                    </ul>

                    If both FRIES and NUGGET are active, there is a 1/2 chance of getting the fries table and a 1/2 chance of the nugget table.

                    <div className={styles.articleHeader}>/rob</div>
                    Success rates:
                    <ul>
                        <li>Normal: 50%</li>
                        <li>With Fries: 60%</li>
                        <li>With Nugget: 40%</li>
                        <li>With Fries & Nugget: random chance of fry rate/nugget rate</li>
                    </ul>
                    The max robbable in one command is 420,000 coins.<br />
                    The cooldown for robbing someone is 10 minutes.<br />
                    The minimum you must have in your pocket is 30K, and the minimum they must have is 25k.

                    <div className={styles.articleHeader}>/search</div>
                    Success rates:
                    <ul>
                        <li>Normal: 45%</li>
                        <li>With Fries: 50%</li>
                        <li>With Nugget: 40%</li>
                        <li>With Fries & Nugget: 45%</li>
                    </ul>

                    <div className={styles.articleHeader}>/work</div>
                    You will always get the pay for your shift.<br />
                    Special item rates:
                    <ul>
                        <li>Normal: 10%</li>
                        <li>With Fries: 10%</li>
                        <li>With Nugget: 6.667%</li>
                        <li>With Fries & Nugget: 10%</li>
                    </ul>
                </div>
            </div>
        </>
    );
};