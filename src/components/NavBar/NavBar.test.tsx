import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";

test("renders contact us button", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

test("open new backbone system page", async () => {
  render(<NavBar />);
  await userEvent.click(document.querySelector("img")!);

  expect(global.window.location.pathname).toContain("/");
});

test("open github profile", async () => {
  render(<NavBar />);
  await userEvent.click(screen.getByText("Contact Us")!);

  expect(global.window.location.pathname).toContain("/");
});
