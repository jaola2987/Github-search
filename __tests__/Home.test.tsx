import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../app/page";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);
    expect(
      screen.getByPlaceholderText("Enter GitHub username...")
    ).toBeInTheDocument();
  });
});
