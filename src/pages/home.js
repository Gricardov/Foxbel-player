import React from 'react';
import FooterPlayer from '../components/footer-player';
import FooterBar from '../components/footer-bar';
import Sidebar from '../components/sidebar';
import SearchBar from '../components/search-bar';
import MainCard from '../components/main-card';
import ResultGrid from '../components/result-grid';

import ArtistImg from '../img/adele.svg';
import ArtistWallpaper from '../img/adele-wallpaper.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { request } from '../api';

const Inicio = () => {

    const search = (text) => {

    }

    return (
        <main>
            <Sidebar />
            <div className='main-content'>
                <section className='container header-container section'>
                    <SearchBar search={search} />
                    <div>
                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                        <span>Francisco S.</span>
                    </div>
                </section>
                <section className='container section'>
                    <MainCard img={ArtistImg} wallpaper={ArtistWallpaper} />
                </section>
                <section className='container result-container section'>
                    <h2>Resultados</h2>
                    <ResultGrid />
                </section>
            </div>
            <footer>
                <FooterPlayer img={ArtistImg} />
                <FooterBar />
            </footer>
        </main>
    );
}

export default Inicio;