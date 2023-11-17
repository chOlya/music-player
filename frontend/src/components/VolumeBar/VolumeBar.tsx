import React from 'react';

interface Props {
    volume: number;
    setVolume: (volume: number) => void;
    songRef: any;
}

const VolumeBar: React.FC<Props> = ({songRef, setVolume, volume}) => {
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