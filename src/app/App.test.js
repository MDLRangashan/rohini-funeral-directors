import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the homepage headline", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /With Dignity/i })
  ).toBeInTheDocument();
});
