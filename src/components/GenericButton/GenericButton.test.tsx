import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenericButton from "./GenericButton";

test("renders button red", () => {
  render(
    <GenericButton text="Test" action={() => console.log("test")} color="red" />
  );
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toHaveStyle("backgroundColor: red");
});
