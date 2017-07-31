import React from 'react';
import { connect } from 'react-redux';
import { closeAlert } from '../../actions/alertActions'; 
import DefaultAlert from '../Alerts/DefaultAlert'

const Alerts = ({ alerts, closeAlert }) => (
    <div className="alerts">

        { alerts.map((alert, index) =>
        <DefaultAlert
            key={ "alert-" + index }
            alert={ alert }
            onClose={ () => closeAlert(alert) }
        />
        )}

    </div>
);

const mapStateToProps = ({ alerts }) => ({ alerts });

export default connect(mapStateToProps, {
    closeAlert
})(Alerts);
