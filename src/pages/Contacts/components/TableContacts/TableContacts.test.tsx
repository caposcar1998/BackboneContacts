import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import TableContacts from "./TableContacts";

test("renders contact us button", () => {
  render(
    <Router>
      <TableContacts />
    </Router>
  );
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});
