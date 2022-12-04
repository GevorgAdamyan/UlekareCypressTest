export default class Appointment {
    private selectors = {
        prictitionerDocText: 'Praktický lékař',
        procedure: '.medical-procedure-box',
        procedureBtn: 'button',
        nextArrow: ':nth-child(3) > .flicking-container > .flicking-viewport > .flicking-arrow-next > .icon',
        reservedDocBtnText: 'Zobrazit detail',
    }

    openPractitioner(): void {
        cy.contains(this.selectors.prictitionerDocText)
            .parentsUntil(this.selectors.procedure)
            .find(this.selectors.procedureBtn)
            .click();
    }

    nextDoctor(): void {
        cy.get(this.selectors.nextArrow).click();
        this.getReservedDoctor().then(el => {
            if(!Cypress.dom.isVisible(el)) {
                this.nextDoctor();
                cy.wait(500);
            }
        })
    }

    getReservedDoctor(): Cypress.Chainable<undefined> {
        return cy.contains(this.selectors.reservedDocBtnText);
    }

    selectReservedDoctor(): void {
        this.getReservedDoctor().click()
    }
}


