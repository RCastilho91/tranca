import React, { Component } from 'react';
import './teststyle.css';

export default class TestModal extends Component {

    constructor(props){
        super(props);
        
        this.handleStay = this.handleStay.bind(this);
        this.handleGo = this.handleGo.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        
        this.state = {
            showMe: false
        }
    }

    handleStay(){
        console.log("The DAMN train, CJ!");
        
        this.setState({
            showMe: false
        });
    }

    handleGo(){
        return
    }

    handleModalOpen(){
        
        console.log("The damn train, CJ!");
        
        this.setState({
            showMe: true
        });
    
    }

    render(){
        const style = this.state.showMe ? { display: 'none' } : { display: 'block' };

        return(
            <div className="blackened" style={ style }>
                <button className="regular-button" onClick={ this.handleStay }>Disappear</button>
            </div>
        );
    }
}