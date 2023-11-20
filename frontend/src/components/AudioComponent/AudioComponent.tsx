import React from 'react';

import {AudioPlayerContext} from '../AudioPlayer/AudioPlayer';

const AudioComponent: React.FC = () => {
    const context = React.useContext(AudioPlayerContext);
    const {state: {progressBarRef, currentSong, songRef}, actions: {setIsPlaying, setDuration}} = context;

    const songTitle = `${currentSong.author} - ${currentSong.title}`;

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
        <div className="audio-component">
            <audio
                src={currentSong.songSrc}
                ref={songRef}
                onLoadedMetadata={() => setDuration(songRef.current.duration)}
                onEnded={onSongEnd}
                onTimeUpdate={onTimeUpdate}
            />
            <div className="audio-component__song-name">
                {songTitle}
            </div>
        </div>
    );
};

export default AudioComponent;