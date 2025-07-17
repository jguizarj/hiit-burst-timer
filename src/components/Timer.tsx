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

  return <div>{formattedTime}</div>;
};

export default Timer;
