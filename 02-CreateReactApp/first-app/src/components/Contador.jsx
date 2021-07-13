import React from 'react'

const Contador = ({start, factor}) => {
    const [count, setCount] = React.useState(start);

    const plus = () =>{
        setCount(count + factor);
    }

    const less = () =>{
        setCount(count - factor);
    }
    
    return(
        <div>
        <h1 className={count >= 0 ? 'mayor':'menor'}>
            Contador: {count}
        </h1>

        <button onClick={plus}>Aumentar</button>
        <button onClick={less}>Disminuir</button>
        </div>
        
    );
}

export default Contador
