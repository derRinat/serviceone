import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/Common/PageHeader';
import Partner from '../components/Dashboard/Partner';
import Button from '../components/Form/Button';
import { logout } from '../actions/authActions';

import Locale from '../utils/locale';

class Dashboard extends Component {

    onLogout() {
        const { logout } = this.props;
        logout && logout();
    }

    render() {

        const { partner } = this.props;
        const { name } = partner;

        return (
            <section className="page">
                <div className="personal">
                    <PageHeader title={ Locale.trans('DASHBOARD_WELCOME', {username: name })}/>
                    <Partner data = { partner }/>
                    <Button
                        title = "Logout"
                        color="red"
                        onClick = { this.onLogout.bind(this) }
                    />
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ partner })  => ({
    partner
});

export default connect(mapStateToProps, {
    logout
})(Dashboard);
