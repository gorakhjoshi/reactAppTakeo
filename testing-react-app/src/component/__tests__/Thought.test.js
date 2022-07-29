import { render, screen } from "@testing-library/react";
import { Thought } from "../Thought";

test("Should render test", () => {
  render(<Thought thought={{}} removeThought={() => {}} />);

  screen.debug();
});
