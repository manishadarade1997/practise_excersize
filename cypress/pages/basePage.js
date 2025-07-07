class BasePage {
    constructor() {
        this.pageTitle = '';
    }

    visit(url) {
        cy.visit(url);
    }

    getTitle() {
        return cy.title();
    }

    // Additional common methods for page interactions can be added here
}

export default BasePage;