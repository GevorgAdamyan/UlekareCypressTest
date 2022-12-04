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

    it('should make an appointment to Practioner doctor', () => {
        App.appointment.openPractitioner();
        App.practionerAppointment.openTimeReservation();
        App.practionerAppointment.selectCurrentDate();
        App.practionerAppointment.confirmAppointement();
        cy.get('@nextAppointmentYear').then(nextYear => {
            cy.get('@firstAppointmentYear').then(firstYear => {
                expect(nextYear).to.equal(firstYear)
            })
        })
        cy.get('@appointmentsNum').then(num => {
            expect(num).to.equal(1)
        })
    })

    it('should make an appointment to Practioner doctor second time', () => {
        App.appointment.nextDoctor();
        App.appointment.selectReservedDoctor();
        App.practionerAppointment.openTimeReservation();
        App.practionerAppointment.selectCurrentDate();
        App.practionerAppointment.confirmAppointement();
        cy.get('@appointmentsNum').then(num => {
            expect(num).to.equal(2)
        })
    })
})