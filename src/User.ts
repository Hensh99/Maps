import { Faker, es } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  // two options: initialize the properties in the same line if hardcoded or inside the constructor function
  constructor() {
    const customFaker = new Faker({ locale: [es] });

    // const person = new PersonModule(customFaker);
    // const location = new LocationModule(customFaker);

    this.name = customFaker.person.firstName();
    this.location = {
      lat: customFaker.location.latitude(),
      lng: customFaker.location.longitude(),
    };
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
