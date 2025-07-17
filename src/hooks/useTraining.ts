import { useState, useCallback, useEffect } from "react";
import useCountdown from "./useCountdown";
import type { HiitInterval } from "../types/hiitInterval";
import type { Training } from "../types/training";

/**
 * Interface for the useTrainingCountdown hook return type.
 */
interface UseTrainingCountdownResult {
  /**
   * Time left in the current interval in seconds.
   */
  timeLeft: number;

  /**
   * Whether the training is currently running.
   */
  isRunning: boolean;

  /**
   * The current interval being executed.
   */
  currentInterval: HiitInterval | null;

  /**
   * The next interval in the training.
   */
  nextInterval: HiitInterval | null;

  /**
   * Function to start the training.
   */
  startTraining: () => void;

  /**
   * Function to pause the training.
   */
  pauseTraining: () => void;

  /**
   * Function to reset the training to the initial state.
   */
  resetTraining: () => void;
}

/**
 * useTrainingCountdown hook for managing a HIIT training session.
 *
 * @param {Training} training - The training session data.
 * @returns {UseTrainingCountdownResult} The training state and controls.
 */
const useTraining = (training: Training): UseTrainingCountdownResult => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Get the current and next interval
  const currentInterval = training.intervals[currentIndex] || null;
  const nextInterval = training.intervals[currentIndex + 1] || null;

  /**
   * Handles the end of the current interval and moves to the next one.
   * If at the last interval, stops the training.
   */
  const handleIntervalFinish = useCallback(() => {
    if (currentIndex >= training.intervals.length - 1) {
      setIsRunning(false);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [currentIndex, training.intervals.length]);

  // Countdown timer logic for the current interval
  const {
    timeLeft,
    start: startCountdown,
    pause: pauseCountdown,
    reset: resetCountdown,
  } = useCountdown(
    currentInterval?.intervalDuration || 0,
    handleIntervalFinish
  );

  /**
   * Starts the training session.
   */
  const startTraining = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      startCountdown();
    }
  }, [isRunning, startCountdown]);

  /**
   * Pauses the training session.
   */
  const pauseTraining = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      pauseCountdown();
    }
  }, [isRunning, pauseCountdown]);

  /**
   * Resets the training session to the initial state.
   */
  const resetTraining = useCallback(() => {
    setIsRunning(false);
    setCurrentIndex(0);
    resetCountdown();
  }, [resetCountdown]);

  // Reset the countdown when the current interval changes
  useEffect(() => {
    resetCountdown();
  }, [currentInterval, resetCountdown]);

  // Start the countdown for the new interval if training is running
  useEffect(() => {
    if (
      isRunning &&
      currentInterval &&
      timeLeft === currentInterval.intervalDuration
    ) {
      startCountdown();
    }
  }, [isRunning, timeLeft, currentInterval, startCountdown]);

  return {
    timeLeft,
    isRunning,
    currentInterval,
    nextInterval,
    startTraining: startTraining,
    pauseTraining: pauseTraining,
    resetTraining: resetTraining,
  };
};

export default useTraining;
