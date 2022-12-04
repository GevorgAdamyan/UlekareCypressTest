export default class Main {
    private selectors = {
        supportBtnText: 'Potřebuji poradit',
        appointmentBtnText: 'Vstoupit do prevence',
        profileMenuBtn: '.profile_menu button',
        popUp: '.v-item-group i',
        personalTab: 'Já osobně',
        serviceBtn: 'Přejít do služby',
        logOutBtn: 'Odhlásit se',
        returnToMainPageBtn: '.show-on-desktop > .v-image > .v-responsive__sizer'
    }

    navigateToSupport(): void {
        cy.contains(this.selectors.supportBtnText).click()
    }

    navigateToAppointment(): void {
        cy.contains(this.selectors.appointmentBtnText).click()
    }

    private openProfileMenu(): void {
        cy.get(this.selectors.profileMenuBtn).click()
    }

    closePopUp(): void {
        cy.get(this.selectors.popUp).click();
        cy.contains(this.selectors.personalTab).click();
        cy.contains(this.selectors.serviceBtn).click();
    }

    logOut(): void {
        this.openProfileMenu();
        cy.wait(1000);
        cy.contains(this.selectors.logOutBtn).click();
    }

    returnToMainPage(): void {
        cy.get(this.selectors.returnToMainPageBtn).click();
    }
}
