import React, { useState } from 'react'

export const HookCounterObject = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
           <form>
                <input 
                    type='text' 
                    placeholder='first name'
                    value={name.firstName} 
                    onChange={(e) => setName({...name, firstName: e.target.value}) }
                />
                <input 
                    type='text'
                    placeholder='last name' 
                    value={name.lastName} 
                    onChange={(e) => setName({...name, lastName: e.target.value}) }
                />

                <h2>Your fist name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
           </form> 
    )
}
