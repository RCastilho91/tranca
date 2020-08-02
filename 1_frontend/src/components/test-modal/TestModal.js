import React, { Component } from 'react';
import './teststyle.css';

export default class TestModal extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            showMe: true
        }
                
        this.handleStay = this.handleStay.bind(this);
        this.handleGo = this.handleGo.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    handleStay(){
        console.log("The DAMN train, CJ!");
        console.log(`ShowMe: ${ this.state.showMe }`);
        
        this.setState({
            showMe: false
        });

        console.log(`ShowMe: ${ this.state.showMe }`);
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
        const style = this.state.showMe ? { display: 'block' } : { display: 'none' };

        return(
            <div className="blackened" style={ style }>
                <button className="regular-button" onClick={ this.handleStay }>Disappear</button>
            </div>
        );
    }
}