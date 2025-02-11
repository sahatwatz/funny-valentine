import { useState } from "react";
import NameInput from "./component/NameInput";
import WelcomeScreen from "./component/WelcomeScreen";
import SummaryScreen from "./component/SummaryScreen";
import QuestionScreen from "./component/QuestionScreen";
import MusicPlayer from "./component/MusicPlayer";

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center">
      <MusicPlayer />

      {step === 1 && (
        <NameInput
          onConfirm={(name) => {
            setName(name);
            setStep(2);
          }}
        />
      )}
      {step === 2 && <WelcomeScreen name={name} onNext={() => setStep(3)} />}
      {step === 3 && <QuestionScreen onYes={() => setStep(4)} />}
      {step === 4 && <SummaryScreen />}
    </div>
  );
}
