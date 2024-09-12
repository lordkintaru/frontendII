import style from "./CharacterInfo.module.css";
import { Link } from "react-router-dom";
import  Conteiner from "../Conteiner";



function CharacterInfoDesktop({ info ,  api,  pathName }) {

    return (
        <>
            <h1>{info.name}</h1>
            <div className={style.containerCharacter}>
              <Conteiner>
                <p>Title : {info.title}</p>
                <p>Rarity : {info.rarity}</p>

                <Link to="/elements">
                  <p className={style.pElements}>
                    Vision : {info.vision}
                    <img
                      src={`${api.getUri()}/elements/${info.vision_key.toLowerCase()}/icon`}
                      alt={info.vision}
                    />
                  </p>
                </Link>

                <p>Weapon : {info.weapon}</p>
                <Link to="/nations">
                  <p>Nation : {info.nation}</p>
                </Link>
                <p>Birthday : {info.birthday}</p>
                <p>Gender: {info.gender}</p>
                <p>Description : {info.description}</p>
              </Conteiner>
              <img
                src={`${api.getUri()}${pathName}/card`}
                alt={`${info.name} card`}
                className={style.imgCharacter}
              ></img>
            </div>

            <Conteiner title="Talents">
              <table className={style.talentsTable}>
                <tr>
                  <th>Icon</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>

                {info.skillTalents.map((e) => {
                  return (
                    <tr>
                      <td>
                        {e.type === "NORMAL_ATTACK" ? (
                          <img
                            src={`${api.getUri()}${pathName}/talent-na`}
                            alt="Normal Attack Icon"
                            className={style.imgSkill}
                          />
                        ) : e.type === "ELEMENTAL_SKILL" ? (
                          <img
                            src={`${api.getUri()}${pathName}/talent-skill`}
                            alt="Elemental Skill Icon"
                            className={style.imgSkill}
                          />
                        ) : e.type === "ELEMENTAL_BURST" ? (
                          <img
                            src={`${api.getUri()}${pathName}/talent-burst`}
                            alt="Elemental Burst Icon"
                            className={style.imgSkill}
                          />
                        ) : null}
                      </td>
                      <td>{e.name}</td>
                      <td>{e.unlock}</td>
                      <table>
                        <tr>
                          <td>{e.description}</td>
                          <td>Values</td>
                        </tr>

                        {e.upgrades?.map((u) => {
                          return (
                            <tr>
                              <td>{u.name}</td>
                              <td>{u.value}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </tr>
                  );
                })}
              </table>
            </Conteiner>
            <Conteiner title="Passive Talents">
              <table>
                <tr>
                  <th>Icon</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Unlock</th>
                </tr>
                {info.passiveTalents.map((e, i) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={`${api.getUri()}${pathName}/talent-passive-${i}`}
                          alt={e.name}
                        ></img>
                      </td>
                      <td>{e.name}</td>
                      <td>{e.description}</td>
                      <td>{e.unlock}</td>
                    </tr>
                  );
                })}
              </table>
            </Conteiner>
            <Conteiner title="Constellations">
              <Conteiner>
                <h1>Name: {info.constellation}</h1>
                <img
                  src={`${api.getUri()}${pathName}/constellation`}
                  alt={info.constellation}
                  className={style.imgConstellation}
                ></img>
              </Conteiner>

              <table>
                <tr>
                  <th>Icon</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Unlock</th>
                </tr>
                {info.constellations.map((e) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={`${api.getUri()}${pathName}/constellation-${
                            e.level
                          }`}
                          alt={e.name}
                        ></img>
                      </td>
                      <td>{e.name}</td>
                      <td>{e.description}</td>
                      <td>{e.unlock}</td>
                    </tr>
                  );
                })}
              </table>
            </Conteiner>
          </>
    )

}


function CharacterInfoMobile({ info, api , pathName}) {

    return (
        <>
        <Conteiner title={info.name.toUpperCase()}>
          <img
            src={`${api.getUri()}${pathName}/card`}
            alt="Character Card"
            className={style.imgCharacter}
          ></img>
        </Conteiner>

        <Conteiner>
          <p>Title : {info.title}</p>
          <p>Rarity : {info.rarity}</p>

          <Link to="/elements">
            <p className={style.pElements}>
              Vision : {info.vision}
              <img
                src={`${api.getUri()}/elements/${info.vision_key.toLowerCase()}/icon`}
                alt={info.vision}
              />
            </p>
          </Link>

          <p>Weapon : {info.weapon}</p>
          <Link to="/nations">
            <p>Nation : {info.nation}</p>
          </Link>
          <p>Birthday : {info.birthday}</p>
          <p>Gender: {info.gender}</p>
          <p>Description : {info.description}</p>
        </Conteiner>

        <Conteiner title="Talents">
          {
            info.skillTalents.map((e) => {
              return (
                <Conteiner>
                   {e.type === "NORMAL_ATTACK" ? (
                      <img
                        src={`${api.getUri()}${pathName}/talent-na`}
                        alt="Normal Attack Icon"
                        className={style.imgSkill}
                      />
                    ) : e.type === "ELEMENTAL_SKILL" ? (
                      <img
                        src={`${api.getUri()}${pathName}/talent-skill`}
                        alt="Elemental Skill Icon"
                        className={style.imgSkill}
                      />
                    ) : e.type === "ELEMENTAL_BURST" ? (
                      <img
                        src={`${api.getUri()}${pathName}/talent-burst`}
                        alt="Elemental Burst Icon"
                        className={style.imgSkill}
                      />
                    ) : null}
                  <p>Name : {e.name}</p>
                  <p>Unlock : {e.unlock}</p>
                  <p>Description : {e.description}</p>
                </Conteiner>
                
              )
            })
          }
        </Conteiner>
        <Conteiner title="Passive Talents">
          {info.passiveTalents.map((e, i) => {
            return (
              <Conteiner>
                <img
                  src={`${api.getUri()}${pathName}/talent-passive-${i}`}
                  alt={e.name}
                ></img>
                <p>Name : {e.name}</p>
                <p>Unlock : {e.unlock}</p>
                <p>Description : {e.description}</p>
              </Conteiner>
            );
          })}
        </Conteiner>
        <Conteiner title="Constellations">
          <Conteiner>
            <h1>Name: {info.constellation}</h1>
            <img
              src={`${api.getUri()}${pathName}/constellation`}
              alt={info.constellation}
              className={style.imgConstellation}
            ></img>
          </Conteiner>
          {info.constellations.map((e) => {
            return (
              <Conteiner>
                <img
                  src={`${api.getUri()}${pathName}/constellation-${
                    e.level
                  }`}
                  alt={e.name}
                ></img>
                <p>Name : {e.name}</p>
                <p>Unlock : {e.unlock}</p>
                <p>Description : {e.description}</p>
              </Conteiner>
            );
          })}
        </Conteiner>
      </>

    )
}

export {CharacterInfoDesktop, CharacterInfoMobile};
