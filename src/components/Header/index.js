import style from './Header.module.css'


function Header () {
        return (
            <header className={style.header}>
                <img src='../Genshin_Impact_Logo.svg'alt='genshin logo' className={style.logo}></img>
                <h1>Hello</h1>
            </header>
        )
}


export default Header;