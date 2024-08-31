import style from './PrincipalContainer.module.css'

function PrincipalContainer(props){


    return(
        <main>
            <section className={style.principal}>
            {props.children}
            </section>

        </main>
    )
}

export default PrincipalContainer;