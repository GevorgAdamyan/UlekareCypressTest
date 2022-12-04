import { faker } from "@faker-js/faker";

export default class Utils {
    static generateMessage(): string {
        return faker.lorem.paragraph(1)
    }
}