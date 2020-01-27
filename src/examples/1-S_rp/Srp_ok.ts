// ✔️ holds data and basic logic
export class Animal {
  constructor(public name: string) {}
  getAnimalName(): string {
    return 'Lassie';
  }
}
// ✔️ persistence
export class AnimalDB {
  selectAnimal(name: string): Animal {
    return new Animal(name);
  }
  saveAnimal(animal: Animal): void {
    console.log('Saving' + JSON.stringify(animal));
  }
}
