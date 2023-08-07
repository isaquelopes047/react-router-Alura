import BotaoPrincipal from 'components/BotaoPrincipal';
import style from './components/Post.module.css';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={style.post}>
                <img
                    className={style.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='capa'
                />

                <h2 className={style.titulo}> {post.titulo} </h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>

    )
}