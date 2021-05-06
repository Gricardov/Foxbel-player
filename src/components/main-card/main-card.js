import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './main-card.css';

export const Card = ({ img, wallpaper }) => {
    console.log(wallpaper)
    return (
        <div className='main-card'>
            <div className='play-container'>
                <img src={img} />
                <FontAwesomeIcon icon={faPlay} className='play-button' />
            </div>
            <div className='artist-data' style={{ backgroundImage: `url(${wallpaper})` }}>
                <h3>Adele 21</h3>
                <div className='details'>
                    Lo mejor de Adele <span>312 seguidores</span>
                </div>
                <p className='description clamp clamp-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className='button-container'>
                    <button className='button red'>
                        Reproducir
                    </button>
                    <button className='button transparent'>
                        Seguir
                    </button>
                    <div className='dots-h' >
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Card;