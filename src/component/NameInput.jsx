import { useState } from "react";
import cloveImage from "../assets/clove.webp";

function NameInput({ onConfirm }) {
  const [name, setName] = useState("");

  return (
    <div className="bg-white shadow-xl h-70 rounded-xl justify-center flex flex-col items-center gap-4 p-6">
      <label className="text-lg font-semibold text-pink-400">
        Enter your name please
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-pink-600 rounded-md p-2 w-64 shadow-md"
      />
      <img
        src={cloveImage}
        alt="Loading GIF"
        class=" w-76 h-64 rounded-xl object-left"
      />
      <button
        onClick={() => onConfirm(name)}
        className="py-1.5 px-4 text-xl rounded-full bg-gradient-to-r
         from-pink-500 to-pink-400 text-white cursor-pointer
          font-semibold text-center shadow-xs transition-all
           duration-500 hover:bg-gradient-to-l"
      >
        Let's go
      </button>
      <footer class="text-gray-500 text-xs text-center p-4 mt-4">
        <p>&copy; 2025 built by sahatwatz. v.0.7.0 </p>
      </footer>
    </div>
  );
}

export default NameInput;
