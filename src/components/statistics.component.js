import React, { useState, useEffect } from 'react';

function StatisticsComponent() {
    const [statState, setStatState] = useState({});
    
    useEffect(() => {
        fetch('https://pandemic-observer-backend.herokuapp.com/summary/test')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            setStatState(data.data);
        });        
    }, []);


    return (
    <div className="statistics-list">
        <ul>
            <li className="TotalConfirmed">Confirmed cases: {statState["TotalConfirmed"]}</li>
            <li className="TotalDeaths">Deaths: {statState["TotalDeaths"]}</li>
            <li className="TotalRecovered">Recovered: {statState["TotalRecovered"]}</li>            
        </ul>
        
    </div>        
    );
}

export default StatisticsComponent;