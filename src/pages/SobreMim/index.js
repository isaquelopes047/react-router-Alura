import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

import style from './SobreMim.module.css'

export default function SobreMim(){
    return(
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            
            <h3 className={style.subtitulo}>
                Olá eu sou o Isaque
            </h3>

            <img 
                src={fotoSobreMim}
                alt='Foto sobre mim'
                className={style.fotoSobreMim}
            />

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria </p>

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem </p>

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou </p>

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou </p>

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou </p>

            <p className={style.paragrafo}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou </p>
        
        </ PostModelo>
    )
}