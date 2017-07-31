import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/Common/PageHeader';
import LoginForm from '../components/Auth/LoginForm';

import { login } from '../actions/authActions';
import Locale from '../utils/locale';

class Login extends Component {

    onSubmit(email, password) {
        const { login } = this.props;
        login({email, password})
    }

    render() {
        return(
            <section className="page login">
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
