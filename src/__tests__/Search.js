import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../components/Search";
import { render } from "@testing-library/react";

describe("Test to see if correct input went into search bar", () => {
  test("Should have the correct query in the search bar", () => {
    const { getByTestId } = render(
      <Router>
        <Search searchQuery="bike" />
      </Router>
    );
    // When testing external React components, need to pass down
    // props to the actual HTML element (via inputProps in Material)
    const input = getByTestId("search-input");
    expect(input.value).toBe("bike");
  });
});
