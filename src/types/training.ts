import type { HiitInterval } from "./hiitInterval";

/**
 * Represents a training effort level in a HIIT session.
 */
export interface Training {
  /**
   * The name of the training.
   */
  name: string;

  /**
   * The unit of measurement for speed, such as "km/h", "mph", "rpm".
   */
  unit: string;

  /**
   * A collection of intervals associated with this training.
   */
  intervals: HiitInterval[];
}
