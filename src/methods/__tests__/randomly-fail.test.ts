import { describe, expect, it } from "vitest";

import { randomlyFail } from "../randomly-fail";

describe("randomlyFail", () => {
  it("should not throw an error when random number is less than the threshold", () => {
    // Arrange
    const random = 0.5;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).not.toThrow();
  });

  it("should throw an error when random number is greater than the threshold", () => {
    // Arrange
    const random = 0.7;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).toThrow("Randomly failed!");
  });

  it("should throw an error when random number is equal to the threshold", () => {
    // Arrange
    const random = 0.6;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).toThrow();
  });
});
