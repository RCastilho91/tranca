import React from 'react';
import { Link } from 'react-router-dom';

export default function GameEndModal(props){
    
    var endingMessage = ''

    props.winningTeam === "tie" ? endingMessage = "Empate! Iniciar outra rodada?" : endingMessage = `${ props.winningTeam } ganhou! Iniciar outra rodada?`;

    return(
        <div className="game-ending-modal">
            <span className="game-ending-message">
                { endingMessage }
            </span>

            <div className="modal-controls">
                <button className="regular-button" onClick={ props.restartGame }>
                    Zerar o placar
                </button>

                <Link className="negative-button" to="/">
                    Encerrar jogo
                </Link>
            </div>
        </div>
    )
}