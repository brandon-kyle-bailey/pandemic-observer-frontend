import React, { useState, useEffect } from 'react';

function StatisticsComponent() {
    
    const notFoundObj = {
        "Country": "Not found", 
        "TotalConfirmed":"Not found", 
        "TotalDeaths":"Not found", 
        "TotalRecovered":"Not found"
    };    

    const [allCountries, setAllCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);       
    };

    const handleSubmit = event => {
        event.preventDefault();


        const matching_country = allCountries.filter((country) => country["Country"].toLowerCase() === searchTerm.toLowerCase());
        if(!matching_country || matching_country.length < 1) {
            setCurrentCountry({ ...notFoundObj, "Country": searchTerm});
        } else if(matching_country.length > 1) {
            console.log("Error: More than one country statistics found.")
        } else {
            setCurrentCountry(matching_country[0]);
        }
    };

    const handleKeyDown = event => {
        if(event.keyCode === 13){
            handleSubmit(event);
        }
    };

    useEffect(() => {
        fetch('/api/summary/all')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setAllCountries(data.data);
            setCurrentCountry(data.data[0]);
        });
    }, []);
    

    return (
    <div className="statistics-form">
        <ul>
            <li>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder={currentCountry["Country"]}
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    /> 
                    <input type="submit" value="Search" />
                </form>                
            </li>
            <li className="Country">Country: {currentCountry["Country"] || 'Global'}</li>
            <li className="TotalConfirmed">Cases: {currentCountry["TotalConfirmed"]}</li>
            <li className="TotalDeaths">Deaths: {currentCountry["TotalDeaths"]}</li>
            <li className="TotalRecovered">Recovered: {currentCountry["TotalRecovered"]}</li>            
        </ul>
    </div>        
    );
}

export default StatisticsComponent;