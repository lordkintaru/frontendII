import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Conteiner from "../../components/Conteiner";
import style from "./CharacterPage.module.css";
import { useMediaQuery } from "react-responsive";
import { CharacterInfoDesktop, CharacterInfoMobile } from "../../components/CharacterInfo";

function CharacterPage({ fetchData }) {
  //const { id } = useParams();
  //pathName tem a mesma chamada de api, por isso esta sendo ultilizada ao inves do id;
  const pathName = useLocation().pathname;
  const [info, setInfo] = useState(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await fetchData(pathName);
        setInfo(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchInfo();
  }, [fetchData, pathName]);

 
  return (
    <>
      {isDesktopOrLaptop &&
        (info ? (
          <CharacterInfoDesktop info={info} api={api} pathName={pathName} />
        ) : (
          <p>Loading...</p>
        ))}

      {isTabletOrMobile &&
        (info ? (
          <CharacterInfoMobile info={info} api={api} pathName={pathName} />

        ) : (
          <p>Loading...</p>
        ))}
    </>
  );
}

export default CharacterPage;
