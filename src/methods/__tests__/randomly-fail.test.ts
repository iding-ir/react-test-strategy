import { describe, it, expect } from "vitest";
import { randomlyFail } from "../randomly-fail";

describe("randomlyFail", () => {
  it("should not throw an error when random is less than threshold", () => {
    // Arrange
    const random = 0.5;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).not.toThrow();
  });

  it("should throw an error when random is greater than threshold", () => {
    // Arrange
    const random = 0.7;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).toThrow("Randomly failed!");
  });

  it("should throw an error when random is equal to threshold", () => {
    // Arrange
    const random = 0.6;
    const threshold = 0.6;

    // Act
    const action = () => randomlyFail({ threshold, random });

    // Assert
    expect(action).toThrow();
  });
});
