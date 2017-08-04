
import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme'; 

import SignUp from '../../src/containers/SignUp';
import SignUpForm from '../../src/components/Auth/SignUpForm';

describe('Container: SignUp', () => {

    let component;

    const properties = {
        store: configureStore()({}),
        onSubmit: jest.fn()
    }

    beforeAll(()=>{
        component = mount(
            <MemoryRouter>
                <SignUp { ...properties } />
            </MemoryRouter>
        )
    })

    it('renders itself and children without crashing', () => {
        expect(component.find('section').hasClass('signup')).toBe(true);
        expect(component.find('SignUpForm')).toHaveLength(1);
        expect(component.find('SignUpForm').props().onSubmit).toBeDefined();
    });
});
