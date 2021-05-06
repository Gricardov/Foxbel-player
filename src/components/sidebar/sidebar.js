import React from 'react';
import Logo1x from '../../img/foxbel-music.png';
import Logo2x from '../../img/foxbel-music@2x.png';
import Logo3x from '../../img/foxbel-music@3x.png';
import './sidebar.css';

const myLibraryLinks = [
    { name: 'Recientes', to: '#' },
    { name: 'Álbums', to: '#' },
    { name: 'Canciones', to: '#' },
    { name: 'Estaciones', to: '#' }
];

const playlistLinks = [
    { name: 'Metal', to: '#' },
    { name: 'Para bailar', to: '#' },
    { name: 'Rock 90s', to: '#' },
    { name: 'Baladas', to: '#' }
];

export const Sidebar = () => {

    return (
        <nav className='sidebar'>
            <img className='logo' srcSet={`${Logo3x}, ${Logo2x} 2x, ${Logo1x} 3x`} src={Logo2x} alt='logo' />
            <div className='sidebar-nav'>
                <h3>Mi libreria</h3>
                {
                    myLibraryLinks.map(({ name, to }, i) =>
                        <div key={i + 1} className={`selector ${i == 0 && 'selected'}`}>
                            <a href={to}>{name}</a>
                        </div>
                    )
                }
            </div>
            <div className='sidebar-nav'>
                <h3>Playlist</h3>
                {
                    playlistLinks.map(({ name, to }, i) =>
                        <div key={i + 1} className={`selector`}>
                            <a href={to}>{name}</a>
                        </div>
                    )
                }
            </div>
        </nav>
    )


}

export default Sidebar;