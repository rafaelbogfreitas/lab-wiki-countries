import React from 'react'
import Home from './Home';

export default function CountryDetail({data, match}) {
    
    let id = match ? match.params.id : 'BRA'
    let [countryToDisplay] = data.filter(country => country.cca3 === id);
    let { name, capital, area, borders } = countryToDisplay;

    return (
        <>
            <div className="col-7">
                <h1>{name.common}</h1>
                <table className="table">
                    <thead />
                    <tbody>
                        <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{capital}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>{area} km <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.length > 0 ? borders.map(border =>  
                                <li> 
                                    <a href={`/${border}`}>
                                        {data.filter(country => country.cca3 === border)[0].name.common}
                                    </a>
                                </li>):
                                <li>No borders</li>}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-5">
                <Home data={data}/>
            </div>
        </>
    )
}


