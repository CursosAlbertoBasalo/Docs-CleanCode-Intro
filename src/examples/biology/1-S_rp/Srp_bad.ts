// ❌ two different kind of jobs for the same buddy
export class Animal {
  constructor(public name: string) {}
  getAnimalName(): string {
    return this.name.toLowerCase();
  }
  saveAnimal(animal: Animal): void {
    console.log('Saving' + JSON.stringify(animal));
  }
}
