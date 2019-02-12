import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';

const EventBrite = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/" />
        </Switch>
    );
};

export default EventBrite;
