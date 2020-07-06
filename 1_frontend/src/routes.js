import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GameInitiation from './pages/game-init';
import ScoringTwo from './pages/scoring-two';
import ScoringThree from './pages/scoring-three';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ GameInitiation } />
                <Route path="/scoring-two" component={ ScoringTwo } />
                <Route path="/scoring-three" component={ ScoringThree } />
            </Switch>
        </BrowserRouter>
    );
}