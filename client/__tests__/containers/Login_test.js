
import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Login from '../../src/containers/Login';
import LoginForm from '../../src/components/Auth/LoginForm';

describe('Container: Login', () => {

    let component;

    const properties = {
        store: configureStore()({}),
        onSubmit: jest.fn(),
    }

    beforeAll(()=>{
        component = mount(
            <MemoryRouter>
                <Login { ...properties } />
            </MemoryRouter>
        )
    })

    it('renders itself and children without crashing', () => {
        expect(component.find('section').hasClass('login')).toBe(true);
        expect(component.find('LoginForm')).toHaveLength(1);
        expect(component.find('LoginForm').props().onSubmit).toBeDefined();
    });
});
