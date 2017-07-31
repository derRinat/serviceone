import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import { loadPartner } from '../../actions/partnerActions';

class Main extends Component {

    componentWillMount() {
        const { authenticated, replace } = this.props;
        authenticated || replace('/auth');
    }

    componentDidMount() {
        const { authenticated, loadPartner } = this.props;
        authenticated && loadPartner();
    }

    render() {
        const { authenticated, children } = this.props;

        if (!authenticated) {
            return null;
        }

        return (
            <div className="main">
                { children } 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, {
    replace,
    loadPartner
})(Main);
