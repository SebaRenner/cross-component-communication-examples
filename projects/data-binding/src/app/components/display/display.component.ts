import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css'],
    standalone: false
})
export class DisplayComponent {
  readonly Animal = Animal;
  @Input() selectedAnimal?: Animal;
  @Output() selectedAnimalChange = new EventEmitter<Animal | undefined>();

  onReset() {
    this.selectedAnimalChange.emit(undefined);
  }
}
