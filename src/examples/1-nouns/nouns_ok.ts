//✔️ meaningful and pronounceable
//✔️ no magic numbers
//✔️ no added context
//✔️ business dictionary
//✔️ no mental mapping
const ACTIVE = 2;
export class Client {
  registeredOn: Date;
  name: string;
  balance: number;
  status = ACTIVE;
  numberOfSupliedOrders: number;
  orders: object[];
  processOrders(): void {
    this.orders.forEach(order => {
      console.log('Start processing');
      console.log('processing things');
      console.log('Ended with' + order);
    });
  }
}