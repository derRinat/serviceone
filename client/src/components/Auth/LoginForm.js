import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PageHeader from '../Common/PageHeader';
import Input from '../Form/Input';
import Button from '../Form/Button';

import Locale from '../../utils/locale';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange(field, value) {
        this.setState({...this.state, [field]:value});
    }

    isValid() {
        const { email, password } = this.state;
        return email.length && password.length;
    }

    onSubmit() {
        const { onSubmit } = this.props;
        const { email, password } = this.state;

        onSubmit(email, password);
    }

    render() {

        const { email, password } = this.state;

        return(
            <form>
                <PageHeader title={ Locale.trans('LOGIN_TITLE')} />

                <Input
                    name="email"
                    length={ 100 }
                    placeholder={ Locale.trans('LOGIN_EMAIL') }
                    help={ Locale.trans('LOGIN_EMAIL_HELP') }
                    value={ email }
                    onChange={ this.onChange.bind(this) }
                />

                <Input
                    name="password"
                    type="password"
                    length={ 100 }
                    placeholder={ Locale.trans('LOGIN_PASSWORD') }
                    help={ Locale.trans('LOGIN_PASSWORD_HELP') }
                    value={ password }
                    onChange={ this.onChange.bind(this) }
                />

                <Button
                    title={ Locale.trans('LOGIN_BUTTON') }
                    color="green"
                    disabled={ !this.isValid() }
                    onClick={ this.onSubmit.bind(this) }
                />

                <small>
                    <Link to="/auth/signup">
                        { Locale.trans('SIGN_UP_LINK') }
                    </Link>
                </small>
            </form>
        )
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
