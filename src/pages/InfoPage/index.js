import style from './Character.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function InfoPage({fetchData}){
    const pathName = useLocation().pathname;
    console.log(pathName);

    

    return(
        <div className={style.container}>
            <h1>{pathName.slice(1).toUpperCase()}</h1>

        </div>
    )

}

export default InfoPage;