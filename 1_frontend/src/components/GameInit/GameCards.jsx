import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GiSpades, GiHearts } from "react-icons/gi";
import '../styles.css';

class NewGameTwo extends Component {
    render(){
        return(
            <Link className="game-card-link" to="/scoring-two">
                <div className="new-game-card">
                    <table className="upper-card-suit-number">
                        <tr>2</tr>
                        <tr><GiSpades /></tr>
                    </table>

                    <table className="inner-game-card">
                        <tr className="card-row">
                            <td className="card-cell"></td>
                            <td className="card-cell" rowspan="2"><GiSpades  size={ 15 }/></td>
                            <td className="card-cell"></td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell"></td>
                            <td className="card-cell"></td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-text-cell" colspan="3">TWO</td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-text-cell" colspan="3">TEAMS</td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-text-cell" colspan="3">OR PEOPLE</td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell-inverted"></td>
                            <td className="card-cell-inverted" rowspan="2"><GiSpades size={ 15 } /></td>
                            <td className="card-cell-inverted"></td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell-inverted"></td>
                            <td className="card-cell-inverted"></td>
                        </tr>
                    </table>
                    <table className="lower-card-suit-number">
                        <tr><GiSpades className="outer-suit-inverted" /></tr>
                        <tr className="inverted">2</tr>
                    </table>
                </div>
            </Link>
        )}
}

class NewGameThree extends Component {
    render(){
        return(
            <Link className="game-card-link-red" to="/scoring-three">
                <div className="new-game-card">
                    <table className="upper-card-suit-number">
                        <tr className="red-suit">3</tr>
                        <tr><GiHearts color={ 'red' } /></tr>
                    </table>
                    
                    <table className="inner-game-card">
                        <tr className="card-row">
                            <td className="card-cell" rowspan="2"><GiHearts  size={ 15 } color={ 'red' }/></td>
                            <td className="card-cell"></td>
                            <td className="card-cell" rowspan="2"><GiHearts  size={ 15 } color={ 'red' }/></td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell"></td>
                            <td className="card-cell"></td>
                        </tr>

                        <tr className="card-row">
                            <td className="red-card-text-cell" colspan="3">THREE</td>
                        </tr>

                        <tr className="card-row">
                            <td className="red-card-text-cell" colspan="3">TEAMS</td>
                        </tr>

                        <tr className="card-row">
                            <td className="red-card-text-cell" colspan="3">OR PEOPLE</td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell-inverted" rowspan="2"><GiHearts size={ 15 } color={ 'red' }/></td>
                            <td className="card-cell-inverted"></td>
                            <td className="card-cell-inverted" rowspan="2"><GiHearts size={ 15 } color={ 'red' }/></td>
                        </tr>

                        <tr className="card-row">
                            <td className="card-cell-inverted"></td>
                        </tr>
                    </table>
                    <table className="lower-card-suit-number">
                        <tr><GiHearts className="outer-suit-inverted" color={ 'red' } /></tr>
                        <tr className="red-inverted">3</tr>
                    </table>
                </div>
            </Link>
        );
    }
}

export {
    NewGameTwo,
    NewGameThree,
}