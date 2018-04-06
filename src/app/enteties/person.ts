import { Rating } from "./rating";

export class Person {
  public id: number;
  public firstname: String;
  public lastname: String;
  public birthdate: Date;
  public area: String;
  public rating: Rating[];
  public username: string;
  public role: boolean;
}
