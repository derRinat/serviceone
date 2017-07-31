import React from 'react';
import Locale from '../../utils/locale';

const Partner = ({ data: {name, city, email }}) => (
    <table className="table table-bordered">
        <tbody>
            <tr>
                <td>{ Locale.trans('DASHBOARD_NAME') }</td>
                <td>{ name }</td>
            </tr>
            <tr>
                <td>{ Locale.trans('DASHBOARD_EMAIL') }</td>
                <td>{ email }</td>
            </tr>
            <tr>
                <td>{ Locale.trans('DASHBOARD_CITY') }</td>
                <td>{ city }</td>
            </tr>
        </tbody>
    </table>
);

export default Partner;
