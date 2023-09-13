import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('');

    
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            Através do useState é possível atualizar os valores de componentes de forma dinânmica
            <p>Exemplo de uso:</p>
            <code>
                const [count,setCount] = useState(0);
                <br></br><br></br>
                //Essa função setCount atualiza o valor de count
                setCount(1000)
                <br></br><br></br>
                //Faz uma atualização no valor de count 
            </code>
            <SectionTitle title="Exercicio#01" />
            Nesse exercício é realizado uma atualização  no valor exibido através da aplicação de <br></br>
            setCount como evento nos botões, aonde definimos para adicionar ou remover
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={()=>setCount(count+1)} className="btn">+1</button>
                    <button onClick={()=>setCount(count-1)} className="btn">-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício#02"/>
            Nesse exercício usamos um componente controlado par apoder interagir com a página, nele nós criamos um input e atribuimos un onCHange nele usando e.target.value para poder recebe-lo na página
            <input type="text" className='input' value={name} onChange={(e)=>setName(e.target.value)} />
            Inclusive podemos colocar um objeto que recebe o valor digitado pelo componente
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
