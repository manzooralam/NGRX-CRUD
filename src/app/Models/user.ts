export class User {
  id?: number;
  name: string;
  age: number;
  date: Date;

  constructor(
    name?: string,
    age?: number,
    date?: Date,
  ) {
    this.name = name || '';
    this.age = age || 0;
    this.date = date || new Date();
  }
}
