import React from 'react';
import _ from 'lodash';

import './Key.css';
import { NOTE_TO_KEY } from '../../global/constants.js'

class Key extends React.Component {
    noteIsSharp = (note) => {
        return note.length > 2;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note])
    }

    render() {
        let keyClassName = "key";

        const noteIsSharp = this.noteIsSharp(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this. props.pressedKeys);

        if (noteIsSharp) {
            keyClassName += " sharp"
        }

        if(keyIsPressed) {
            keyClassName += " pressed";
        }

        let key;
        key = (
            <div className = {keyClassName}></div>
        )
        return key; 
    } 
}

export { Key };