import style from "./Character.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Conteiner from "../../components/Conteiner";
import { useMediaQuery } from "react-responsive";

function CharactersListPage({ fetchData }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const pathName = useLocation().pathname;

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await fetchData(`${pathName}/all`);
        setInfo(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchInfo();
  }, [fetchData, pathName]);

  return (
    <>
      {info ? (
        <Conteiner title={pathName.slice(1).toUpperCase()}>
          These are all the playable characters at the moment, with{" "}
          {info.length} at the moment.
        </Conteiner>
      ) : (
        <p>Loading...</p>
      )}
      {isDesktopOrLaptop && (
        <div className={style.containerCharacters}>
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
              {info ? (
                info.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <Link to={`${pathName}/${e.id.toLowerCase()}`}>
                        <img
                          src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`}
                          alt={e.id}
                          className={style.icon}
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`${pathName}/${e.id.toLowerCase()}`}>
                        <p className={style.name}>{e.name}</p>
                      </Link>
                    </td>
                    <td>{e.rarity}</td>
                    <td className={style.visionCell}>
                      <Link to={`/elements`}>
                        <img
                          src={`${api.getUri()}/elements/${e.vision_key.toLowerCase()}/icon`}
                          alt={e.vision}
                          className={style.vision}
                        />
                      </Link>
                    </td>
                    <td>{e.weapon}</td>
                    <td>
                      <Link to={`/nations`}>
                        <img
                          src={`${api.getUri()}/nations/${e.nation.toLowerCase()}/icon`}
                          alt={e.nation}
                          className={style.nation}
                        />
                        <p className={style.nationName}>{e.nation}</p>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {isTabletOrMobile && (
        <div className={style.containerCharacters}>
          {info ? (
            info.map((e) => (
              <>
                <Link to={`${pathName}/${e.id.toLowerCase()}`}>
                  <img
                    src={`${api.getUri()}${pathName}/${e.id.toLowerCase()}/icon`}
                    alt={e.id.toLowerCase()}
                    className={style.icon}
                  />
                  <p className={style.name}>{e.name}</p>
                </Link>
              </>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </>
  );
}

export default CharactersListPage;
