import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mamal extends Animal {
  abstract giveBirth(): Mamal;
  abstract breastFeed(child: Mamal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(): Oviparous;
}

export abstract class Monotrema extends Animal {
  abstract layEggs(): Monotrema;
  abstract breastFeed(child: Monotrema): void;
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

export class Platypus extends Monotrema {
  layEggs(): Platypus {
    return new Platypus('Perry');
  }
  breastFeed(child: Platypus): void {
    console.log('Feeding my little baby', child);
  }
}
