import React  from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, children }) => (

    <div className="page-header">
        { children }
        <h2>{ title }</h2>
    </div>

);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageHeader;
