import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutPage } from "./AboutPage";

test("loads and displays greeting", () => {

  render(<AboutPage />);
  expect(screen.getByText("message.greeting")).toBeInTheDocument();
});

/* The single test in the whole app, this is not due to the fact I don't like test coverage, 
but rather because of limited time ... There is always place for improvement! */