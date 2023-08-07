import styles from './components/Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Logo da Empresa XYZ"
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de perfil"
                />
            </div>
        </div>
    )
}