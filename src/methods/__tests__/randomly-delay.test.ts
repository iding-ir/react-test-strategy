import { describe, it, expect } from "vitest";
import { randomlyDelay } from "../randomly-delay";

describe("randomlyDelay", () => {
  it("should resolve after a given time", async () => {
    // Arrange
    const delay = 1000;
    const start = Date.now();

    // Act
    await randomlyDelay(delay);
    const end = Date.now();

    // Assert
    expect(end - start).toBeLessThanOrEqual(delay);
  });
});
