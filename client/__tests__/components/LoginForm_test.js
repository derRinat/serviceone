
import React from 'react';
import configureStore from 'redux-mock-store';
import { createBrowserHistory } from 'history'
import { mount, shallow } from 'enzyme';

import LoginForm from '../../src/components/Auth/LoginForm';


describe('Component: LoginForm', () => {

    let component;

    const onSubmit = jest.fn();
    const history = createBrowserHistory();

    const properties = {
        onSubmit,
        history
    };

    beforeEach(()=>{
        component = shallow(
            <LoginForm { ...properties } />
        );
    })

    /** **/
    it('renders without crashing', () => {
        expect(component.find('form')).toHaveLength(1);
        expect(component.find({name: 'email'})).toHaveLength(1);
        expect(component.find({name: 'password'})).toHaveLength(1);
        expect(component.find('Button')).toHaveLength(1);

        const state = {
            email: '',
            password: ''
        };

        expect(component.state()).toEqual(state);
    });

    /** **/
    it('login button is disabled by default', () => {
        expect(component.find('Button').prop('disabled')).toBe(true);
    })

    /** **/
    it('should change state on Email field changes', () => {

        const email = component.find({name: 'email'}).first();
        const value = "test@test.com";

        email.simulate('change', "email", value);
        expect(component.state('email')).toBe(value);
    });

    /** **/
    it('should change state on Password field changes', () => {

        const email = component.find({name: 'password'}).first();
        const value = "trustedpassword";

        email.simulate('change', "password", value);
        expect(component.state('password')).toBe(value);
    });

    /** **/
    it('should disable Login button by empty email or password', () => {

        const email    = component.find({name: 'email'}).first();
        const password = component.find({name: 'password'}).first();

        email.simulate('change', "email", 'test@test.com');
        password.simulate('change', "password", '');

        expect(component.find('Button').first().prop('disabled')).toBe(true);

        email.simulate('change', "email", '');
        password.simulate('change', "password", 'trustedpassword');

        expect(component.find('Button').first().prop('disabled')).toBe(true);
    });

    /** **/
    it('should enable Login button by non-empty email and password', () => {
        const email    = component.find({name: 'email'}).first();
        const password = component.find({name: 'password'}).first();

        email.simulate('change', "email", 'test@test.com');
        password.simulate('change', "password", 'trustedpassword');

        expect(component.find('Button').first().prop('disabled')).toBe(false);
    });

    /** what about spy??? **/
    it('onSubmit should be called on button click', () => {
        const button = component.find('Button').first();

        button.simulate('click');
        expect(onSubmit).toBeCalled();
    })
});
