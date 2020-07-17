import React, { Component } from 'react';
import './teststyle.css';

export default class TestModal extends Component {

    constructor(props){
        super(props);

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.state = {
            showMe: true
        }
    }

    handleStay(){
        this.setState = {
            showMe: false,
        }
    }

    handleGo(){
        return
    }

    handleModalOpen(){
        this.setState = {
            showMe: true
        }
    }

    render(){
            if( !this.state.showMe ){
                return null
            } else {
                return(
                    <div className="blackened">
                    </div>
                );
            }
        };
}

