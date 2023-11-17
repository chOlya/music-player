import React from 'react';
import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const ProgressBar: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {progressBarRef, duration, songRef} } = context;
    
    const handleProgressChange = (): void => {
        songRef.current.currentTime = progressBarRef.current.value;
    };
    
    return (
        <div className="progress-bar">
            <input
                type="range"
                ref={progressBarRef}
                onChange={handleProgressChange}
                defaultValue={0}
                max={duration}
            />
        </div>
    );
};

export default ProgressBar;