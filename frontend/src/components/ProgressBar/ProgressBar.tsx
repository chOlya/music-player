import React from 'react';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const ProgressBar: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {progressBarRef, duration, songRef, isPlaying} } = context;
    
    const handleProgressChange = (): void => {
        songRef.current.currentTime = progressBarRef.current.value;
    };
    
    const opacity = isPlaying ? 1 : 0;
    
    return (
        <div className="progress-bar">
            <input
                type="range"
                ref={progressBarRef}
                onChange={handleProgressChange}
                defaultValue={0}
                max={duration}
                className="progress-bar__range input-range"
                style={{ opacity }}
            />
        </div>
    );
};

export default ProgressBar;