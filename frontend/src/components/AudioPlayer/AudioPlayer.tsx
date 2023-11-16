import React from 'react';
import {music, Song} from '../../objects/music';

const AudioPlayer: React.FC = () => {
    const [currentSong, setCurrentSong] = React.useState<Song>(music[0]);
    
    return (
        <div className="audio-player">
            
        </div>
    );
};

export default AudioPlayer;