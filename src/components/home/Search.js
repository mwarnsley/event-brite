import React, { Component } from 'react';
import Results from './Results';

import map from 'lodash/map';
import Api from '../../api';

const api = new Api();

class Search extends Component {
    state = {
        category: '',
        events: [],
        eventName: '',
        formError: ''
    };
    updateCategories = event => {
        const category = event.target.value;
        this.setState({ category });
    };
    updateFormField = event => {
        const value = event.target.value;
        const formField = event.target.name;
        this.setState({ [formField]: value });
    };
    renderCategories = () => {
        const { categories } = this.props;
        return map(categories, category => (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
        ));
    };
    renderErrorMessage = () => {
        const { formError } = this.state;
        return (
            formError && (
                <div className="alert alert-danger" role="alert">
                    {formError}
                </div>
            )
        );
    };
    submitSearch = async () => {
        const { category, eventName } = this.state;
        if (!category || !eventName) {
            this.setState({
                formError: 'Please select a Name or City and a Category'
            });
        } else {
            const fetchEvents = await api.searchEvents(category, eventName);
            const events = fetchEvents.events;

            this.setState({
                events,
                formError: ''
            });
        }
    };
    render() {
        const { events } = this.state;
        return (
            <div className="container search-wrapper">
                <div id="search-events" className="card card-body">
                    <h1 className="text-center">
                        Search for Events by Name or City
                    </h1>

                    <div className="form-group">
                        <label htmlFor="event-name">
                            Search by Name or City
                        </label>
                        <input
                            className="form-control"
                            id="event-name"
                            name="eventName"
                            placeholder="Search By Name or City"
                            onChange={this.updateFormField}
                            type="text"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control"
                            id="category"
                            onChange={this.updateCategories}
                        >
                            <option value="">Select a category</option>
                            {this.renderCategories()}
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            className="mt-5 form-control btn btn-success"
                            id="submitBtn"
                            onClick={this.submitSearch}
                            type="submit"
                            value="Search"
                        />
                    </div>
                    {this.renderErrorMessage()}
                </div>
                <Results events={events} />
            </div>
        );
    }
}

export default Search;
