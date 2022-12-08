import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateContact from "./CreateContact";

test("tests create contact", () => {
  render(<CreateContact />);
  const linkElement = screen.getByText(/Crear nuevo contacto/i);
  expect(linkElement).toBeInTheDocument();
});
