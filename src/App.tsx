import Timer from "./components/Timer";
import useTraining from "./hooks/useTraining";
import testTraining from "./constants/testTraining";
import Controls from "./components/Controls";

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
    <div>
      <h1>{testTraining.name}</h1>

      <Timer timeLeft={timeLeft} />

      <div>
        <p>
          Current Speed: {currentInterval?.minimumSpeed} -{" "}
          {currentInterval?.maximumSpeed} {testTraining.unit}
        </p>
        <p>
          Next Speed: {nextInterval?.minimumSpeed} -{" "}
          {nextInterval?.maximumSpeed} {testTraining.unit}
        </p>
      </div>

      <Controls
        start={start}
        pause={pause}
        reset={reset}
        isRunning={isRunning}
        timeLeft={timeLeft}
      />
    </div>
  );
};

export default App;
