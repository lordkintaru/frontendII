import style from './Character.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';


function CharactersList({ fetchData }) {
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
        <div className={style.containerCharacters}>

            <h1>{pathName.slice(1).toUpperCase()}</h1>

            <table className={style.table}>
                <thead>
                    <tr className={style.tr}>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Rarity</th>
                        <th>Vision</th>
                        <th>Weapon</th>
                        <th>Nation</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {
                        info ? (
                            info.map(e => (
                                <tr key={e.id}>
                                    <td><img src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`} alt={e.id} className={style.icon} /></td>
                                    <td>{e.name}</td>
                                    <td>{e.rarity}</td>
                                    <td className={style.visionCell}>
                                        <img src={`${api.getUri()}/elements/${e.vision_key.toLowerCase()}/icon`} alt={e.vision} className={style.vision} />
                                        {e.vision}
                                    </td>
                                    <td>{e.weapon}</td>
                                    <td>
                                        <img src={`${api.getUri()}/nations/${e.nation.toLowerCase()}/icon`} alt={e.nation} className={style.nation} />
                                        {e.nation}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td >Loading...</td>
                                <td >Loading...</td>
                                <td >Loading...</td>
                                <td >Loading...</td>
                                <td >Loading...</td>
                                <td >Loading...</td>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
    )

}

export default CharactersList;