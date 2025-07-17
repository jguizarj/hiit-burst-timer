import type { Training } from "../types/training";

/**
 * A test training session.
 */
const testTraining: Training = {
  name: "Test Training",
  unit: "km/h",
  intervals: [
    {
      intervalDuration: 30,
      minimumSpeed: 5,
      maximumSpeed: 10,
    },
    {
      intervalDuration: 10,
      minimumSpeed: 10,
      maximumSpeed: 15,
    },
    {
      intervalDuration: 30,
      minimumSpeed: 5,
      maximumSpeed: 10,
    },
    {
      intervalDuration: 10,
      minimumSpeed: 10,
      maximumSpeed: 15,
    },
  ],
};

export default testTraining;
