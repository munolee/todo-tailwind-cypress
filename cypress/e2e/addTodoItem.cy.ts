describe("Add Todo Item", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.get("#input-title").focus().type("Work");
    cy.get("#input-content").focus().type("Cypress 작성하기");
    cy.get("#button-add").click();
    cy.get("#todo-list").contains("Work");
    cy.get("#todo-list").contains("Cypress 작성하기");
  });
});
