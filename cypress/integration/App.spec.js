describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("contains Red Shirt", () => {
    cy.visit("/");
    cy.get("[data-cy=item]").should("contain", "Red Shirt");
  });

  it("successfully renders login page", () => {
    cy.visit("/");
    cy.get("[data-cy=login]").click();
    cy.get("[data-cy=loginbutton]").should("contain", "Login");
  });
});
