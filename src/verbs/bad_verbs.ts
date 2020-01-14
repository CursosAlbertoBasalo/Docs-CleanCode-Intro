// ❌ Bad verbs
export class Client {
  pendingOrders: boolean;

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
    return true;
  }

  selectLastOrder(): object {
    return {};
  }

  isVIP: boolean;
}
