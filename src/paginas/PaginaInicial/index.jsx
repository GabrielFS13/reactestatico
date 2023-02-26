import Cabecalho from "../../components/Cabecalho";
import Galeria from "../../components/Galeria";
import Menu from "../../components/Menu";
import Populares from "../../components/Populares";
import styles from './PaginaInicial.module.scss';

export default function PaginaInicial(){
    return(
        <div>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src="assets/banner.png" alt="Banner" />
                </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            
        </div>
    )
}