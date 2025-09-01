import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { selectedAnimal } from '../../store/state';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  readonly Animal = Animal;
  readonly selectedAnimal = selectedAnimal;

  onReset() {
    selectedAnimal.set(undefined);
  }
}
