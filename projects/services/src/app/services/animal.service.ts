import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Animal {
  Giraffe,
  Monkey,
  Donkey
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
    private _selectedAnimal: BehaviorSubject<Animal | undefined> = new BehaviorSubject<Animal | undefined>(undefined);

    getSelectedAnimal(): Observable<Animal | undefined> {
      return this._selectedAnimal.asObservable();
    }

    setSelectedAnimal(animal: Animal) {
      this._selectedAnimal.next(animal);
    }

    resetSelection() {
      this._selectedAnimal.next(undefined);
    }
}
