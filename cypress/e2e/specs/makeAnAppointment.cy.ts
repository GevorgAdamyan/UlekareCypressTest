import App from '../../support/pages/application'

describe('Testing making appointment feature', () => {
    before(() => {
        cy.visit('/');
        App.login.acceptCookies();
        App.login.doLogin('kurdirafat@gmail.com', '223kurdi997');
        App.main.closePopUp();
    })

    beforeEach(() => {
        App.main.navigateToAppointment();
    })

    afterEach(() => {
        App.main.returnToMainPage();
    })

    after(() => {
        App.main.logOut();
    })

    it('should successfully make an appointment to Practioner doctor', () => {
        App.appointment.nextDoctor();
        App.appointment.selectReservedDoctor();
        App.practionerAppointment.openTimeReservation();
        App.practionerAppointment.selectCurrentDate();
        App.practionerAppointment.confirmAppointement();
        cy.get('@nextAppointmentYear').then(nextYear => {
            cy.get('@firstAppointmentYear').then(firstYear => {
                expect(nextYear).to.equal(firstYear)
            })
        })
        cy.get('@appointmentsNumAfter').then(numAfter => {
            cy.get('@appointmentsNumBefore').then(numBefore => {
                expect(numAfter).to.equal(numBefore)
            })
        })
    })
})