import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseRef = (props) => {

    const [value1, setValue1] = useState("");

    const count = useRef(0)

    useEffect(function () {
        count.current = count.current + 1
    }, [value1])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <p>  O use ref conta as mudanças realizadas na página, ele retorna um objeto com propriedade 'current'
                <br></br>
                Exemplo de uso:
                <code>
                    const valor = useRef(0)
                </code>
                Para cada atualização que ocorre na página o valor de useState pode ser manipulado
            </p>
            <SectionTitle title='Exercicio#01' />
            <div className="center">

                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>


                <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} className="input" />
            </div>

            
        </div>
    )
}

export default UseRef
