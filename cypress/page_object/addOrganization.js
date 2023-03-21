class AddOrganization {
    
    get addNewOrganization () {
        return cy.get('div[class="vs-c-my-organization vs-c-my-organization--add-new not-sortable"]')
    }
    
    get addOrganizationName () {
        return cy.get("input");
    }
    
    get addOrgModal() {
        return cy.get(".vs-c-modal")
    }

    get addOrgModalHeading() {
        return this.addOrgModal.find("h2")
    }
    
    get nextButton() {
        return this.addOrgModal.find("button").last();
    }

    get okOrgModal() {
        return cy.get(".vs-c-modal__body")
    }
    
    get okButton() {
        return this.okOrgModal.find("button").last();
    }

    newOrganization(name) {
        this.addNewOrganization.click();
        this.addOrgModalHeading.should("contain", "New Organization")
        this.addOrganizationName.type(name);
        this.nextButton.click();
        this.nextButton.click();
        this.okButton.click();
        cy.wait(200);
    }
}

export const addOrganization = new AddOrganization();