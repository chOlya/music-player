import React from 'react';
import {PlayIcon, PauseIcon, ForwardIcon, BackwardIcon} from '@heroicons/react/24/outline';
import {music, Song} from '../../objects/music';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const AudioPlayerButtons: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {isPlaying, currentSong, songRef}, actions: {setIsPlaying, setCurrentSong}} = context;
    
    React.useEffect(() => {
        if (isPlaying) {
            songRef.current.play();
        } else {
            songRef.current.pause();
        }
    }, [isPlaying, currentSong]);
    
    const onPlay = (isPlaying: boolean): void => {
        setIsPlaying((prev: boolean) => !prev);

        const shadowElement = document.getElementById("shadow");
        const coverElement = document.getElementById("cover");
        
        if (shadowElement && coverElement) {
            if (isPlaying) {
                shadowElement.className = "";
                coverElement.className = "";
            } else {
                shadowElement.className = "shadow-animation";
                coverElement.className = "pulse-animation";
            }
        }
    };
    
    const onSongChange = (currentSong: Song, isForward: boolean): void => {
        if (!music) return;
        
       const currentIndex: number = music.indexOf(currentSong);
       let newIndex: number;
       
       if (isForward) {
           newIndex = (currentIndex + 1) % music.length;
       } else {
           newIndex = currentIndex === 0 ? music.length - 1 : currentIndex - 1;
       }
       
       setCurrentSong(music[newIndex]);
    };
    
    return (
        <div className="audio-player-buttons">
            <button className="audio-player-buttons__back">
                <BackwardIcon onClick={() => onSongChange(currentSong, false)} />
            </button>
            <button onClick={() => onPlay(isPlaying)} className="audio-player-buttons__play">
                {isPlaying
                    ? <PauseIcon />
                    : <PlayIcon />
                }
            </button>
            <button className="audio-player-buttons__forward">
                <ForwardIcon onClick={() => onSongChange(currentSong, true)}/>
            </button>
        </div>
    );
};

export default AudioPlayerButtons;