import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value } ) => {
    
    const [counter, setCounter] = useState( value )

    const handleApp = () => {
    //console.log(event)
    //setCounter(counter + 1);
    setCounter( (c) => c + 1  );
    }

    const handleSubstract = () => {
        setCounter( (r) => r - 1 );
    }

    const handleReset = () => {
        setCounter(value);
    }

    return(
        <>
        <h1>CounterApp </h1>
        <h2> {counter} </h2>

        <button onClick={  handleApp  } > +1 </button>
        <button onClick={ handleSubstract } > -1 </button>        
        <button onClick={ handleReset } > Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    //title: PropTypes.string,
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    //title: 'No hay título',
    value: 'No hay subtítulo',
}
