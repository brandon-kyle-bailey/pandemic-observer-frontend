import React from 'react';

import StatisticsComponent from "./statistics.component";
import StayHomeComponent from './stayHome.component';


function HeaderComponent() {

    return (
        <div className="App">
        <header className="App-header flex-container">
            <StatisticsComponent className="right-component"/>
            <div className="virusLogo">
            </div>
            <StayHomeComponent className="left-component" />
        </header>
        </div>
    );
}

export default HeaderComponent;