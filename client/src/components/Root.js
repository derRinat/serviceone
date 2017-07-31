import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Alerts from "./Layout/Alerts";
import Routers from './Routers';

const Root = ({ store, history }) => (

    <Provider store={ store }>
        <div>
            <Routers history={ history } store={store}/>
            <Alerts />
        </div>
    </Provider>

);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
