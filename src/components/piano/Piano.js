import _ from 'lodash';
import React from 'react';

import './Piano.css';

import { Key } from './Key.js';
import {
    NOTES,
    VALID_KEYS,
    KEY_TO_NOTE } from '../../global/constants.js'


class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    handleKeyDown = (event) => {
        if(event.repeat) {
            return;
        }

        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if(!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys
        });

    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if(index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 0)
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key = {index}
                    note = {note}
                    pressedKeys = {this.state.pressedKeys}
                />
            );
            console.log(this.prop);
        });

        return (
            
            <div className = "piano">
                {keys}
            </div>
        )
        
    }    
}

export { Piano }