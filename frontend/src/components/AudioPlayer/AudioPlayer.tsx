import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import {music, Song} from '../../objects/music';
import AudioComponent from '../AudioComponent/AudioComponent';
import VolumeBar from '../VolumeBar/VolumeBar';
import AudioPlayerButtons from '../AudioPlayerButtons/AudioPlayerButtons';

interface AudioPlayerContext {
    state: ContextState;
    actions: ContextActions;
}

interface ContextState {
    currentSong: Song;
    isPlaying: boolean;
    volume: number;
    duration: number;
    songRef: any;
    progressBarRef: any;
}

interface ContextActions {
    setCurrentSong: (currentSong: Song) => void;
    setIsPlaying: any;
    setVolume: (volume: number) => void;
    setDuration: (duration: number) => void;
}

const defaultValue: AudioPlayerContext = {
    state: {
        currentSong: {
            title: '',
            author: '',
            songSrc: '',
            songCover: '',
        },
        isPlaying: false,
        volume: 50,
        duration: 0,
        songRef: null,
        progressBarRef: null,
    },
    actions: {
        setCurrentSong: () => {},
        setIsPlaying: () => {},
        setVolume: () => {},
        setDuration: () => {},
    },
};

export const AudioPlayerContext = React.createContext<AudioPlayerContext>(defaultValue);

const AudioPlayer: React.FC = () => {
    const songRef = React.useRef();
    const progressBarRef = React.useRef();

    const [currentSong, setCurrentSong] = React.useState<Song>(music[0]);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [duration, setDuration] = React.useState<number>(0);
    const [volume, setVolume] = React.useState<number>(50);

    const value: AudioPlayerContext = {
        state: {
            currentSong,
            isPlaying,
            volume,
            duration,
            songRef,
            progressBarRef
        },
        actions: {
            setCurrentSong,
            setIsPlaying,
            setVolume,
            setDuration,
        }
    };

    return (
        <AudioPlayerContext.Provider value={value}>
            <div className="audio-player">
                <div className="audio-player__content">
                    <div className="audio-player__buttons">
                        <AudioPlayerButtons/>
                    </div>
                    <div className="audio-player__controls">
                        <VolumeBar/>
                        <AudioComponent/>
                        <ProgressBar/>
                    </div>
                </div>
                <div className="audio-player__cover">
                    <img src={currentSong.songCover} alt="Song cover" id="cover" />
                    <div id="shadow" className="shadow" />
                </div>
            </div>
        </AudioPlayerContext.Provider>
    );
};

export default AudioPlayer;