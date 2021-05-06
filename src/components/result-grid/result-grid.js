import React from 'react';
import Img from '../../img/adele.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import './result-grid.css';

export const ResultGrid = ({ data, song, playing, play, togglePlay }) => {

    const Card = ({ data }) => {

        const { id, album, artist } = data;

        return (
            <div className='result-card' onClick={() => play(data)}>
                <div className='img-container'>
                    <img srcSet={`${album.cover_xl}, ${album.cover_big} 2x, ${album.cover_medium} 3x`} src={album.cover_medium} />
                    {
                        <FontAwesomeIcon onClick={togglePlay} icon={id == song.id && playing ? faPause : faPlay} className='play-button' />
                    }
                    <div className='dots-v' >
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <h3 className='clamp clamp-1'>{album.title}</h3>
                <p className='clamp clamp-2'>{artist.name}</p>
            </div>
        )
    }

    return (
        <div className='result-grid'>
            {
                data.map(e => (
                    <Card key={e.id} data={e} />
                ))
            }
        </div>
    )


}

export default ResultGrid;