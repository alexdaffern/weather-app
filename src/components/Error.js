import React from 'react';
import PropTypes from 'prop-types';


const Error = ({ message }) => (
    <div className="center" role="alert">
        {message}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
