import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import music from "../assets/doodle.wav";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="transform -translate-y-auto flex w-40 m-10 h-10 z-10 justify-center flex-col items-center">
      <h3 className="font-semibold p-1">play me</h3>
      <button
        onClick={toggleMusic}
        className="absolute left-0 bg-pink-400 p-1 -mt-3 px-2 ml-1 rounded-full hover:bg-pink-500"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={changeVolume}
        className="w-20 top-0 ml-1"
      />
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBvYnRodmdpcWV0aDNvbjZzb3lqNGtvcGJtdWFjbjhmNjc3MTFxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/p34MlXlU4jx7fvWTmT/giphy.gif"
        alt="Loading GIF"
        class="w-12 h-12 rounded z-20 -mt-1"
      />
      <audio ref={audioRef} loop autoPlay>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
