import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/Routes';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import * as serviceWorker from './serviceWorker';

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Navigation />
            <Routes />
            <Footer />
        </Fragment>
    </BrowserRouter>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
