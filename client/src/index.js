import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'

import Root from './components/Root';
import configureStore from './configureStore';
import Locale from './utils/locale';

/** load styles **/
import './styles';

/** Init i18n **/
Locale.init('en');

/** Create store **/
const history = createBrowserHistory();
const store = configureStore(history);

/** Run application **/
ReactDOM.render(
    <Root
        store={ store }
        history={ history }
    />,
    document.getElementById('root')
);
