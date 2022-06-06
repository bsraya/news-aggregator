import { FC } from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header: FC = () => {
    return (
        <nav className={styles.container}>
            <Link href="/">
                <a className={styles.link}>Machine Learning</a>
            </Link>
            <Link href="/deeplearning">
                <a className={styles.link}>Deep Learning</a>
            </Link>
            <Link href="/reinforcementlearning">
                <a className={styles.link}>Reinforcement Learning</a>
            </Link>
        </nav>
    )
}

export default Header