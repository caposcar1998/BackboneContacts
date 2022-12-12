import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteContact from "./DeleteContact";

test("tests create contact", () => {
  render(<DeleteContact />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});
