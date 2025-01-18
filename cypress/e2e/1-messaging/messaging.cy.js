/// <reference types="cypress" />

describe("messaging", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should have an empty list by default", () => {
    cy.get("[data-testId='message-list']").should("have.length", 0);
    cy.get("[data-testId='message-item']").should("have.length", 0);
  });

  it("should have 2 or more messages when connected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='message-list']").should("have.length", 1);
    cy.get("[data-testId='message-item']").should("have.length.greaterThan", 1);
  });

  it("should display the new message controls with correct state", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='new-message-input']")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("[data-testId='new-message-button']")
      .should("be.visible")
      .should("be.disabled");
  });

  it("should add new message to the list when created", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='new-message-input']").type("Hello, World!");
    cy.get("[data-testId='new-message-button']").click();
    cy.get("[data-testId='message-item']").should("have.length.greaterThan", 2);
  });

  it("should go back to default state when new message is created", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='new-message-input']").type("Hello, World!");
    cy.get("[data-testId='new-message-button']").click();
    cy.get("[data-testId='new-message-input']")
      .should("have.value", "")
      .should("not.be.disabled");
    cy.get("[data-testId='new-message-button']").should("be.disabled");
  });
});
