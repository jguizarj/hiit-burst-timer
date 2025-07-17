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
    <div className="flex gap-4">
      <button onClick={start} disabled={isRunning || timeLeft === 0}>
        Start
      </button>

      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
