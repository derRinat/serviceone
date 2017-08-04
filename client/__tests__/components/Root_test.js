
import React from 'react';
import configureStore from 'redux-mock-store';
import { createBrowserHistory } from 'history'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Root from '../../src/components/Root';

describe('Component: Root', () => {

    const properties = {
        store: configureStore()({}),
        history: createBrowserHistory()
    }

    it('renders without crashing', () => {
        const component = shallow(
            <Root { ...properties }/>
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});
