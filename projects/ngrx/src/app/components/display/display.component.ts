import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAnimal } from '../../state/animal/animal.selectors';
import { resetAnimal } from '../../state/animal/animal.actions';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  readonly Animal = Animal;
  selectedAnimal$: Observable<Animal | undefined> = this.store.select(selectAnimal);

  constructor(private store: Store) {}

  onReset() {
    this.store.dispatch(resetAnimal())
  }
}
