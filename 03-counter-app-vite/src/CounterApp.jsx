import PropTypes from 'prop-types'
import { useState } from 'react'


export const CounterApp = ({value})=>{
        
    const [ counter, setCounter ] = useState( value );
    const handleAdd = () => {
        setCounter( (c)=> c +1)
        // setCounter(counter +1); //la forma de arriba igual sirve de la misma forma
    }
    const handleSubstrac = () =>{
        setCounter(counter -1);
    }

    const handleReset = () => {
        setCounter(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstrac }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
