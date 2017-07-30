import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Form/Input';
import Button from '../Form/Button';

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
                <Input
                    name="email"
                    length={ 100 }
                    placeholder="Email"
                    value={ email }
                    onChange={ this.onChange.bind(this) }
                />

                <Input
                    name="password"
                    type="password"
                    length={ 100 }
                    placeholder="Password"
                    value={ password }
                    onChange={ this.onChange.bind(this) }
                />

                <Button
                    title="Login"
                    color="green"
                    disabled={ !this.isValid.bind(this) }
                    onClick={ this.onSubmit.bind(this) }
                />

            </form>
        )
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
