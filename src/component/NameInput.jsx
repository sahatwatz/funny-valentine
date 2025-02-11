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
      <button
        onClick={() => onConfirm(name)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        OK
      </button>
      <footer class="text-white text-center p-4 mt-4">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NameInput;
