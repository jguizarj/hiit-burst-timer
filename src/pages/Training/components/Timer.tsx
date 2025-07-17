/**
 * Props for the Timer component.
 */
interface TimerProps {
  /**
   * Time left in seconds.
   */
  timeLeft: number;
}

/**
 * Timer Component
 * @param {TimerProps} props - Timer props.
 */
const Timer = ({ timeLeft }: TimerProps) => {
  // Format timeLeft as mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  return (
    <div className="bg-opacity-80 w-full max-w-xs rounded-lg bg-white px-6 py-4 text-center text-5xl font-bold text-gray-800 shadow-md sm:max-w-sm sm:text-6xl md:max-w-md md:text-7xl">
      {formattedTime}
    </div>
  );
};

export default Timer;
