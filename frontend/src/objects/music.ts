import piano from '../music/pianomoment.mp3';
import creative from '../music/creativeminds.mp3';
import tenderness from '../music/tenderness.mp3';

import pianoCover from "../images/covers/pianomoment.jpeg"
import creativeCover from "../images/covers/creativeminds.webp"
import tendernessCover from "../images/covers/tenderness.webp"

export interface Song {
    title: string;
    author: string;
    songSrc: string;
    songCover: string;
}

export const music: Array<Song> = [
    {
        title: 'Piano Moment',
        author: 'Benjamin Tissot',
        songSrc: piano,
        songCover: pianoCover,
    },
    {
        title: 'Creative Minds',
        author: 'Benjamin Tissot',
        songSrc: creative,
        songCover: creativeCover,
    },
    {
        title: 'Tenderness',
        author: 'Benjamin Tissot',
        songSrc: tenderness,
        songCover: tendernessCover,
    },
];