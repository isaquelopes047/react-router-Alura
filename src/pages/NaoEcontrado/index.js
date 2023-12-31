import BotaoPrincipal from 'components/BotaoPrincipal';
import style from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada(){
    const navegar = useNavigate();

    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}> 404 </span>

                <h1 className={style.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={style.paragrafo}>
                    Tem certeza de que era isso uqe você estava procurando?
                </p>

                <p className={style.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div 
                    className={style.botaoContainer}

                    /* Função para voltar uma pagina sem colocar um aparametro estatico como ("/") */
                    onclick={() => {
                        navegar(-1)
                    }}
                >
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img 
                    className={style.imagemCachorro}
                    src={erro404}
                    alt='Cachorro de oculos!'
                />
            </div>

            <div className={style.espacoEmBranco}></div>
        </>
    )
}