import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';

const Routers = ({ history }) => (

    <Router history={ history }>
        <Switch>

            <Route path="/">
                <Main />
            </Route>

        </Switch>
    </Router>
);

Routers.propTypes = {
    history: PropTypes.object.isRequired
};

export default Routers;
