import React from 'react';

interface Props {
    duration: number;
    songRef: any;
    progressBarRef: any;
}

const ProgressBar: React.FC<Props> = ({ songRef, progressBarRef, duration }) => {
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