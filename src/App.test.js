import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/add a note/i);
  expect(linkElement).toBeInTheDocument();
});

test("creates a note", () => {
  render(<App />);
  const input = screen.getByTestId("note-input");
  const addButton = screen.getByTestId("add");
  const colorRadio = screen.getAllByTestId("color-input")[1];
  expect(input).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(colorRadio).toBeInTheDocument();

  fireEvent.click(addButton);

  const newlyCreatedNote = screen.getByTestId("note");
  expect(newlyCreatedNote).toBeInTheDocument();
});
