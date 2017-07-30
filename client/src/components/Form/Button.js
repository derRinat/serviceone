import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    get buttonClass() {
        const { color, disabled, className } = this.props;

        return "btn"
            + (color ? " btn-" + color : "")
            + (disabled ? " btn-disabled" : "")
            + (className ? " " + className : "");
    }

    _onClick() {
        const { onClick } = this.props;
        onClick && onClick()
    }

    render() {
        const { title, type, disabled } = this.props;

        return (
            <button
                type={ type }
                className={ this.buttonClass }
                onClick={ this._onClick.bind(this) }
                disabled={ disabled }
            >
                { title }
            </button>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    disabled: false
};

export default Button;
