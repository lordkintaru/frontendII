import style from './NationsPage.module.css'
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Conteiner from '../../components/Conteiner';

function NationsPage({ fetchData }) {

    const [info, setInfo] = useState(null);

    const pathName = useLocation().pathname;

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const data = await fetchData(`${pathName}/all`);
                setInfo(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchInfo();
    }, [pathName, fetchData]);

    return (
        <>
            {info ? (
                <Conteiner title={pathName.slice(1).toUpperCase()}>
                    <p>These are all the playable nations at the moment, with {info.length} at the moment.</p>
                </Conteiner>
            ) : (
                <p>Loading...</p>
            )}
            <Conteiner className={style.containerNations}>
                {info ? (
                    info.map(e => {
                        return (
                            <div className={style.informationBox}>
                                <h1>{e.name}</h1>
                                <img src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`} alt={e.id}
                                 className={style.icon}></img>
                                <Conteiner>
                                    <p>Archon: {e.archon}</p>
                                    <p className={style.element}>Element: {e.element}<img src={`${api.getUri()}/elements/${e.element.toLowerCase()}/icon`} alt={e.element} className={style.iconElement}></img></p>
                                    <p>Controlling Entity: {e.controllingEntity}</p>
                                </Conteiner>
                           
                            </div>
                          
                  
                        )
                    })
                ):(
                    <p>Loading...</p>
                )
                }
            </Conteiner>
        
        </>
    )
}

export default NationsPage;