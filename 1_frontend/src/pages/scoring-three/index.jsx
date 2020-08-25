import React,{ Component } from 'react';
import '../../global.css'
import './styles.css'
import logo from '../../assets/Tranca transparent.png'
import ThreeTeamTable from '../../components/ThreeTeamTable';
import TestModal from '../../components/test-modal/TestModal';
export default class ScoringThree extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            modalVisibility: false,
        }

        this.handleLogo = this.handleLogo.bind(this);
    }

    handleLogo() {
        this.setState({
            modalVisibility: true
        })
    }
    
    render(){
        return(
            <div className="container">
                <TestModal showMe={ this.state.modalVisibility } />
                <div className="header">
                    <div className="left-header">
                        <img className="top-left-logo" onClick={ () => this.handleLogo.bind(this) } src={ logo } alt="Tranca!" />
                    </div>
                    <div className="right-header">
                        <span className="target-score-title">Target score</span>
                        <span className="target-score-value">5,000</span>
                    </div>
                </div>
    
                <ThreeTeamTable />
            </div>
        );
    }
}