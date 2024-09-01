import Conteiner from "../../components/Conteiner";
import style from './PageNotFound.module.css'


function PageNotFound(){



    return(
        <>
            <Conteiner title='Oops! Page Not Found'>
                <p>It looks like you’re lost! The page you’re looking for doesn’t exist or has been moved.</p></Conteiner>
            <img src='gifNotFound.gif' alt='Paimon Confuse' className={style.gifNotFound}></img>
        </>
    )
}

export default PageNotFound;