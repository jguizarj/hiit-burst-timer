/**
 * Props for the Controls component.
 */
interface ControlsProps {
  /**
   * Function to start the training.
   */
  start: () => void;

  /**
   * Function to pause the training.
   */
  pause: () => void;

  /**
   * Function to reset the training.
   */
  reset: () => void;

  /**
   * Indicates whether the training is currently running.
   */
  isRunning: boolean;

  /**
   * Time left in seconds.
   */
  timeLeft: number;
}

/**
 * Controls Component
 * @param {ControlsProps} props - Props for the controls.
 */
const TrainingControls = ({
  start,
  pause,
  reset,
  isRunning,
  timeLeft,
}: ControlsProps) => {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-xs flex-col justify-center gap-3 sm:max-w-sm sm:flex-row sm:gap-4 md:max-w-md">
      <button
        className="rounded bg-green-400 px-4 py-2 text-base font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:px-6 sm:py-3 sm:text-lg"
        onClick={start}
        disabled={isRunning || timeLeft === 0}
      >
        Start
      </button>

      <button
        className="rounded bg-yellow-300 px-4 py-2 text-base font-semibold text-gray-800 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-300 sm:px-6 sm:py-3 sm:text-lg"
        onClick={pause}
        disabled={!isRunning}
      >
        Pause
      </button>

      <button
        className="rounded bg-red-300 px-4 py-2 text-base font-semibold text-gray-800 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-red-400 disabled:cursor-not-allowed sm:px-6 sm:py-3 sm:text-lg"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default TrainingControls;
