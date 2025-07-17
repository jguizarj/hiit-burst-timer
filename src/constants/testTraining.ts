import type { HiitInterval } from "../types/hiitInterval";

/**
 * A test training session.
 */
const testTraining: HiitInterval[] = [
  {
    intervalDuration: 30,
    minimumSpeed: 5,
    maximumSpeed: 10,
    unit: "km/h",
  },
  {
    intervalDuration: 10,
    minimumSpeed: 10,
    maximumSpeed: 15,
    unit: "km/h",
  },
  {
    intervalDuration: 30,
    minimumSpeed: 5,
    maximumSpeed: 10,
    unit: "km/h",
  },
  {
    intervalDuration: 10,
    minimumSpeed: 10,
    maximumSpeed: 15,
    unit: "km/h",
  },
];

export default testTraining;
