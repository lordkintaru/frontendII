import style from './Conteiner.module.css'


function Conteiner(props){

    return(
        <div className={style.conteinerText}>
            <h1 className={style.title}>{props.title}</h1>
            {props.children}
        
        </div>
    )

}

export default Conteiner;