export default class Support {
    private selectors = {
        continueToPersonBtn: '.mx-auto > .v-card__text > .v-btn > .v-btn__content',
        personalTabText: 'Na sebe',
        continueToTextAreasBtn: ':nth-child(6) > .col-sm-12 > .v-btn > .v-btn__content',
        textArea1: '#ulTextarea-205',
        textArea2: '#ulTextarea-207',
        textArea3: '#ulTextarea-208',
        textArea4: '#ulTextarea-209',
        dropdownField: '#dynamicInput-210',
        country: 'Česká republika',
        continueToSendQuestionBtn: '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > :nth-child(1) > .row > .col-sm-12 > .v-btn',
        sendBtnText: 'Odeslat',
        paymentPopUp: 'div.afterSteps'
    }

    getTextArea1(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selectors.textArea1)
    }

    getTextArea2(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selectors.textArea2)
    }

    getTextArea3(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selectors.textArea3)
    }

    getTextArea4(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selectors.textArea4)
    }

    getPaymentPopUp(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selectors.paymentPopUp)
    }

    continueToPerson(): void {
        cy.get(this.selectors.continueToPersonBtn).click()
    }

    continueToTextAreas(): void {
        cy.get(this.selectors.continueToTextAreasBtn).click();
    }

    continueToSendMessage(): void {
        cy.get(this.selectors.continueToSendQuestionBtn).click()
    }

    selectPersonalTab(): void {
        cy.contains(this.selectors.personalTabText).click()
    }

    fillTextArea(textArea: Cypress.Chainable<JQuery<HTMLElement>>, content: string) {
        textArea.type(content)
    }

    selectCountry(): void {
        cy.get(this.selectors.dropdownField).click();
        cy.wait(300);
        cy.contains(this.selectors.country).click();
    }

    sendQuestion(): void {
        cy.contains(this.selectors.sendBtnText).click({force: true})
    }
}
