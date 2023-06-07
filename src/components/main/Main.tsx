import React from 'react';
import TopInfo from "../topInfo/TopInfo";
import Navigation from "../topInfo/Navigation";
import Calls from "./Calls";

function Main() {
    return (
        <div className="main">
            <TopInfo/>
            <Navigation/>
            <Calls/>
        </div>
    );
}

export default Main;