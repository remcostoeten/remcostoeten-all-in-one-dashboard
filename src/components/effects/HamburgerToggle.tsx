'use client'
// components/Hamburger.tsx
import React, { useState } from 'react'
import styles from '@/styles/theme/Hamburger.module.scss'

const Hamburger: React.FC = () => {
    const [isClosed, setIsClosed] = useState(true)

    const toggleMenu = () => {
        setIsClosed(!isClosed)
    }

    return (
        <div
            id='hamburger'
            className={`${styles.hamburglar} ${isClosed ? styles.isClosed : styles.isOpen}`}
            onClick={toggleMenu}
        >
            <div className={styles.burgerIcon}>
                <div className={styles.burgerContainer}>
                    <span className={styles.burgerBunTop}></span>
                    <span className={styles.burgerFilling}></span>
                    <span className={styles.burgerBunBot}></span>
                </div>
            </div>
            <div className={styles.burgerRing}>
                <svg className={styles.svgRing}>
                    <path
                        className={styles.path}
                        fill='none'
                        stroke='#fff'
                        strokeMiterlimit='10'
                        strokeWidth='4'
                        d='M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2'
                    />
                </svg>
            </div>
            <svg width='0' height='0'>
                <mask id='mask'>
                    <path
                        fill='none'
                        stroke='#ff0000'
                        strokeMiterlimit='10'
                        strokeWidth='4'
                        d='M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4'
                    />
                </mask>
            </svg>
            <div className={styles.pathBurger}>
                <div className={styles.animatePath}>
                    <div className={styles.pathRotation}></div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
