
const Counter = () => {
    const [count, setCount] = React.useState(0);

    const plus = () =>{
        setCount(count + 1);
    }

    const less = () =>{
        setCount(count - 1);
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