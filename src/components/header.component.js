import React from 'react';
import virus from '../img/virus.png';

import StatisticsComponent from "./statistics.component";
import StayHomeComponent from './stayHome.component';


function HeaderComponent() {

    return (
        <div className="App">
        <header className="App-header">
            {/* <StatisticsComponent className="right-component"/> */}
            <img src={virus} className="App-virus" alt="Coronavirus" />
            {/* <StayHomeComponent className="left-component" /> */}
        </header>
        </div>
    );
}

export default HeaderComponent;