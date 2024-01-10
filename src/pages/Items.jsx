import { useState } from 'react';

import Background from '@components/Background';
import Navbar from '@components/Navbar';

import items from '@data/items.js';

import styles from '@styles/items.module.css';

export default function Items() {
    let [ currentItem, setCurrentItem ] = useState(Object.entries(items)[Object.entries(items).length * Math.random() | 0]);
    
    return (
        <>
            <Background />
            <Navbar />
            
            {/*<div class="main">
        <div class="itemsTitle">Confidence Items</div>
        <div class="container">
            <div class="itemList">
                <div class="itemContainer" data-itemName="Box of Fries">
                    <img class="itemImage" src="../assets/items/box_of_fries.png">
                </div>
                <div class="itemContainer" data-itemName="Chip Bag">
                    <img class="itemImage" src="../assets/items/chip_bag.png">
                </div>
                <div class="itemContainer" data-itemName="Coal Chunk">
                    <img class="itemImage" src="../assets/items/coal_chunk.png">
                </div>
                <div class="itemContainer" data-itemName="Diamond">
                    <img class="itemImage" src="../assets/items/diamond.png">
                </div>
                <div class="itemContainer" data-itemName="Emerald">
                    <img class="itemImage" src="../assets/items/emerald.png">
                </div>
                <div class="itemContainer" data-itemName="Gold Nugget">
                    <img class="itemImage" src="../assets/items/gold_nugget.png">
                </div>
                <div class="itemContainer" data-itemName="Ice Cream">
                    <img class="itemImage" src="../assets/items/ice_cream.png">
                </div>
                <div class="itemContainer" data-itemName="Nugget">
                    <img class="itemImage" src="../assets/items/nugget.png">
                </div>
                <div class="itemContainer" data-itemName="Pizza">
                    <img class="itemImage" src="../assets/items/pizza.png">
                </div>
                <div class="itemContainer" data-itemName="Ruby">
                    <img class="itemImage" src="../assets/items/ruby.png">
                </div>
                <div class="itemContainer" data-itemName="Salad">
                    <img class="itemImage" src="../assets/items/salad.png">
                </div>
                <div class="itemContainer" data-itemName="Sandwich">
                    <img class="itemImage" src="../assets/items/sandwich.png">
                </div>
                <div class="itemContainer" data-itemName="Soda">
                    <img class="itemImage" src="../assets/items/soda.png">
                </div>
                <div class="itemContainer" data-itemName="Taco">
                    <img class="itemImage" src="../assets/items/taco.png">
                </div>
            </div>
            <div class="activeItem">
                <img class="activeItemImg" src="../assets/items/soda.png">
                <div class="activeItemName">Soda</div>
                <div class="activeItemInfo">Drink up!</div>
                <div class="divider"></div>
                <div class="activeItemDesc">Category: <strong>Food</strong></div>
                <div class="activeItemDesc">Sell Price: <strong>idfk</strong></div>
                <div class="activeItemDesc">Obtaining: <strong>/command</strong></div>
                <div class="divider"></div>
                <div class="activeItemDesc">Usage: <strong>none</strong></div>
            </div>
        </div>
    </div>*/}
            <div className={styles.main}>
                <div className={styles.itemsTitle}>Confidence Items</div>
                <div className={styles.container}>
                    <div className={styles.itemList}>
                        {Object.entries(items).map((item) => {
                            return (
                                <div className={styles.itemContainer} key={item[1].name} onClick={() => setCurrentItem(item)}>
                                    <img className={styles.itemImage} src={`/img/${item[0].replaceAll(' ', '_').toLowerCase()}.png`} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.activeItem}>
                        <img className={styles.activeItemImg} src={`/img/${currentItem[0].replaceAll(' ', '_').toLowerCase()}.png`} />
                        <div className={styles.activeItemName}>{currentItem[0]}</div>
                        <div className={styles.activeItemInfo}>{currentItem[1].funText}</div>
                        <div className={styles.divider}></div>
                        <div className={styles.activeItemDesc}>Category: <strong>{currentItem[1].category}</strong></div>
                        <div className={styles.activeItemDesc}>Sell Price: <strong>{currentItem[1].sell}</strong></div>
                        <div className={styles.activeItemDesc}>Obtaining: <strong>{currentItem[1].obtain}</strong></div>
                        <div className={styles.divider}></div>
                        <div className={styles.activeItemDesc}>Usage: <strong>{currentItem[1].usage}</strong></div>
                    </div>
                </div>
            </div>
        </>
    );
};