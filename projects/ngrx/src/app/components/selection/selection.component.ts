import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAnimal } from '../../state/animal/animal.selectors';
import { setAnimal } from '../../state/animal/animal.actions';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css'],
    standalone: false
})
export class SelectionComponent {
  readonly Animal = Animal;

  selectedAnimal$: Observable<Animal | undefined> = this.store.select(selectAnimal);

  constructor(private store: Store) {}

  onClick(animal: Animal) {
    this.store.dispatch(setAnimal({ animal }));
  }
}
