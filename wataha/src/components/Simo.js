import React, {useState} from 'react'

const Simo = () => {
    const [result, setResult] = useState(2);
    const add = () => {
        setResult(prevState => prevState+1);
    }
    return(
        <>
        </>
    )
}

export default Simo;