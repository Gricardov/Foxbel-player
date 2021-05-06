import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import './main-card.css';

export const Card = ({ data, song, playing, play, togglePlay }) => {

    const { id, album, artist, rank } = data;

    return (
        <div className='main-card'>
            <div className='play-container'>
                <img src={album.cover} srcSet={`${album.cover_xl}, ${album.cover_big} 2x, ${album.cover_medium} 3x`} src={album.cover_medium} />
                <FontAwesomeIcon icon={faPlay} className='play-button' onClick={() => play(data)} />
            </div>
            <div className='artist-data' style={{ backgroundImage: `url(${artist.picture_big})` }}>
                <div className='data-container'>
                    <h3>{album.title}</h3>
                    <div className='details'>
                        Lo mejor de {artist.name} <span>{rank} seguidores</span>
                    </div>
                    <p className='description clamp clamp-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                    <div className='button-container'>
                        <button className='button red' onClick={() => play(data)}>
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
        </div>
    )


}

export default Card;