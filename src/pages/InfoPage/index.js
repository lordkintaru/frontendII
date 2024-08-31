import style from './Character.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';


function InfoPage({ fetchData }) {
    const pathName = useLocation().pathname;

    const [info, setInfo] = useState(null);

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
    
    }, [fetchData, pathName]);


    useEffect(() => {
        console.log(info)
    }, [info])


    return (
        <div className={style.container}>
            
            <h1>{pathName.slice(1).toUpperCase()}</h1>

            <table className={style.table}>
                <thead>
                    <tr className={style.tr}>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Rarity</th>
                        <th>Element</th>
                        <th>Weapon</th>
                        <th>Nation</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {
                        info && (
                            info.map(e => {

                                return (
                                    <tr>
                                        <td><img src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`} alt={e.id}></img></td>
                                        <td>{e.name}</td>
                                        <td>{e.rarity}</td>
                                        <td>{e.element}</td>
                                        <td>{e.weapon}</td>
                                        <td>{e.nation}</td>
                                    </tr>
                                )
                            })

                        )
                    }
                </tbody>


            </table>
        </div>
    )

}

export default InfoPage;