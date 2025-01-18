/// <reference types="cypress" />

describe("connect button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should be active by default", () => {
    cy.get("[data-testid='connect-button']").should("not.be.disabled");
  });

  it("should become disabled when connected", () => {
    cy.get("[data-testid='connect-button']").click().should("be.disabled");
  });

  it("should become active when disconnected", () => {
    cy.get("[data-testid='connect-button']").click();
    cy.get("[data-testid='disconnect-button']").click();
    cy.get("[data-testid='connect-button']").should("not.be.disabled");
  });

  it("should create 2 messages when connected", () => {
    cy.get("[data-testid='connect-button']").click();
    cy.get("[data-testid='message-list']").should("have.length", 1);
    cy.get("[data-testid='message-item']").should("have.length", 2);
  });

  it("should make new message input field visible when connected", () => {
    cy.get("[data-testid='connect-button']").click();
    cy.get("[data-testid='new-message-input']").should("be.visible");
  });
});

describe("disconnect button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should be disabled by default", () => {
    cy.get("[data-testid='disconnect-button']").should("be.disabled");
  });

  it("should become active when connected", () => {
    cy.get("[data-testid='connect-button']").click();
    cy.get("[data-testid='disconnect-button']").should("not.be.disabled");
  });

  it("should become disabled when disconnected", () => {
    cy.get("[data-testid='connect-button']").click();
    cy.get("[data-testid='disconnect-button']")
      .should("not.be.disabled")
      .click()
      .should("be.disabled");
  });
});
