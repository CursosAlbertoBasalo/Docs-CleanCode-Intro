import { Animal } from '../1-S_rp/Srp_ok';

// ✔️ define behaviors

export interface LayEggs {
  layEggs(): LayEggs;
}

export interface GiveBirth {
  giveBirth(): GiveBirth;
}

export interface BreastFeed {
  breastFeed(child: Animal): void;
}

// ✔️ implement behaviors

export class Mouse extends Animal implements GiveBirth, BreastFeed {
  giveBirth(): Mouse {
    return new Mouse('Minnie');
  }
  breastFeed(child: Mouse): void {
    console.log('Feeding my little baby', child);
  }
}
export class Hen extends Animal implements LayEggs {
  layEggs(): Hen {
    return new Hen('Turuleca');
  }
}
