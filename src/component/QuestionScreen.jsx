import { useState } from "react";
import cloveImage from "../assets/clove.webp";

export default function QuestionScreen({ onYes }) {
  const [noText, setNoText] = useState("No");
  const [yesSize, setYesSize] = useState("text-lg");
  const [position, setPosition] = useState({ top: 100, left: 50 });

  const moveNoButton = () => {
    setNoText((prev) =>
      prev === "No"
        ? "Are you sure?"
        : prev === "Are you sure?"
        ? "Really?"
        : prev === "Really?"
        ? "Last chance!"
        : prev === "Last chance!"
        ? "don't hurt me"
        : prev === "don't hurt me"
        ? "I'm sorry"
        : prev === "I'm sorry"
        ? "don't point at me"
        : prev === "don't point at me"
        ? "I'm scared"
        : prev === "I'm scared"
        ? "Please Please Please"
        : prev === "Please Please Please"
        ? "I'm leaving ;("
        : "Bye"
    );

    setYesSize((prev) =>
      prev === "text-lg" ? "text-xl" : prev === "text-xl" ? "w-50" : "w-70"
    );

    // คำนวณตำแหน่งใหม่แบบสุ่ม
    const newTop = Math.floor(Math.random() * 200) - 130; // สุ่มระยะทางขึ้นลง
    const newLeft = Math.floor(Math.random() * 200) - 130; // สุ่มระยะทางซ้ายขวา
    const newRight = Math.floor(Math.random() * 200) + 130; // สุ่มระยะทางซ้ายขวา
    const newBottom = Math.floor(Math.random() * 200) + 130; // สุ่มระยะทางขึ้นลง
    setPosition({
      top: position.top + newTop,
      left: position.left + newLeft,
      right: position.right + newRight,
      bottom: position.bottom + newBottom
    });
  };

  return (
    <div className="relative bg-white  shadow-xl rounded-xl flex flex-col items-center gap-4 p-6 h-80 w-80">
      <h1 className="text-2xl font-bold">
        Will you be my <h1 className="text-4xl text-pink-500">Valentine ?</h1>
      </h1>
      <div className="flex gap-4 relative w-full h-full">
        <img
          src={cloveImage}
          alt="Loading GIF"
          class=" w-76 h-64 rounded-xl object-left"
        />
        <button
          onClick={onYes}
          className={`bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium w-40 text-white px-6 py-3 rounded-md ${yesSize}`}
        >
          Yes
        </button>
        <button
          onMouseEnter={moveNoButton} // หนีเมื่อ hover
          onClick={moveNoButton} // หนีเมื่อกด
          className="bg-red-500 text-white px-5 p-4 ml-56 py-2 rounded-md absolute transition-all duration-300"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            right: `${position.right}px`,
            bottom: `${position.bottom}px`
          }}
        >
          {noText}
        </button>
      </div>
    </div>
  );
}
