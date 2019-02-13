import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../shared/EventCard';

import map from 'lodash/map';

const Results = ({ events }) => {
    return (
        <div id="result" className="row mt-5">
            {map(events, event => (
                <div className="col-md-4 mt-4" key={event.id}>
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
};

Results.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object)
};

export default Results;
