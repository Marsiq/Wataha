import React, {useState} from 'react'

const Simo = () => {
    const [result, setResult] = useState(2);
    const add = () => {
        setResult(prevState => prevState+1);
    }
    // stwórz dwa przyciski wywołujące dwie funkcje - inkrementacja i dekrementacja.
    // wynik wyświetl dynamicznie na stronie.
    return(
        <>
        </>
    )
}

export default Simo;