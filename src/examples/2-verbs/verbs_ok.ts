//✔️ Verbs ok
export class Client {
  hasPendingOrders: boolean;
  isVIP: boolean;
  canDeferPayment: boolean;

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
    if (this.isVIP || this.canDeferPayment) return true;
  }
  getLastOrder(): object {
    return {};
  }
  isActive(): boolean {
    if (this.hasPendingOrders || this.isVIP) {
      return true;
    } else {
      return false;
    }
  }
  getActiveStatus(): string {
    if (this.isActive()) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }
}
