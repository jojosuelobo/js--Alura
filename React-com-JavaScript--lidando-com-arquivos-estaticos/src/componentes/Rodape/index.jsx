import React from 'react'
import styles from './Rodape.module.scss'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default function Rodape() {
  return (
    <footer className={styles.footer}>
        <nav className={styles.footer__icons}>
          <li>
            <img src={facebook} alt='Facebook' />
          </li>
          <li>
            <img src={instagram} alt='Instagram' />
          </li>
          <li>
            <img src={twitter} alt='Twitter' />
          </li>
        </nav>
        <h1 className={styles.footer__texto} >Desenvolvido by</h1>
    </footer>
  )
}
