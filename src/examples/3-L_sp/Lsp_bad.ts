import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mamal extends Animal {
  abstract giveBirth(): Mamal;
  abstract breastFeed(child: Mamal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(): Oviparous;
}

// ✔️ extend an implement abstract methods
export class Whale extends Mamal {
  giveBirth(): Mamal {
    return new Whale('Moby Dick');
  }
  breastFeed(child: Whale): void {
    console.log('Feeding my little baby', child);
  }
}

// ✔️ extend an implement abstract methods
export class ClownFish extends Oviparous {
  layEggs(): Oviparous {
    return new ClownFish('Nemo');
  }
}

// ❌ what about giveBirth???
// ❌ how can I feed may little child???
export class PlatypusMamal extends Mamal {
  layEggs(): PlatypusMamal {
    return new PlatypusMamal('Perry');
  }
  giveBirth(): Mamal {
    throw new Error('Method not implemented.');
  }
  breastFeed(child: PlatypusMamal): void {
    console.error('I can not get a platypus to feed');
  }
}

// ❌ I still can't feed my little one :-(
export class PlatypusOviparous extends Oviparous {
  layEggs(): PlatypusOviparous {
    return new PlatypusOviparous('Perry');
  }
  breastFeed(child: PlatypusOviparous): void {
    console.error('I can not get a platypus to feed');
  }
}
