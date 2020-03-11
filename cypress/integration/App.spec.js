describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("contains Red Shirt", () => {
    cy.visit("/");
    cy.get("[data-cy=item]").should("contain", "Red Shirt");
  });
});
