import React from 'react';
import './App.css';

import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import "../src/scss/style.scss";

function App() {
  return (
      <div className="app-container">
        <AudioPlayer />
    </div>
  );
}

export default App;
