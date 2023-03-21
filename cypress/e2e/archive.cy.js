/// <reference types="Cypress" />
import { addOrganization } from "../page_object/addOrganization";
import { archiveOrganization } from "../page_object/archiveOrganization";
import { loginPage } from "../page_object/loginPage";
import { faker } from "@faker-js/faker"

const userData = {randomTitle: faker.lorem.word()}

describe("archive organization", () => {
    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.clearFields();
        loginPage.login("nemanjakasikovic95@gmail.com", "nemanja95");
        addOrganization.newOrganization(userData.randomTitle);
    })
    it("archive organization", () => {
        archiveOrganization.firstOrganization.click()
        .should("exist")
        .and("be.visible")
        archiveOrganization.organizationConfiguration.click()
        archiveOrganization.archiveButton.click()
        .should("exist")
        .and("be.visible")
        archiveOrganization.confirmButton.click()
        cy.url().should("contain", "/settings");
    })
})