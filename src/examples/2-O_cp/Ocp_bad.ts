import { Animal } from '../1-S_rp/Srp_ok';

export const animals: Array<Animal> = [new Animal('Simba'), new Animal('King Kong')];

export function makeAnimalsSound(animals: Array<Animal>): void {
  animals.forEach(makeAnimalSound);
}
// ❌ the way goes down to a switch hell
function makeAnimalSound(animal: Animal): void {
  if (animal.name === 'Simba') console.log('roar');
  if (animal.name === 'King Kong') console.log('grunt');
}
