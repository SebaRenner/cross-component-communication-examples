import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { selectedAnimal } from '../../store/state';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css'],
    imports: [NgClass]
})
export class SelectionComponent {
    readonly Animal = Animal;
    readonly selectedAnimal = selectedAnimal;

    onClick(animal: Animal) {
      selectedAnimal.set(animal);
    }
}
