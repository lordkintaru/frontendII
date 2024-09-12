import Conteiner from "../../components/Conteiner";
import style from './ElementsPage.module.css'
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useLocation } from "react-router-dom";


function ElementsPage({ fetchData }) {
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




    return (
        <>
            <Conteiner title='Elements/Visions'>
                <p>Visions are jeweled amulets which allow their users to directly channel the power of one of the seven Elements. They are bestowed by Celestia and the Seven Archons to allogenes, people of Teyvat with particularly powerful desires who have the potential to ascend to Celestia and become gods themselves.</p>

                <p>Allogenes who accomplish their goals will cause the gods to receive an "abundant" gift. On the other hand, evidence suggests that a person deprived of their Vision also loses that ambition, which may cause them to undergo a massive change in personality.</p>

                <p>In the upper left corner of the character menu is an icon that represents a playable character's Vision or equivalent, with their element denoted by the gem and their in-game nation denoted by the decorative design around the gem. This icon is present even for the characters that do not use Visions and characters with non-standard Vision designs.</p>
            </Conteiner>

            {
                info ? (
                    <Conteiner>
                        {info.map(e => {
                            return (
                                <div className={style.element}>
                                    <img src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`} alt={e.name} className={style.icon}></img>

                                    <h1>{e.name}</h1>
                                    <section className={style.reaction}>
                                        
                                        {
                                         e.reactions.map(reaction => {
                                            return (
                                                <Conteiner>
                                                    <section className={style.reactionTitle}>
                                                        <h1>{reaction.name}</h1>
                                                        {reaction.elements.map((i) =>{
                                                            return(<img src={`${api.getUri()}${pathName}/${i.toLowerCase()}/icon`} alt={i} className={style.iconsReaction}></img>)
                                                            })}
                                                            </section>
                                                            <p>{reaction.description}</p>
                                                </Conteiner>
                                                    )
                                                })
                                            }
                                        
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </Conteiner>

                ) : (
                    <p>Loading...</p>
                )
            }
        </>

    )


}

export default ElementsPage;