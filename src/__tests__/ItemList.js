import React from "react";
import { render } from "react-testing-library";
import ItemList from "../components/ItemList";

test("List of Items should show the added Item", () => {
  const items = [
    {
      availableTill: "June 20, 2020",
      email: "goo@u.northwestern.edu",
      id: "9090932--2f",
      img: "",
      isAvailable: true,
      name: "Test Material",
      price: "3.00",
      type: "Shirt",
      index: 0
    },
    {
      availableTill: "June 20, 2020",
      email: "goo@u.northwestern.edu",
      id: "90879932-32d",
      img: "",
      isAvailable: true,
      name: "Test Material2",
      price: "3.00",
      type: "Shirt",
      index: 1
    }
  ];

  let id = "232";

  const { getByTestId } = render(<ItemList items={items} />);

  expect(getByTestId("Item0").textContent).toBe("G");
});
