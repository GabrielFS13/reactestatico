import styles from './Tags.module.scss';
import fotos from '../Galeria/fotos.json';

export default function Tags ({tags, filtro, setItem}){
    return(
        <div className={styles.tags}>
            <p>Filtre por Tags: </p>
            <ul className={styles.tags__lista}>
                {tags.map((tag, index) => <li key={index} onClick={() => filtro(tag)}>{tag}</li>)}
                <li onClick={() => setItem(fotos)}>Todas</li>
            </ul>
        </div>
    )
}