class ArchiveOrganization {
    get organizationLink () {
        return cy.get("")
    }
}

export const archiveOrganization = new ArchiveOrganization();