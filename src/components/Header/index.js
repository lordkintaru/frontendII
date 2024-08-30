import style from './Header.module.css'

import MenuNav from '../MenuNav';


function Header({ fetchData }) {




    return (

        <header className={style.header}>

            <img src='../Genshin_Impact_Logo.svg' alt='genshin logo' className={style.logo}></img>

            <MenuNav fetchData={fetchData}/>

        </header>
    )
}


export default Header;