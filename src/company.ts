import { Faker, es } from "@faker-js/faker";

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng:number;
    };

    constructor() {
        const customFaker = new Faker({ locale: [es] });
        //this.companyName = customFaker.company.name()
        this.catchPhrase = customFaker.company.catchPhrase();
        this.location = {
            lat: customFaker.location.latitude(),
            lng: customFaker.location.latitude()
        }

    }
}