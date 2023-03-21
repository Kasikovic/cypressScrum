/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";

describe("login tests scrum", () => {
    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.clearFields();
    })
    it("login with empty fields", () => {
        loginPage.login(" ", " ")
        loginPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text", "The email field must be a valid emailThe password field is required")
        .and("have.css", "color", "rgb(187, 57, 22)")
        .and("have.class", "el-form-item__error");
    })
    it("login with invalid email address", () => {
        loginPage.login("nemanjakasikovic95@gmail", "nemanja95")
        loginPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text", "The email field must be a valid email")
        .and("have.css", "color", "rgb(187, 57, 22)")
        .and("have.class", "el-form-item__error");
    })
    it("login without email address", () => {
        loginPage.login(" ", "nemanja95")
        loginPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text", "The email field must be a valid email")
        .and("have.css", "color", "rgb(187, 57, 22)")
        .and("have.class", "el-form-item__error");
    })
    it("login without password ", () => {
        loginPage.login("nemanjakasikovic95@gmail.com", " ")
        loginPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text", "The password field is required")
        .and("have.css", "color", "rgb(187, 57, 22)")
        .and("have.class", "el-form-item__error");
    })
    it("login with valid data", () => {
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
        cy.url().should("not.include", "/login");
    })
    it.only("login with intercept" , () => {
        cy.intercept({
            method: "POST",
            url: Cypress.env("apiUrl") + "/v2/login"
        }).as("validLogin");
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
        cy.wait("@validLogin").then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.be.equal(200);
            expect(interception.response.body.token).to.exist;
        })
    })
});