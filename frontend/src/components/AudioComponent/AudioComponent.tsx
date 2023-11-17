import React from 'react';

import {Song} from '../../objects/music';

interface Props {
    currentSong: Song;
    songRef: any;
    setDuration: (duration: number) => void;
    progressBarRef: any;
    setIsPlaying: (isPlaying: boolean) => void;
}

const AudioComponent: React.FC<Props> = ({ currentSong, songRef, setDuration, progressBarRef, setIsPlaying }) => {
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
        <>
            <audio
                src={currentSong.songSrc}
                controls
                ref={songRef}
                onLoadedMetadata={() => setDuration(songRef.current.duration)}
                onEnded={onSongEnd}
                onTimeUpdate={onTimeUpdate}
            />
        </>
    );
};

export default AudioComponent;