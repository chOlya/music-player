import React from 'react';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const VolumeBar: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {volume, songRef}, actions: {setVolume}} = context;

    const onVolumeChange = (e: any) => {
        setVolume(e.target.value);
        songRef.current.volume = volume / 100;
    }
    
    return (
        <div className="volume-bar">
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => onVolumeChange(e)}
            />
        </div>
    );
};

export default VolumeBar;