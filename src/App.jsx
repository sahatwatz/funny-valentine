import { useState } from "react";
import NameInput from "./component/NameInput"; // นำเข้า NameInput
import WelcomeScreen from "./component/WelcomeScreen"; // นำเข้า WelcomeScreen

export default function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen ">
      {!isSubmitted ? (
        <NameInput
          onConfirm={(name) => {
            setName(name);
            setIsSubmitted(true);
          }}
        />
      ) : (
        <WelcomeScreen name={name} />
      )}
    </div>
  );
}
