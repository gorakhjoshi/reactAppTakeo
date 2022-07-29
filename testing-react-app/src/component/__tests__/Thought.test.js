import { getByRole, render, screen } from "@testing-library/react";
import { Thought } from "../Thought";
import App from "../../App";
import "@testing-library/jest-dom";

describe("Testing App and Thought", () => {
  test("Should render test", () => {
    render(<Thought thought={{}} removeThought={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });

  test("Should render header Passing Thoughts", () => {
    render(<App />);
    const thoughtText = screen.getByText("Passing Thoughts");
    expect(thoughtText).toHaveTextContent("Thoughts");
  });
});
