import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUpForm from '../components/Auth/SignUpForm';
import { signup } from '../actions/authActions';

import Locale from '../utils/locale';

class SignUp extends Component {

    onSubmit(data) {
        const { signup } = this.props;
        signup(data)
    }

    render() {
        return(
            <section className="page signup">
                <SignUpForm
                    onSubmit={ this.onSubmit.bind(this) }
                />
            </section>
        )
    }
}

SignUp.propTypes = {
    signup: PropTypes.func.isRequired
};

export default connect(null, {
    signup
})(SignUp);
