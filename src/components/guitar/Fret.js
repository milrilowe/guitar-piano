import _ from 'lodash';
import React from 'react';
import './Fret.css';

import { Note } from '../Note.js';
import { NOTES } from '../../global/constants.js';

class Fret extends React.Component {
    fretIsNut = (fret) => {
        return fret === 'nut';
    }
    
    fretIsSingleDotted = (fret) => {
        if(fret.dotted === 'true') {
            fret = fret.fret
            return fret === '3' || fret === '5' || fret === '7' || fret === '9';
        }
    }

    fretIsDoubleDotted = (fret) => {
        if(fret.dotted === "true") {
            fret = fret.fret
            return fret === '12';
        }
    }

    render() {
        let keyClassName = "fret";

        const fretIsNut = this.fretIsNut(this.props.fret);
        const fretIsSingleDotted = this.fretIsSingleDotted(this.props);
        const fretIsDoubleDotted = this.fretIsDoubleDotted(this.props);

        if (fretIsNut) {
            keyClassName += " nut"
        }

        if(fretIsSingleDotted) {
            keyClassName += " singledot"
        }

        if(fretIsDoubleDotted) {
            keyClassName += " doubledot"
        }

        let fret;
        fret = (
            <div className = {keyClassName}></div>
        )
        return fret; 
    } 

    // render() {
    //     const notes = {
    //         return (
    //             <Note
    //                 note = {this.props.fret}
    //             />
    //         );
    //     });

    //     return (
            
    //         <div className = "note">
    //             {notes}
    //         </div>
    //     )
        
    // }    

}

export { Fret }