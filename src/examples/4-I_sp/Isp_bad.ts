import { Animal } from '../1-S_rp/Srp_ok';

export interface IAnimal {
  giveBirth(): Animal;
  breastFeed(child: Animal): void;
  layEggs(): Animal;
}

// ❌ what about layEggs???
export class Mouse extends Animal implements IAnimal {
  giveBirth(): Animal {
    return new Mouse('Minnie');
  }
  breastFeed(child: Mouse): void {
    console.log('Feeding my little baby', child);
  }
}

// ❌ what about giveBirth???
// ❌ breas feeding? seriously???
export class Hen extends Animal implements IAnimal {
  layEggs(): Hen {
    return new Hen('Turuleca');
  }
}
