import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import {music, Song} from '../../objects/music';
import AudioComponent from '../AudioComponent/AudioComponent';
import VolumeBar from '../VolumeBar/VolumeBar';

const AudioPlayer: React.FC = () => {
    const songRef = React.useRef();
    const progressBarRef = React.useRef();
    
    const [currentSong, setCurrentSong] = React.useState<Song>(music[0]);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [duration, setDuration] = React.useState<number>(0);
    const [volume, setVolume] = React.useState<number>(50);
    
    return (
        <div className="audio-player">
            <AudioComponent
                currentSong={currentSong}
                songRef={songRef}
                setDuration={setDuration}
                progressBarRef={progressBarRef}
                setIsPlaying={setIsPlaying}
            />
            <ProgressBar songRef={songRef} progressBarRef={progressBarRef} duration={duration} />
            <VolumeBar songRef={songRef} volume={volume} setVolume={setVolume}/>
        </div>
    );
};

export default AudioPlayer;