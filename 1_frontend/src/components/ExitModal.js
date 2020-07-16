import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class ExitModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hideExitModal: false
        };

        this.handleStay = this.handleStay.bind(this);
        this.handleOpen = this.handleOpen.bind(this);

        this.exitModalInstance = (
            <div className="exit-modal-content">
                <div className="exit-modal-content-text">
                    This action will take you back to the initial screen and reset your progress.
                    <p />Are you sure you want to proceed?
                </div>

                <div className="exit-modal-controls">
                    <button className="stay-in-game" onClick={ this.handleStay }>Stay here</button>
                    <button className="negative-button">Go to initial screen</button>
                </div>
            </div>
        );

        this.displayInstance = (
            <button className="regular-button" onClick={ this.handleOpen }>Show me again</button>
        );
    }

    handleStay() {
        this.setState({ hideExitModal: true });
    }

    handleOpen() {
        this.setState({ hideExitModal: false });
    }

    render() {
        const style = this.state.hideExitModal ? { display: 'none' } : { display: 'block' };

        return(
            <div className="exit-modal" style={ style }>
                { this.exitModalInstance }
            </div>
        );
    }
}

export default ExitModal