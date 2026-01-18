import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app header", () => {
  render(<App />);
  const heading = screen.getByText(/personal project showcase app/i);
  expect(heading).toBeInTheDocument();
});

test("renders the Add Project section", () => {
  render(<App />);
  const addProjectTitle = screen.getByText(/add project/i);
  expect(addProjectTitle).toBeInTheDocument();
});

test("renders the search input", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/search projects/i);
  expect(searchInput).toBeInTheDocument();
});
