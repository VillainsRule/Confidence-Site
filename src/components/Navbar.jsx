import { Link } from 'react-router-dom';

import styles from '@styles/global.module.css';

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <Link to='/' className={styles.navHomeLink}>
                    <img className={styles.navLogo} src='/favicon.ico' draggable='false' />
                </Link>

                <div className={styles.navLinks}>
                    <Link to='/commands' className={styles.navLink}>Commands</Link>
                    <Link to='/items' className={styles.navLink}>Items</Link>
                    <Link to='/rules' className={styles.navLink}>Rules</Link>
                    <Link to='/guides' className={styles.navLink}>Guides</Link>
                    <Link to='https://dsc.gg/confidence' className={styles.navLink}>Discord</Link>
                </div>
            </div>        
        </>
    );
};