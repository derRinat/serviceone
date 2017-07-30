import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Partner from '../components/Dashboard/Partner';
import Button from '../components/Form/Button';
import { logout } from '../actions/authActions';

class Dashboard extends Component {

    onLogout() {
        const { logout } = this.props;
        logout && logout();
    }

    render() {

        const { partner } = this.props;

        return (
            <div>
                <Partner data = { partner }/>
                <Button
                    title = "Logout"
                    onClick = { this.onLogout.bind(this) }
                />
            </div>

        );
    }
}

const mapStateToProps = ({ partner })  => ({
    partner
});

export default connect(mapStateToProps, {
    logout
})(Dashboard);
