import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <h1>
         Hooks X - {x} Y - {y}   
        </h1>
    )
}

export default HookMouse
