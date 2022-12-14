import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function Card() {
    return(
        <div className={styles.card}>
            <h3 className={style.title}>Título</h3>
            <p className={style.description}>Descrição</p>
        </div>
    )
}