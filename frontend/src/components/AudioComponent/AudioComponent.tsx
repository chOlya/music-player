import React from 'react';

import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const AudioComponent: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const { state: {progressBarRef, currentSong, songRef}, actions: {setIsPlaying, setDuration}} = context;
    
    const onSongEnd = (): void => {
        setIsPlaying(false);
    };
    
    const onTimeUpdate = (): void => {
        const changeProgress = () => {
            progressBarRef.current.value = songRef.current.currentTime;
        };
        
        window.requestAnimationFrame(changeProgress);
    };
    
    return (
        <audio
            src={currentSong.songSrc}
            controls
            ref={songRef}
            onLoadedMetadata={() => setDuration(songRef.current.duration)}
            onEnded={onSongEnd}
            onTimeUpdate={onTimeUpdate}
        />
    );
};

export default AudioComponent;