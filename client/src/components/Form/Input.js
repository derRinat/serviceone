import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            valid: (props.value && !!props.value.length)
        };
    }

    get className() {
        const { error, valid } = this.state;
        const { className, validate } = this.props;

        return "form-group"
            + (className ? " " + className : "")
            + (error ? " error" : "")
            + (valid ? " valid" : "");
    }

    _onChange(event) {
        const { value }  = event.target;
        const { name, onChange } = this.props;

        onChange && onChange(name, value);
    }

    _onBlur(event) {

        const value = event.target.value.trim();
        const state = {};

        value.length
            ? state.valid = true
            : state.error = true;

        this.setState(state);
    }

    _onFocus(event) {
        event.target.placeholder = "";

        this.setState({
            error: false,
            valid: false
        });
    }

    render() {
        const { name, placeholder, value, type, length, help, errorMsg } = this.props;
        const { error } = this.state;

        const params = {
            name,
            placeholder,
            value,
            type,
            maxLength: length
        };

        return (
            <div className={ this.className }>
                <input
                    { ...params }
                    onChange={ this._onChange.bind(this) }
                    onFocus={ this._onFocus.bind(this) }
                    onBlur={ this._onBlur.bind(this) }
                />

                { help &&
                <div className="help">{ help }</div>
                }

                {error && errorMsg &&
                <div className="error">{ errorMsg }</div>
                }
            </div>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    length: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    help: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    errorMsg: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    length: 255
};

export default Input;
