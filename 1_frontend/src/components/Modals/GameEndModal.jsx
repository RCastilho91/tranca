import React from 'react';
import { Link } from 'react-router-dom';

export default function GameEndModal(winner){
    
    var endingMessage = ''

    winner == "tie" ? endingMessage = "Empate! Iniciar outra rodada?" : endingMessage = `${ winner } ganhou! Iniciar outra rodada?`;

    return(
        <div className="game-ending-modal">
            <span className="game-ending-message">
                { endingMessage }
            </span>

            <div className="modal-controls">
                <button className="regular-button">
                    Zerar o placar
                </button>

                <Link className="negative-button" to="/">
                    Encerrar jogo
                </Link>
            </div>
        </div>
    )
}