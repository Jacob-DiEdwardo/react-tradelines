import React from 'react';

import Tile from "../Tile/Tile";
import classes from "./Home.module.css";

const home = () => {
    return (
        <div className={classes.Home}>
            <h1>Authorized User Tradelines</h1>
            <div className={classes.Tiles}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
    );
}
 
export default home;