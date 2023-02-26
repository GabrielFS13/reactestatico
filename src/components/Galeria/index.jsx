import Tags from "../Tags";
import Cards from "./Cards";
import fotos from './fotos.json'
import styles from './Galeria.module.scss';
import {useState} from "react"
export default function Galeria(){
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map(valor => valor.tag))]

    const filtraFotos = (tag) =>{
        const novasFotos = fotos.filter(foto => {
            return(
                foto.tag === tag
            )
        })

        setItens(novasFotos)
    }

    return(
        <section className={styles.galeria}>
            <h2>Navegue Pela Galeria</h2>
            <Tags tags={tags} filtro={filtraFotos} setItem={setItens}/>
            <Cards styles={styles} fotos={itens}/>
        </section>
    )
}