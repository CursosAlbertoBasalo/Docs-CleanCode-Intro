import { Animal } from '../1-S_rp/Srp_bad';
import { Hen } from '../4-I_sp/Isp_bad';
import { LayEggs } from '../4-I_sp/Isp_ok';

// ✔️ depends on abstractions
export class NewEggsFarmer {
  constructor(private eggsProducer: LayEggs) {}
  produceEggs(): LayEggs {
    return this.eggsProducer.layEggs();
  }
}

// ✔️ the caller defines its implementations
export const hensFarm = new NewEggsFarmer(new Hen('Turuleca'));

// ✔️ even creating new ones
class Duck extends Animal implements LayEggs {
  layEggs(): Duck {
    return new Duck('Daisy');
  }
}

export const ducksFarm = new NewEggsFarmer(new Duck('Daisy'));
