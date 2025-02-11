import { useState } from "react";

function NameInput({ onConfirm }) {
  const [name, setName] = useState("");

  return (
    <div className="bg-white shadow-xl h-70 rounded-xl justify-center flex flex-col items-center gap-4 p-6">
      <label className="text-lg font-semibold">Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-md p-2 w-64"
      />
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTVyc2ljcmNlOXZtNml6a3ZkaG9vZDhvZ2YwNjI1cHd6b2F4enN0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/leAqvqXDM5ST6yurMX/giphy.gif"
        alt="Loading GIF"
        class="w-64 h-64 rounded-xl"
      />
      <button
        onClick={() => onConfirm(name)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        OK
      </button>
      <footer class="text-gray-500 text-xs text-center p-4 mt-4">
        <p>&copy; 2025 built by sahatwatz.</p>
      </footer>
    </div>
  );
}

export default NameInput;
