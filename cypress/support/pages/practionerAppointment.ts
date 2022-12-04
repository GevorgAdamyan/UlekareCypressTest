export default class PracticionerAppointment {
    private selectors = {
        timeReserveBtn: '.d-lg-block.buttons_block > button',
        currentDateCheckBox: '.v-input--checkbox input',
        confirmAppointementBtn: 'button[type="submit"]',
        lestVisitText: 'Poslední prohlídka',
        nextVisitText: 'Další prohlídka do',
        appointmentRow: '.mt-8 .pa-4'
    }

    openTimeReservation(): void {
        cy.get(this.selectors.appointmentRow).then(els => {
            let appointments: number = els.length;
            cy.wrap(appointments + 1).as('appointmentsNumBefore');
        })
        cy.get(this.selectors.timeReserveBtn).click()
    }

    selectCurrentDate(): void {
        cy.get(this.selectors.currentDateCheckBox).check()
    }

    confirmAppointement(): void {
        cy.get(this.selectors.confirmAppointementBtn).click();
        this.getAppointmentYear();
        this.getNextAppointmentYear();
        cy.wait(1000);
        this.getAppointmentsNumber();
    }

    private getAppointmentYear(): void {
        cy.contains(this.selectors.lestVisitText).next('div').then(el => {
            let text: string = el.text();
            let year: number = +text.split('. ')[2]
            cy.wrap(year + 2).as('firstAppointmentYear')
        })
    }

    private getNextAppointmentYear(): void {
        cy.contains(this.selectors.nextVisitText).next('div').then(el => {
            let text: string = el.text();
            let year: number = +text.split('. ')[2]
            cy.wrap(year).as('nextAppointmentYear')
        })
    }

    private getAppointmentsNumber(): void {
        cy.get(this.selectors.appointmentRow).then(els => {
            let appointments: number = els.length;
            cy.wrap(appointments).as('appointmentsNumAfter');
        })
    }
}
