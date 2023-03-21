/// <reference types="Cypress" />
import { addOrganization } from "../page_object/addOrganization";
import { loginPage } from "../page_object/loginPage";
import { faker } from "@faker-js/faker"


const userData = {randomTitle: faker.lorem.word()}


describe("add new organization tests", () => {
    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.clearFields();
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
    })
    it("add new organization", () => {
        addOrganization.newOrganization(userData.randomTitle);
        cy.url().should("contain", "organizations");
    })
    it("add new organization with intercept", () => {
        cy.intercept({
            method: "POST",  
            url: Cypress.env("apiUrl") + "/v2/organizations" 
        }).as("validNewOrganization");
        addOrganization.newOrganization(userData.randomTitle);
        cy.wait("@validNewOrganization").then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.be.equal(201);
            })
    })
})