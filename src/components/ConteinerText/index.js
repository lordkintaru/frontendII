import style from './ConteinerText.module.css'


function ConteinerText(props){

    return(
        <div className={style.conteinerText}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.text}>{props.children}</p>
        
        </div>
    )

}

export default ConteinerText;