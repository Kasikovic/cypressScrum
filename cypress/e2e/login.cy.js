/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";

describe("login tests scrum", () => {
    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.clearFields();
    })
    it("login with valid data", () => {
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
        cy.url().should("not.include", "/login");
    })
    it("login with intercept" , () => {
        cy.intercept({
            method: "POST",
            url: Cypress.env("apiUrl") + "/v2/login"
        }).as("validLogin");
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
        cy.wait("@validLogin").then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.be.equal(200);
            expect(interception.response.body.token).to.exist;
            expect(interception.response.statusCode).not.to.be.equal(401);
        })
    })
});