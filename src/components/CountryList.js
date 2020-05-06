import React from 'react'
import Country from './Country'
const CountryList = (props) => {
    return(
    <div className='container'>
          
            {/* {
            props.country.map(item => (
                
                <Country  key={item.name}
                        capital={item.capital}
                        name={item.name}
                        currencies={item.currencies}
                        population={item.population}
                        region={item.region}

                />


            ))
            } */}
    </div>
    )
}

export  default CountryList