import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css'],
    standalone: false
})
export class SelectionComponent {
    readonly Animal = Animal;
    @Input() selectedAnimal?: Animal;
    @Output() selectedAnimalChange = new EventEmitter<Animal | undefined>();

    onClick(animal: Animal) {
      this.selectedAnimalChange.emit(animal);
    }
}
