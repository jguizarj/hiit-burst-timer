import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Interface for the useCountdown hook return type.
 */
interface UseCountdownResult {
  /**
   * Time left in seconds.
   */
  timeLeft: number;

  /**
   * Whether the countdown is currently running.
   */
  isRunning: boolean;

  /**
   * Function to start the countdown.
   */
  start: () => void;

  /**
   * Function to pause the countdown.
   */
  pause: () => void;

  /**
   * Function to reset the countdown to the initial time.
   */
  reset: () => void;
}

/**
 * useCountdown hook for managing countdown timer logic.
 *
 * @param {number} initialSeconds - Initial countdown time in seconds.
 * @param {Function} [onFinish] - Optional callback invoked when the countdown reaches zero.
 * @returns {UseCountdownResult} The countdown state and controls.
 */
const useCountdown = (
  initialSeconds: number,
  onFinish?: () => void
): UseCountdownResult => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);

  /**
   * Returns a high-resolution timestamp if available, otherwise falls back to Date.now().
   * @returns {number} The current timestamp in milliseconds.
   */
  const now = useCallback((): number => {
    return typeof performance !== "undefined" &&
      typeof performance.now === "function"
      ? performance.now()
      : Date.now();
  }, []);

  /**
   * Updates the countdown state based on the remaining time.
   * Stops the timer if the countdown reaches zero.
   */
  const update = useCallback(() => {
    if (endTimeRef.current === null) {
      return;
    }

    const msLeft = endTimeRef.current - now();
    const secondsLeft = Math.max(0, Math.ceil(msLeft / 1000));
    setTimeLeft(secondsLeft);

    if (msLeft <= 0) {
      setIsRunning(false);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      if (onFinish) {
        onFinish();
      }
    }
  }, [now]);

  /**
   * Starts the countdown timer.
   * Does nothing if the timer is already running or timeLeft is zero.
   */
  const start = useCallback(() => {
    if (isRunning || timeLeft === 0) {
      return;
    }

    setIsRunning(true);
    endTimeRef.current = now() + timeLeft * 1000;

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(update, 250);
  }, [isRunning, timeLeft, now, update]);

  /**
   * Pauses the countdown timer.
   * Does nothing if the timer is not running.
   */
  const pause = useCallback(() => {
    setIsRunning(false);

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (endTimeRef.current !== null) {
      const msLeft = endTimeRef.current - now();
      setTimeLeft(Math.max(0, Math.ceil(msLeft / 1000)));
      endTimeRef.current = null;
    }
  }, [now]);

  /**
   * Resets the countdown timer to the initial time.
   */
  const reset = useCallback(() => {
    pause();
    setTimeLeft(initialSeconds);
    endTimeRef.current = null;
  }, [initialSeconds, pause]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset the timer when initialSeconds changes
  useEffect(() => {
    reset();
  }, [initialSeconds, reset]);

  return { timeLeft, isRunning, start, pause, reset };
};

export default useCountdown;
