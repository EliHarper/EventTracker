export class Finance {

  id: number;
  category: string;
  amount: number;
  expected: string;
  impulse: string;
  date: string;

  constructor (id?: number, category?: string, amount?: number, expected?: string, impulse?: string, date?: string) {
    this.id = id;
    this.category = category;
    this.amount = amount;
    this.expected = expected;
    this.impulse = impulse;
    this.date = date;
  }
}
