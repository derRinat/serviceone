import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

class Auth extends Component {

    componentWillMount() {
        const { authenticated, replace } = this.props;
        authenticated && replace('/');
    }

    render() {
        const { children } = this.props;

        return (
            <section className="auth">
                { children }
            </section>
        );
    }
}

const mapStateToProps = ({ auth, routing }) => ({
    authenticated: auth.authenticated,
    routing
});

export default connect(mapStateToProps, {
    replace
})(Auth);
