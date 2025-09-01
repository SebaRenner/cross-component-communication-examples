import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css'],
    imports: [NgClass]
})
export class SelectionComponent {
    readonly Animal = Animal;
    @Input() selectedAnimal?: Animal;
    @Output() selectedAnimalChange = new EventEmitter<Animal | undefined>();

    onClick(animal: Animal) {
      this.selectedAnimalChange.emit(animal);
    }
}
