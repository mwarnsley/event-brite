import React, { Component } from 'react';
import Api from '../../api';

import Search from './Search';

const api = new Api();

class Home extends Component {
    state = {
        categories: []
    };
    componentDidMount = async () => {
        const fetchCategories = await api.getCategories();
        this.setState({ categories: fetchCategories.categories });
    };
    render() {
        const { categories } = this.state;
        return (
            <div>
                <Search categories={categories} />
            </div>
        );
    }
}

export default Home;
