import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
        <div className={styles.logo}>
            <Image
                src='/images/logo.png'
                width={80}
                height={80}
                alt='RaulFonsecaLogo'
            />
            <h1>Escola Estadual Raul Fonseca</h1>
        </div>
        </>
    )
}