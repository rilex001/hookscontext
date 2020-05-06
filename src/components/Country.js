import React from 'react'

const Country = props => {
    return(
    <div className='content'>

            <div className='header'>{props.country.name}</div>
            <p>Capital city: {props.country.capital}</p>
            <p>Currencies: {props.country.currencies}</p>
            <p>Population: {props.country.population / 1000000} millions</p>
            <p>Region: {props.country.region}</p>
    </div>
    )   
}

export default Country