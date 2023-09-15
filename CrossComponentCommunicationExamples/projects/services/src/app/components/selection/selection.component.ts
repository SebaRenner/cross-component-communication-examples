import { Component } from '@angular/core';
import { Animal, AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
    readonly Animal = Animal;

    constructor(private animalService: AnimalService) {}

    onClick(animal: Animal) {
      this.animalService.setSelectedAnimal(animal);
    }
}
