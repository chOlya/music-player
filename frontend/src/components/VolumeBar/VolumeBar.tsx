import React from 'react';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';
import {SpeakerWaveIcon, SpeakerXMarkIcon} from '@heroicons/react/24/outline';

const VolumeBar: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {volume, songRef}, actions: {setVolume}} = context;

    const onVolumeChange = (e: any) => {
        setVolume(e.target.value);
        songRef.current.volume = volume / 100;
    }
    
    const turnOff = () => {
        setVolume(0);
        songRef.current.volume = 0;
    }
    
    const turnOn = () => {
        if (!volume) {
            setVolume(50);
            songRef.current.volume = 0.5;
        }
    };
    
    return (
        <div className="volume-bar">
            <button onClick={() => turnOff()} className="volume-bar__btn">
                <SpeakerXMarkIcon />
            </button>
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => onVolumeChange(e)}
                className="volume-bar__range input-range"
            />
            <button onClick={() => turnOn()} className="volume-bar__btn">
                <SpeakerWaveIcon />
            </button>
        </div>
    );
};

export default VolumeBar;