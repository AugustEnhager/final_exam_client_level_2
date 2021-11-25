describe("User can see list of courses", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a header with courses", () => {
    cy.get("[data-cy=courses]").should("contain", Workshop);
  });
});
