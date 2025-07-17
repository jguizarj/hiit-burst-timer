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
const Controls = ({
  start,
  pause,
  reset,
  isRunning,
  timeLeft,
}: ControlsProps) => {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <button
        className="rounded bg-green-500 px-4 py-2 text-white disabled:bg-gray-300"
        onClick={start}
        disabled={isRunning || timeLeft === 0}
      >
        Start
      </button>

      <button
        className="rounded bg-yellow-500 px-4 py-2 text-white disabled:bg-gray-300"
        onClick={pause}
        disabled={!isRunning}
      >
        Pause
      </button>

      <button
        className="rounded bg-red-500 px-4 py-2 text-white"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
