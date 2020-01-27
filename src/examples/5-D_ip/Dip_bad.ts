import { Hen } from '../4-I_sp/Isp_ok';

// ❌ only works with Turuleca
export class OldEggsFarmer {
  private hen = new Hen('Turuleca');
  produceEggs(): Hen {
    return this.hen.layEggs();
  }
}
