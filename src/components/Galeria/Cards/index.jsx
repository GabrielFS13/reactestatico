export default function Cards({fotos, styles}){
    return (
        <ul className={styles.galeria__cards}>
                {fotos.map((foto) =>{
                    return(
                        <li key={foto.id} className={styles.galeria__card}>
                            <img src={foto.imagem} alt={foto.titulo} className={styles.galeria__imagem} />
                            <p className={styles.galeria__descricao}>{foto.titulo}</p>
                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img src="./assets/favorito.png" alt="Curtir" />
                                    <img src="./assets/open.png" alt="Abrir modal" />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
    )
}