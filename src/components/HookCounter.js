import React, {useState} from 'react'


export const HookCounter = () => {
    const [counter, setcounter] = useState(0)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setcounter(prevcounter => prevcounter + 1)
        }
    }
    return (
        <>
        <br></br>
         <button onClick={() => setcounter(prevcounter => prevcounter + 1)}>Increase</button>  
        <button onClick={() => setcounter(prevcounter => prevcounter - 1)}>Decrement</button>
        <button onClick={() => setcounter(0)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>
        <div>{counter}</div>
        </>
    )
}
