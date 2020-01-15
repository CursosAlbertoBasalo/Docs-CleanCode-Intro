//✔️ Verbs ok
export class Client {
  hasPendingOrders: boolean;
  isVIP: boolean;

  constructor() {
    this.hasPendingOrders = false;
  }

  getPendingOrders(): object[] {
    return [];
  }
  getOrdersByStatus(status: number): object[] {
    console.log('Getting by ', status);
    return [];
  }
  hasCredit(): boolean {
    if (this.hasPendingOrders) return true;
  }
  getLastOrder(): object {
    return {};
  }
}
