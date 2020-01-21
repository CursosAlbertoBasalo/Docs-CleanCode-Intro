// ❌ Bad verbs
export class Client {
  pendingOrders: boolean;
  lastOrderDate: Date;
  deferPayment: boolean;
  //
  // Constructor
  //
  constructor() {
    this.pendingOrders = false;
  }

  pending(): object[] {
    return [];
  }

  // Gets the orders by status
  getOrders(status: number): object[] {
    console.log('Getting by ', status);
    return [];
  }

  credit(): boolean {
    if (this.isVIP || this.deferPayment) return true;
  }

  selectLastOrder(): object {
    return {};
  }

  isActive(): string {
    if (this.pendingOrders || this.isVIP) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }

  isVIP: boolean;
}
