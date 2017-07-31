import React  from 'react';
import PropTypes from 'prop-types';
 
const DefaultAlert = ({ alert, onClose }) => (

    <div className={ "alert default " + alert.type }>
        <i className="close fa fa-times" onClick={ onClose }/>
        <h5>
            { ('success' === alert.type) &&
            <i className="icon fa fa-check-circle"/>
            }

            { ('error' === alert.type) &&
            <i className="icon fa fa-warning"/>
            }
            { alert.title }
        </h5>
        <p>{ alert.message }</p>
    </div>

);

DefaultAlert.propTypes = {
    alert: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default DefaultAlert;
