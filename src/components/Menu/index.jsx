import styles from './Menu.module.scss';

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src="./assets/icones/home-ativo.png" alt="" />
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src="./assets/icones/mais-curtidas-inativo.png" alt="" />
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src="./assets/icones/mais-vistas-inativo.png" alt="" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src="./assets/icones/novas-inativo.png" alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src="./assets/icones/surpreenda-me-inativo.png" alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}