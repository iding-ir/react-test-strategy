import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom";

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
