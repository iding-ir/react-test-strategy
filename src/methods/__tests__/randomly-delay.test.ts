import { describe, expect, it } from "vitest";

import { randomlyDelay } from "../randomly-delay";

describe("randomlyDelay", () => {
  it("should resolve after a given time", async () => {
    // Arrange
    const maxDelay = 1000;
    const start = Date.now();

    // Act
    await randomlyDelay({ maxDelay });
    const end = Date.now();

    // Assert
    expect(end - start).toBeLessThanOrEqual(maxDelay);
  });
});
