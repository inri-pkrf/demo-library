import React, { useRef, useState, useEffect } from 'react';
import '../components/AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
      setCurrentTime(audio.currentTime);
    };

    const loadMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', loadMetadata);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', loadMetadata);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (!progressBar || !audio) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = (rect.width - clickX) / rect.width; // RTL
    const newTime = percent * audio.duration;

    audio.currentTime = newTime;
    setProgress(percent * 100);
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="audio-player dark">
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      <div className="progress-bar" ref={progressBarRef} onClick={handleProgressClick}>
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>

      <div className="time-display">
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>

      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioPlayer;
