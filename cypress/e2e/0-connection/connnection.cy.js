/// <reference types="cypress" />

describe("connect button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should be active by default", () => {
    cy.get("[data-testId='connect-button']").should("not.be.disabled");
  });

  it("should become disabled when connected", () => {
    cy.get("[data-testId='connect-button']").click().should("be.disabled");
  });

  it("should become active when disconnected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='disconnect-button']").click();
    cy.get("[data-testId='connect-button']").should("not.be.disabled");
  });

  it("should create 2 messages when connected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='message-list']").should("have.length", 1);
    cy.get("[data-testId='message-item']").should("have.length", 2);
  });

  it("should make new message input field visible when connected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='new-message-input']").should("be.visible");
  });
});

describe("disconnect button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should be disabled by default", () => {
    cy.get("[data-testId='disconnect-button']").should("be.disabled");
  });

  it("should become active when connected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='disconnect-button']").should("not.be.disabled");
  });

  it("should become disabled when disconnected", () => {
    cy.get("[data-testId='connect-button']").click();
    cy.get("[data-testId='disconnect-button']")
      .should("not.be.disabled")
      .click()
      .should("be.disabled");
  });
});
