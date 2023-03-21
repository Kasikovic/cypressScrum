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

    get nextButton() {
        return this.addOrgModal.find("button").last();
    }

    
    

    // get nextButton () {
    //     return cy.get("button[name='next_btn']");
    // }

    // get createButton () {
    //     return cy.get("button[name='next_btn']");
    // }
    get okButton() {
        return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--lg vs-u-font-sm vs-c-modal--features-confirm-button"]');
    }

    newOrganization(name) {
        this.addNewOrganization.click();
        this.addOrganizationName.type(name);
        this.nextButton.click();
        this.nextButton.click();
        this.okButton.click();
        cy.wait(200);
    }
}

export const addOrganization = new AddOrganization();