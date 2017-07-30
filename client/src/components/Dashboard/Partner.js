import React from 'react';

const Partner = ({ data: {name, login, city }}) => (
    <ul>
        <li>Name: { name }</li>
        <li>Login: { login }</li>
        <li>City { city }</li>
    </ul>
);

export default Partner;
