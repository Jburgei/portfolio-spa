import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("FULL FLOW: empty state -> add projects -> list -> search filter", async () => {
  const user = userEvent.setup();
  render(<App />);

  // 1) Empty state (only works if ProjectList shows this when projects is empty)
  expect(screen.getByText(/no projects yet/i)).toBeInTheDocument();

  // 2) Add project 1
  await user.type(screen.getByPlaceholderText(/title/i), "React");
  await user.type(screen.getByPlaceholderText(/description/i), "Passing props");
  await user.click(screen.getByRole("button", { name: /add/i }));

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("Passing props")).toBeInTheDocument();

  // 3) Add project 2
  await user.type(screen.getByPlaceholderText(/title/i), "Physics");
  await user.type(screen.getByPlaceholderText(/description/i), "Reflection of light");
  await user.click(screen.getByRole("button", { name: /add/i }));

  expect(screen.getByText("Physics")).toBeInTheDocument();
  expect(screen.getByText("Reflection of light")).toBeInTheDocument();

  // 4) Search filter
  const search = screen.getByPlaceholderText(/search projects/i);
  await user.type(search, "phys");

  expect(screen.getByText("Physics")).toBeInTheDocument();
  expect(screen.queryByText("React")).not.toBeInTheDocument();

  // 5) Clear search -> everything back
  await user.clear(search);

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("Physics")).toBeInTheDocument();
});