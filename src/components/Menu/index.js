import styles from './components/Menu/Menu.module.css';
import MenuLink from './components/MenuLink';

export default function Menu(){

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Inicio
                </MenuLink>
                <MenuLink to='sobremim'>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}