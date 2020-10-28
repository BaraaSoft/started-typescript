import { ILocation } from "./ILocation"
import Faker from 'faker';

export class Company {

    name: string
    location: ILocation
    constructor() {
        this.fake()
    }

    fake(): void {
        this.location = {
            lat: parseFloat(Faker.address.latitude()),
            lng: parseFloat(Faker.address.longitude())
        }
        this.name = Faker.company.companyName()
    }

}