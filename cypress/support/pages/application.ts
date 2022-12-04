import PracticionerAppointment from "./practionerAppointment";
import Login from "./login";
import Main from "./main";
import Appointment from "./appointment";
import Support from "./support";

class Application {
    login: Login = new Login();
    main: Main = new Main();
    appointment: Appointment = new Appointment();
    practionerAppointment: PracticionerAppointment = new PracticionerAppointment();
    support: Support = new Support();
}

export default new Application();
