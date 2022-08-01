import { getByRole, render, screen } from "@testing-library/react";
import { Thought } from "../Thought";
import App from "../../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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

    const emptyThought = screen.queryByText("Oreos are delicious");
    expect(emptyThought).toBeNull();
  });

  test("should post thoughts", async () => {
    render(<App />);

    const button = screen.getByRole("submit");
    expect(button).toBeEnabled();

    const input = screen.getByRole("input");
    userEvent.type(input, "Oreos are delicious");
    userEvent.click(button, "Oreos are delicious");
    const asyncThought = await screen.findByText("Oreos are delicious");

    expect(asyncThought).toBeInTheDocument();
  });
});
