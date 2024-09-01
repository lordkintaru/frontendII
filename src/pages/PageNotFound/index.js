import ConteinerText from "../../components/ConteinerText";


function PageNotFound(){



    return(
        <>
            <ConteinerText title='Oops! Page Not Found'>It looks like you’re lost! The page you’re looking for doesn’t exist or has been moved.</ConteinerText>
            <img src='gifNotFound.gif' alt='Paimon Confuse'></img>
        </>
    )
}

export default PageNotFound;