import React from 'react';
import {PlayIcon, PauseIcon, ForwardIcon, BackwardIcon} from '@heroicons/react/24/outline';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';
import {music, Song} from '../../objects/music';

const AudioPlayerButtons: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {isPlaying, currentSong, songRef}, actions: {setIsPlaying, onSongChange}} = context;
    
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
    
    const onChange = (currentSong: Song, isForward: boolean, isPlaying: boolean) => {
        onSongChange(currentSong, isForward)
        !isPlaying && setIsPlaying(true);
    };
    
    const disabledButton = music.length <= 1;
    
    return (
        <div className="audio-player-buttons">
            <button className="audio-player-buttons__back" disabled={disabledButton}>
                <BackwardIcon onClick={() => onChange(currentSong, false, isPlaying)} />
            </button>
            <button onClick={() => onPlay(isPlaying)} className="audio-player-buttons__play">
                {isPlaying
                    ? <PauseIcon />
                    : <PlayIcon />
                }
            </button>
            <button className="audio-player-buttons__forward" disabled={disabledButton}>
                <ForwardIcon onClick={() => onChange(currentSong, true, isPlaying)}/>
            </button>
        </div>
    );
};

export default AudioPlayerButtons;