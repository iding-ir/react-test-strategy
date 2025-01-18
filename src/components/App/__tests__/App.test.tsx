import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../App";

describe("App", () => {
  it("should render without crashing", async () => {
    // Arrange
    render(<App />);

    // Act
    const app = await screen.findByTestId("app");

    // Assert
    expect(app).toBeInTheDocument();
  });
});
