import styles from '@styles/global.module.css';

export default function Error({ title, description }) {
    return (
        <>
            <div className={styles.errorContent}>
                <img className={styles.errorLogo} src='/favicon.ico' />
                <div className={styles.errorTitle}>{title}</div>
                <div className={styles.errorDescription}>{description}</div>
            </div>
        </>
    )
}