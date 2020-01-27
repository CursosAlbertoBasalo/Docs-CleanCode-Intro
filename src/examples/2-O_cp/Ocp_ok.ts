import { Animal } from '../1-S_rp/Srp_ok';

// ✔️ closed for modification
export abstract class AnimalSoundMaker extends Animal {
  abstract makeSound(): string;
}
class Lion extends AnimalSoundMaker {
  makeSound(): string {
    return 'roar';
  }
}
// ✔️ Open for extension
class Gorilla extends AnimalSoundMaker {
  makeSound(): string {
    return 'grunt';
  }
}
function makeSoundWithAnimalTalkers(animals: Array<AnimalSoundMaker>): void {
  animals.forEach(animal => animal.makeSound());
}
const talkingAnimals = [new Lion('Simba'), new Gorilla('King Kong')];
makeSoundWithAnimalTalkers(talkingAnimals);
