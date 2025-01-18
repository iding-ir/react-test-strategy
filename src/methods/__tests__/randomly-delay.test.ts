import { describe, expect, it } from "vitest";

import { randomlyDelay } from "../randomly-delay";

describe("randomlyDelay", () => {
  it("should resolve no earlier than min fixed delay", async () => {
    // Arrange
    const fixedDelay = 500;
    const variableDelay = 1000;

    // Act
    const start = Date.now();
    await randomlyDelay({ fixedDelay, variableDelay });
    const delay = Date.now() - start;

    // Assert
    expect(delay).toBeGreaterThanOrEqual(fixedDelay);
  });

  it("should resolve no later than sum of fixed and variable delays", async () => {
    // Arrange
    const fixedDelay = 500;
    const variableDelay = 1000;

    // Act
    const start = Date.now();
    await randomlyDelay({ fixedDelay, variableDelay });
    const delay = Date.now() - start;

    // Assert
    expect(delay).toBeLessThanOrEqual(fixedDelay + variableDelay);
  });
});
