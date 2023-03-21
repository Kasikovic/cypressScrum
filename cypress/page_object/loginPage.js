class LoginPage {
    get emailInput() {
        return cy.get("input").first();
    }

    get passwordInput() {
        return cy.get("input").eq(1);
    }

    get logInButton() {
        return cy.get("button").first();
    }

    get errorMessage() {
        return cy.get(".el-form-item__error")
    }

    

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.logInButton.click();
      }

      clearFields() {
        loginPage.login
    };  
}

export const loginPage = new LoginPage();