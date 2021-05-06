import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepBackward, faStepForward, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import './footer-player.css';

export const Player = ({ img }) => {

    const VolumeControl = ({ setPercentage }) => {

        // Refs
        const refTrack = useRef();
        const refKnob = useRef();

        // Dimensions
        const [trackWidth, setTrackWidth] = useState(0);
        const [knobWith, setKnobWidth] = useState(0);

        // Events
        const [isMoving, setMoving] = useState(false);
        const [hasClicked, setClicked] = useState(false);

        // Coordinates
        const [mouseAbsX, setMouseAbsX] = useState(0);
        const [mouseRelX, setMouseRelX] = useState();
        const [knobX, setKnobX] = useState(15);

        const reset = () => {
            setMoving(false);
            setClicked(false);
        }

        const setKnobPosition = (evt) => {
            var e = evt.target;
            var dim = e.getBoundingClientRect();
            var x = evt.clientX - dim.left;
            setKnobX(x - (knobWith / 2));
            setPercentage((knobX + (knobWith / 2)) * 100 / trackWidth);
        }

        const updMouseOnKnobCoordinates = (evt) => {
            var e = evt.target;
            var dim = e.getBoundingClientRect();
            var x = evt.clientX - dim.left;

            setMouseAbsX(evt.target.offsetLeft);
            setMouseRelX(x);
            setMoving(true);
        }

        useEffect(() => {
            if (isMoving && hasClicked) {
                if (mouseAbsX < (knobWith * -1 / 2) - 1) { // Evalúo el límite inferior
                    setKnobX((knobWith * -1 / 2));
                    reset();
                } else if (mouseAbsX > trackWidth - ((knobWith / 2) - 1)) { // Evalúo el límite superior
                    setKnobX(trackWidth - (knobWith / 2));
                    reset();
                } else {
                    setKnobX(mouseAbsX + mouseRelX - (knobWith / 2));
                    setPercentage((knobX + (knobWith / 2)) * 100 / trackWidth);
                }
            }
        }, [isMoving, hasClicked, mouseAbsX, mouseRelX, knobX, trackWidth, knobWith]);

        useEffect(() => {
            setTrackWidth(refTrack.current.offsetWidth);
            setKnobWidth(refKnob.current.offsetWidth);
        }, [refTrack]);

        return (
            <div
                className='control'>
                <div
                    ref={refKnob}
                    onMouseMove={updMouseOnKnobCoordinates}
                    onMouseDown={() => setClicked(true)}
                    onMouseUp={() => setClicked(false)}
                    onMouseLeave={reset}
                    style={{ left: knobX }} className='knob' />
                <div
                    ref={refTrack}
                    onMouseDown={setKnobPosition}
                    className='track' />
            </div>
        )
    }

    return (
        <div className='footer-player-container'>
            <img src={img} alt='artist-photo' className='artist-photo' />
            <div className='footer-player'>
                <div className='artist-info'>
                    <h4 className='clamp clamp-1'>Canción</h4>
                    <p className='clamp clamp-1'>Artista - Álbum</p>
                </div>
                <div className='main-buttons'>
                    <FontAwesomeIcon icon={faStepBackward} className='step' />
                    <div className='circle'>
                        <FontAwesomeIcon icon={faPlay} className='play' />
                    </div>
                    <FontAwesomeIcon icon={faStepForward} className='step' />
                </div>
                <div className='volume-controls'>
                    <VolumeControl setPercentage={(val) => console.log(val)} />
                    <FontAwesomeIcon icon={faVolumeOff} className='speaker' />
                </div>
            </div>
        </div>
    )
}

export default Player;