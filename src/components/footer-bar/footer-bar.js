import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faList } from '@fortawesome/free-solid-svg-icons';
import './footer-bar.css';

export const Footerbar = ({ img }) => {
    return (
        <div className='footer-bar-container'>
            <a className='footer-button'>
                <FontAwesomeIcon icon={faList} className='icon' />
                <p>Mi libreria</p>
            </a>
            <a className='footer-button'>
                <FontAwesomeIcon icon={faCompactDisc} className='icon' />
                <p>Playlist</p>
            </a>
        </div>
    )
}

export default Footerbar;