class ArchiveOrganization {
    get archiveModal () {
        return cy.get(".vs-c-list")
    }

    get firstOrganization () {
        return this.archiveModal.find("a").first();
    }

    get organizationsSettingsModal () {
        return cy.get(".vs-l-project__menu")
    }

    get organizationConfiguration () {
        return this.organizationsSettingsModal.find("li").last();
    }

    get archiveButton () {
        return cy.get("button").eq(-2);
    }

    get confirmButton() {
        return cy.get("button[name='save-btn']")
    }
    
}

export const archiveOrganization = new ArchiveOrganization();