import React, {useState} from 'react'
import style from './styles/index.module.css'
function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
    return (
        <div className={style.containter}>
            <div className={style["containter-number"]} >{count}</div>
            <div className={style["containter-button"]}>
                <button onClick={reset}>reset</button>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        </div>
    )
}

export default Counter