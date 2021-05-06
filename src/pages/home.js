import React, { useState, useEffect } from 'react';
import FooterPlayer from '../components/footer-player';
import FooterBar from '../components/footer-bar';
import Sidebar from '../components/sidebar';
import SearchBar from '../components/search-bar';
import MainCard from '../components/main-card';
import ResultGrid from '../components/result-grid';

import ArtistImg from '../img/adele.svg';
import ArtistWallpaper from '../img/adele-wallpaper.svg';

import { Howl, Howler } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { requestDeezer } from '../api';

let sound;

const Inicio = () => {

    const [results, setResults] = useState([]);
    const [song, setSong] = useState({});
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    const search = (text, endpoint = 'https://api.deezer.com/search?q=track:', retry = true) => {
        requestDeezer(`${endpoint}"${text}"`)
            .then(data => {
                if (data.data.length > 0) {
                    setResults(data.data);
                } else if (retry) {
                    search(text, 'https://api.deezer.com/search?q=album:', false);
                } else {
                    setResults([]);
                }
            })
            .catch(error => {
                console.log('Error al solicitar el API')
            });
    }

    const togglePlay = () => {
        if (playing) {
            sound?.pause();
            setPlaying(false);
        } else {
            sound?.play();
            setPlaying(true);
        }
    }

    const goNext = () => {
        //Obtengo el índice de la canción
        const index = results.findIndex(res => res.id == (song && song.id));
        // Verifico si existe el siguiente
        if (index != -1 && results[index + 1]) {
            // Establezco el siguiente
            setSong(results[index + 1]);
        }
    }

    const goPrev = () => {
        //Obtengo el índice de la canción
        const index = results.findIndex(res => res.id == (song && song.id));
        // Verifico si existe el anterior
        if (index != -1 && results[index - 1]) {
            // Establezco el anterior
            setSong(results[index - 1]);
        }
    }

    const updVolume = (porc) => {
        const vol = porc / 100;
        Howler.volume(vol);
    }

    const toggleMute = () => {
        if (muted) {
            Howler.volume(0.5);
            setMuted(false);
        } else {
            Howler.volume(0);
            setMuted(true);
        }
    }

    useEffect(() => {
        if (song.preview) {
            setPlaying(false);
            sound = new Howl({
                src: [song.preview],
                autoplay: false,
                loop: false,
                volume: 0.5,
                onend: () => {
                    setPlaying(false);
                }
            });
            setPlaying(true);
            sound.play();
        }
        return () => Howler.stop();

    }, [song.preview]);

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
                    {
                        results.length > 0 &&
                        <MainCard playing={playing} play={setSong} song={song} togglePlay={togglePlay} data={results[0]} img={ArtistImg} wallpaper={ArtistWallpaper} />
                    }
                </section>
                <section className='container result-container section'>
                    <h2>Resultados</h2>
                    <ResultGrid song={song} playing={playing} play={setSong} togglePlay={togglePlay} data={results} />
                </section>
            </div>
            <footer>
                <FooterPlayer
                    togglePlay={togglePlay}
                    toggleMute={toggleMute}
                    goNext={goNext}
                    goPrev={goPrev}
                    setVolume={updVolume}
                    muted={muted}
                    playing={playing}
                    song={song}
                />
                <FooterBar />
            </footer>
        </main>
    );
}

export default Inicio;