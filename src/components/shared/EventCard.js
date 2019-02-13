import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img
                    alt="event"
                    className="img-fluid mb-2"
                    src={event.logo ? event.logo.url : ''}
                />
            </div>
            <div className="card-body">
                <div className="card-text">
                    <h2 className="text-center card-title">
                        {event.name.text}
                    </h2>
                    <p className="lead text-info">Event Information:</p>
                    <p>{event.description.text.substring(0, 200)}...</p>
                    <span className="badge badge-primary">
                        Capacity: {event.capacoty}
                    </span>
                    <span className="badge badge=secondary">
                        Date & Time: ${event.start.local}
                    </span>
                    <a
                        className="btn btn-primary btn-block mt-4"
                        href={event.url}
                        target="_blank"
                    >
                        Get Tickets
                    </a>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.object.isRequired
};

export default EventCard;
