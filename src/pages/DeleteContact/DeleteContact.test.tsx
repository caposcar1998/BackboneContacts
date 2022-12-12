import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteContact from "./DeleteContact";

test("tests delete is in the screen", () => {
  render(<DeleteContact />);
  const buttonDelete = screen.getByText(/Si/i);
  expect(buttonDelete).toBeInTheDocument();
});
