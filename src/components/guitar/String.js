import _ from 'lodash';
import React from 'react';
import './String.css';

import {
    FRETS } from '../../global/constants.js'

import { Fret } from './Fret.js';

class String extends React.Component {
    render() {
        const frets = _.map(FRETS, (fret, index) => {
            if(this.props.index === 0) {
                return (
                    <Fret
                        index = {index}
                        fret = {fret}
                        dotted = {'true'}
                    />
                )
            } else {
                return (
                    <Fret
                        key = {index}
                        fret = {fret}
                        dotted = {'false'}
                    />
                )
            }
        });
        return (
            <div className="string">
                {frets}
            </div>
        );
    }
}

export { String }