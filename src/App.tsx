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
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">
        {testTraining.name}
      </h1>

      <Timer timeLeft={timeLeft} />

      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-700">
          Current Speed: {currentInterval?.minimumSpeed} -{" "}
          {currentInterval?.maximumSpeed} {testTraining.unit}
        </p>
        <p className="text-lg font-medium text-gray-700">
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
