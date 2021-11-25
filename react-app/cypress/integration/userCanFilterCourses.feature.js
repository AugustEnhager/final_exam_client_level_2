describe("User can see list of courses", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a header with courses", () => {
    cy.get("[data-cy=page-header]").should("contain", "Course List");
  });

  it('is expected to display info about the first course', () => {
    cy.get("[data-cy=course-1]").within(() => {
      cy.get("[data-cy=course-title]").should("contain", "Work The Web")
      cy.get("[data-cy=course-category]").should("contain", "workshops")
      cy.get("[data-cy=course-description]").should("contain", "Do you want to understand how applications for the web are built")
      cy.get("[data-cy=course-instructors]").should("contain", "Thomas Ochman, Emma-Maria Thalén")      
    })
  });
});
