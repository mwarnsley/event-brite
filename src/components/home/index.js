import React from 'react';
import Api from '../../api';

const Home = () => {
    const api = new Api();
    console.log('Api: ', api);
    return <div>HOME PAGE</div>;
};

export default Home;
