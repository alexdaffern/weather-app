import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit} className = "center">
            <input
                aria-label="location"
                type="text"
                className={` form-control`}
                placeholder="Search for a city"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" class="search-button" onClick={onSubmit}>
                Submit
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
