import { Injectable } from '@angular/core';

export enum Animal {
  Giraffe,
  Monkey,
  Donkey
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
    private _selectedAnimal?: Animal

    setSelectedAnimal(animal: Animal) {
      this._selectedAnimal = animal;
    }

    resetSelection() {
      this._selectedAnimal = undefined;
    }
}
