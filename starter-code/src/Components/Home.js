import React from 'react';
import CountryLink from './CountryLink';

const Home = ({data}) => 
    <div className="list-group">
        {data.map( (country, i) => 
            <CountryLink 
                key={i} 
                countryData={country} 
                id={country.cca3}
            >{country.name.common}</CountryLink>)}
    </div>

export default Home;