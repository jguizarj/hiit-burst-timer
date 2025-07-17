/**
 * Represents an interval in a HIIT (High-Intensity Interval Training) session.
 */
export interface HiitInterval {
  /**
   * The duration of the interval in seconds.
   */
  intervalDuration: number;

  /**
   * The minimum speed during the interval.
   */
  minimumSpeed: number;

  /**
   * The maximum speed during the interval.
   */
  maximumSpeed: number;

  /**
   * The unit of measurement for speed, such as "km/h", "mph", "rpm".
   */
  unit: string;
}
