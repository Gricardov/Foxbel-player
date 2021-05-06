import React from 'react';
import Img from '../../img/adele.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './result-grid.css';

export const ResultGrid = () => {

    const Card = () => {
        return (
            <div className='result-card'>
                <div className='img-container'>
                    <img src={Img} />
                    <FontAwesomeIcon icon={faPlay} className='play-button' />
                    <div className='dots-v' >
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <h3 className='clamp clamp-2'>Who you are</h3>
                <p className='clamp clamp-2'>Jessie J.</p>
            </div>
        )
    }

    return (
        <div className='result-grid'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    )


}

export default ResultGrid;