import style from './Header.module.css'
import { Link } from 'react-router-dom';
import MenuNav from '../MenuNav';


function Header({ fetchData }) {




    return (

        <header className={style.header}>
            <section>
                <div>
                    <Link to='/'><img src='../Site-logo.webp' alt='genshin logo' className={style.logo}></img>
                    </Link>
                </div>

                <MenuNav fetchData={fetchData}/>

            </section>
       

        </header>
    )
}


export default Header;