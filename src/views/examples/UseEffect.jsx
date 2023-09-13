import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle  from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    function verifyPair(number){
        if(number % 2 === 1){
            return 'impar';
        }
        else{
            return 'par'
        }
    }

    function calcFatorial(number){
        if(number < 0){
            return -1
        }
        else if(number === 0) return 1;

        return calcFatorial(number -1) * number
    }
    
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [number2, setNumber2] = useState(0);
    const [pairStatus, setPairStatus] = useState("par");


    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000){
document.title = 'Calma ai amigao kkk'
        }
    }, [fatorial])

    useEffect(function(){
        setPairStatus(verifyPair(number2))
    }, [number2])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            O useEffect é responsável por executar efeitos colaterais em outros componentes
            por exemplo, ao ser executada uma ação em um determinado componente, outro componente acaba tendo uma ação pré-determinada executada
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial}</span>
                <input type="number" className='
                input' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            </div>

            <SectionTitle title='Exercício #02'/>
            <div className="center">
            <div>
                <span className="text red ">Número </span>
                <span className="text">{number2} </span>
                <span className="text red">é: </span>
                <span className="text">{pairStatus}</span>
            </div>
            <input type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)} className="input" />
            </div>
        </div>
    )
}

export default UseEffect
