import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

import Auth from './Layout/Auth';
import Main from './Layout/Main';

import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';

const Routers = ({ history }) => (

    <Router history={ history }>
        <Switch>

            <Route path="/auth">
                <Auth>
                    <Switch>
                        <Route exact path="/auth" component={ Login }/>
                    </Switch>
                </Auth>
            </Route>

            <Route path="/">
                <Main>
                    <Switch>
                        <Route exact path="/" component={ Dashboard }/>
                    </Switch>
                </Main>
            </Route>

        </Switch>
    </Router>
);

Routers.propTypes = {
    history: PropTypes.object.isRequired
};

export default Routers;
