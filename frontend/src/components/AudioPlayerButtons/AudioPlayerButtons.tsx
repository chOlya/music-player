import React from 'react';
import {SpeakerWaveIcon, SpeakerXMarkIcon, PlayIcon, PauseIcon, ForwardIcon, BackwardIcon} from '@heroicons/react/24/outline';
import {music, Song} from '../../objects/music';

interface Props {
    isPlaying: boolean;
    setIsPlaying: any;
    songRef: any;
    setCurrentSong: (currentSong: Song) => void;
    currentSong: Song;
    setVolume: (volume: number) => void;
    volume: number;
}

const AudioPlayerButtons: React.FC<Props> = ({
    songRef,
    isPlaying,
    setIsPlaying,
    setCurrentSong,
    currentSong,
    setVolume,
    volume
}) => {
    const handlePlay = (isPlaying: boolean): void => {
        isPlaying ? songRef.current?.pause() : songRef.current?.play();
        setIsPlaying((prev: boolean) => !prev);
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
    
    const onVolumeChange = (volume: number): void => {
       if (volume) {
           setVolume(0);
           songRef.current.volume = 0;
       } else {
           setVolume(50);
           songRef.current.volume = 50 / 100;
       }
    };
    
    return (
        <div className="audio-player-buttons">
            <button>
                <ForwardIcon onClick={() => onSongChange(currentSong, true)}/>
            </button>
            <button onClick={() => handlePlay(isPlaying)}>
                {isPlaying
                    ? <PauseIcon />
                    : <PlayIcon />
                }
            </button>
            <button>
                <BackwardIcon onClick={() => onSongChange(currentSong, false)} />
            </button>
            <button onClick={() => onVolumeChange(volume)}>
                {volume
                    ? <SpeakerWaveIcon />
                    : <SpeakerXMarkIcon />
                }
            </button>
        </div>
    );
};

export default AudioPlayerButtons;