import piano from '../music/pianomoment.mp3';
import pianoCover from "../images/covers/pianomoment.jpeg"

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
];