import Timer from "./components/Timer";
import useTraining from "./hooks/useTraining";
import testTraining from "./constants/testTraining";

const App = () => {
  const {
    timeLeft,
    isRunning,
    currentInterval,
    nextInterval,
    startTraining: start,
    pauseTraining: pause,
    resetTraining: reset,
  } = useTraining(testTraining);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Timer timeLeft={timeLeft} />

      <div style={{ textAlign: "center" }}>
        <p>
          Current Speed: {currentInterval?.minimumSpeed} -{" "}
          {currentInterval?.maximumSpeed} {currentInterval?.unit}
        </p>
        <p>
          Next Speed: {nextInterval?.minimumSpeed} -{" "}
          {nextInterval?.maximumSpeed} {nextInterval?.unit}
        </p>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={start} disabled={isRunning || timeLeft === 0}>
          Start
        </button>

        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
