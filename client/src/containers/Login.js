import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/Common/PageHeader';
import LoginForm from '../components/Auth/LoginForm';

import { login } from '../actions/authActions';

class Login extends Component {

    onSubmit(email, password) {
        const { login } = this.props; 
        login({email, password})
    }

    render() {
        return(
            <section>
                <PageHeader title="Login form" />
                <LoginForm
                    onSubmit={ this.onSubmit.bind(this) }
                />
            </section>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null, {
    login
})(Login);
