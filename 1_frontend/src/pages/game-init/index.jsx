import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import { NewGameTwo, NewGameThree } from '../../components/GameInit/GameCards';

export default function GameInitiation(){
    return (
        <div className="container">
            <div className="header">
                <Link className="img" to="/"><img className="logo-full-center" src={ logo } alt="Tranca!" /></Link>
            </div>

            <div className="button-container">
                <NewGameTwo />
                <NewGameThree />
            </div>
        </div>
    );
}