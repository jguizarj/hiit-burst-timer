import Timer from "./components/Timer";
import useTraining from "../../hooks/useTraining";
import testTraining from "../../constants/testTraining";
import TrainingControls from "./components/TrainingControls";

const Training = () => {
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
    <div className="mx-auto max-w-full p-4 sm:max-w-xl sm:p-6 md:max-w-2xl md:p-8">
      <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        {testTraining.name}
      </h1>

      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <Timer timeLeft={timeLeft} />

        <div className="mt-2 w-full text-center sm:mt-4">
          <p className="text-base font-medium text-gray-700 sm:text-lg md:text-xl">
            Current Speed: {currentInterval?.minimumSpeed} -{" "}
            {currentInterval?.maximumSpeed} {testTraining.unit}
          </p>
          <p className="text-base font-medium text-gray-700 sm:text-lg md:text-xl">
            Next Speed: {nextInterval?.minimumSpeed} -{" "}
            {nextInterval?.maximumSpeed} {testTraining.unit}
          </p>
        </div>

        <TrainingControls
          start={start}
          pause={pause}
          reset={reset}
          isRunning={isRunning}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
};

export default Training;
