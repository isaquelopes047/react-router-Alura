import style from './components/PostModelo.module.css'

export default function PostModelo({fotoCapa, titulo, children}){
    return (
        <article className={style.postModeloContainer}>
            <div className={style.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}}>

            </div>

            <h2 className={style.titulo}>
                {titulo}
            </h2>

            <div className={style.postConteudoConteiner}>
                {children}
            </div>
        </article>
    )
}