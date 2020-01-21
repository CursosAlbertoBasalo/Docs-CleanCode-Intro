/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable no-magic-numbers */
// ❌ Bad nouns
export class client {
  regOn: Date;
  clientName: string;
  intBalance: number;
  status: 2;
  numberOfSupliedRequests: number;
  clientOrders: object[];
  processOrders(): void {
    this.clientOrders.forEach(o => {
      console.log('Start processing');
      console.log('processing things');
      console.log('Ended with' + o);
    });
  }
}
