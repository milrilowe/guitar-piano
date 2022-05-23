import _ from 'lodash'
import React from 'react';

import {
    STRINGS } from '../../global/constants.js'

import { String } from './String.js'

import './Guitar.css';

class Guitar extends React.Component {
    render() {
        const strings = _.map(STRINGS, (string, index) => {
            return (
                <String
                    index = {index}
                    string = {string}
                />
            );
        });

        return (
            <div className = "guitar">
                {strings}
            </div>
        )
    }
}

export { Guitar }