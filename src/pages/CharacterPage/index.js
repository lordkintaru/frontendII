import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Conteiner from "../../components/Conteiner";
import style from './CharacterPage.module.css'

function CharacterPage({ fetchData }) {

    //const { id } = useParams();
    //pathName tem a mesma chamada de api, por isso esta sendo ultilizada ao inves do id;
    const pathName = useLocation().pathname;
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const data = await fetchData(pathName);
                setInfo(data);

            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchInfo();
    }, [fetchData, pathName]);


    useEffect(() => {
        console.log(info)
    }, [info, pathName])
    return (

        <>
            {
                info ? (
                    <>
                        <h1>{info.name}</h1>
                        <div className={style.containerCharacter}>
                            <Conteiner>
                                <p>Title : {info.title}</p>
                                <p>Rarity : {info.rarity}</p>

                                <Link to='/elements'>
                                    <p className={style.pElements}>Vision : {info.vision}
                                        <img src={`${api.getUri()}/elements/${info.vision_key.toLowerCase()}/icon`} alt={info.vision}/>
                                    </p>
                                </Link>

                                <p>Weapon : {info.weapon}</p>
                                <Link to='/nations'><p>Nation : {info.nation}</p></Link>
                                <p>Birthday : {info.birthday}</p>
                                <p>Gender: {info.gender}</p>
                                <p>Description : {info.description}</p>
                            </Conteiner>
                            <img src={`${api.getUri()}${pathName}/card`} alt={`${info.name} card`} className={style.imgCharacter} ></img>
                        </div>

                        <Conteiner title='Talents'>
                            <table className={style.talentsTable}>
                                
                                <tr>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>


                                {
                                    info.skillTalents.map(e => {
                                        return (
                                            <tr>
                                                <td>
                                                   {
                                                    e.type === 'NORMAL_ATTACK' ? (
                                                        <img src={`${api.getUri()}${pathName}/talent-na`} alt="Normal Attack Icon" />
                                                    ) : e.type === 'ELEMENTAL_SKILL' ? (
                                                        <img src={`${api.getUri()}${pathName}/talent-skill`} alt="Elemental Skill Icon" />
                                                    ) : e.type === 'ELEMENTAL_BURST' ? (
                                                        <img src={`${api.getUri()}${pathName}/talent-burst`} alt="Elemental Burst Icon" />
                                                    ) : null
                                                
                                                   
                                                   }
                                                </td>
                                                <td>{e.name}</td>
                                                <td>{e.unlock}</td>
                                                <table>
                                                    <tr>
                                                        <td>{e.description}</td>
                                                        <td>Values</td>
                                                    </tr>

                                                    {
                                                    e.upgrades?.map(u =>{
                                                        return(
                                                            <tr>
                                                                <td>{u.name}</td>
                                                                <td>{u.value}</td>
                                                            </tr>
                                                        ) 
                                                    })
                                                        
                                                    

                                                    }
                                                </table>

                                            </tr>
                                        )
                                    })
                                }

                            </table>

                        </Conteiner>
                        <Conteiner title='Passive Talents'>

                            <table>
                                <tr>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Unlock</th>
                                </tr>
                            {
                                info.passiveTalents.map((e,i) => {
                                    return (
                                        <tr>
                                            <td><img src={`${api.getUri()}${pathName}/talent-passive-${i}`} alt={e.name}></img></td>
                                            <td>{e.name}</td>
                                            <td>{e.description}</td>
                                            <td>{e.unlock}</td>
                                        </tr>
                                        
                                    )
                                })
                            }
                            </table>
                        </Conteiner>
                        <Conteiner title='Constellations'>
                            <Conteiner>
                                <h1>Name: {info.constellation}</h1>
                                <img src={`${api.getUri()}${pathName}/constellation`} alt={info.constellation} className={style.imgConstellation}></img>
                            </Conteiner>
                            
                            <table>
                                <tr>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Unlock</th>
                                </tr>
                                {
                                    info.constellations.map(e => {
                                        return (
                                            <tr>
                                                <td><img src={`${api.getUri()}${pathName}/constellation-${e.level}`} alt={e.name}></img></td>
                                                <td>{e.name}</td>
                                                <td>{e.description}</td>
                                                <td>{e.unlock}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </Conteiner>

                    </>

                ) :
                    <p>Loading...</p>

            }
        </>
    )
}


export default CharacterPage;