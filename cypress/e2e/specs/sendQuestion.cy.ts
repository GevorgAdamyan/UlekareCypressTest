import App from '../../support/pages/application';
import Utils from '../../support/utils'

describe('Testing send message to support feature', () => {
    before(() => {
        cy.visit('/');
        App.login.acceptCookies();
        App.login.doLogin('kurdirafat@gmail.com', '223kurdi997');
        App.main.closePopUp();
    })

    beforeEach(() => {
        App.main.navigateToSupport();
    })

    it('should successfuly send a message to support', () => {
        App.support.continueToPerson();
        App.support.selectPersonalTab();
        App.support.continueToTextAreas();
        App.support.fillTextArea(App.support.getTextArea1(), Utils.generateMessage());
        App.support.fillTextArea(App.support.getTextArea2(), Utils.generateMessage());
        App.support.fillTextArea(App.support.getTextArea3(), Utils.generateMessage());
        App.support.fillTextArea(App.support.getTextArea4(), Utils.generateMessage());
        App.support.selectCountry();
        App.support.continueToSendMessage();
        App.support.sendQuestion();
        App.support.getPaymentPopUp().should('be.visible')
    })
})