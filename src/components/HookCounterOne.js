import React, {useState, useEffect} from 'react'

export default function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <>
            <input 
                type='text'
                value={name}
                placeholder='name'
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count +1)}>Click {count} times</button>
            <button onClick={() => setCount(0)}>Refresh</button>
        </>
    )
}
