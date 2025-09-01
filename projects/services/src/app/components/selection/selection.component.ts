import { Component } from '@angular/core';
import { Animal, AnimalService } from '../../services/animal.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css'],
    imports: [AsyncPipe]
})
export class SelectionComponent {
    readonly Animal = Animal;

    selectedAnimal$: Observable<Animal | undefined> = this.animalService.getSelectedAnimal();

    constructor(private animalService: AnimalService) {}

    onClick(animal: Animal) {
      this.animalService.setSelectedAnimal(animal);
    }
}
