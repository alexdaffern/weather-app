import React from 'react';
import PropTypes from 'prop-types';


const Error = ({ message }) => (
    <div className={` alert position-absolute`} role="alert">
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
