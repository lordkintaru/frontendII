import style from './MenuNav.module.css'
// import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function MenuNav({ fetchData }) {

    
    const localization = useLocation();
    /*
    const [types, setTypes] = useState({types: []});

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const data = await fetchData();
                setTypes(data);
    
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchTypes();
    }, [fetchData]);

    */
        
    return(
        /*
        <nav>
            <ul className={style.nav}>
                {
                types.types.map((element, e) => 
                <li className= { `${localization.pathname === `/${element}` ?style.check: style.borderSlide}`  }><Link  
                         key={e} 
                         to={`/${element}`}>
                            {element.toUpperCase()} 
                        </Link> </li>)
                }
            </ul>
        </nav>
        */
       <nav>
            <ul className={style.nav}>
                <li className= { `${localization.pathname === `/` ?style.check: style.borderSlide}`  }>
                    <Link to='/'>ABOUT</Link>
                </li>
                <li className= { `${localization.pathname === `/characters` ?style.check: style.borderSlide}`  }>
                    <Link to='/characters'>CHARACTERS</Link>
                </li>
                <li className= { `${localization.pathname === `/elements` ?style.check: style.borderSlide}`  }>
                    <Link to='/elements'>ELEMENTS</Link>
                </li>
                <li className= { `${localization.pathname === `/nations` ?style.check: style.borderSlide}`  }>
                    <Link to='/nations'>NATIONS</Link>
                </li>


            </ul>
       </nav>
      
    )
}

export default MenuNav;
