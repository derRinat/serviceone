import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PageHeader from '../Common/PageHeader';
import Button from '../Form/Button';
import Input from '../Form/Input';

import Locale from '../../utils/locale';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            city: ''
        }
    }

    onChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    onSubmit() {
        const { onSubmit } = this.props;
        onSubmit && onSubmit(this.state);
    }

    isValid() {
        const { name, email, password, city } = this.state;

        return name.length &&
               email.length &&
               password.length &&
               city.length;
    }

    render() {
        const { name, email, password, city } = this.state;

        return(
            <form>
                <PageHeader title= { Locale.trans('SIGN_UP_TITLE')}/>

                <Input
                    name="name"
                    length={ 100 }
                    placeholder={ Locale.trans('SIGN_UP_NAME') }
                    help={ Locale.trans('SIGN_UP_NAME_HELP') }
                    value={ name }
                    onChange={ this.onChange.bind(this) }
                />

                <Input
                    name="email"
                    length={ 100 }
                    placeholder={ Locale.trans('SIGN_UP_EMAIL') }
                    help= { Locale.trans('SIGN_UP_EMAIL_HELP') }
                    value={ email }
                    onChange={ this.onChange.bind(this) }
                />

                <Input
                    name="password"
                    type="password"
                    length={ 100 }
                    placeholder={ Locale.trans('SIGN_UP_PASSWORD') }
                    help= { Locale.trans('SIGN_UP_PASSWORD_HELP') }
                    value={ password }
                    onChange={ this.onChange.bind(this) }
                />

                <Input
                    name="city"
                    length={ 100 }
                    placeholder={ Locale.trans('SIGN_UP_CITY') }
                    help= { Locale.trans('SIGN_UP_CITY') }
                    value={ city }
                    onChange={ this.onChange.bind(this) }
                />

                <Button
                    title={ Locale.trans('SIGN_UP_BUTTON') }
                    color="blue"
                    disabled={ !this.isValid() }
                    onClick={ this.onSubmit.bind(this) }
                />

                <small>
                    <Link to="/auth">{ Locale.trans('LOGIN_LINK') }</Link>
                </small>
            </form>
        )
    }
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
