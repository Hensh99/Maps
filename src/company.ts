import { Faker, es } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  constructor() {
    const customFaker = new Faker({ locale: [es] });
    this.catchPhrase = customFaker.company.catchPhrase();
    this.location = {
      lat: customFaker.location.latitude(),
      lng: customFaker.location.latitude(),
    };
  }
  markerContent(): string {
    return `<div>
        <h3>Company name: ${this.catchPhrase}</h3>
        </div>`;
  }
}
