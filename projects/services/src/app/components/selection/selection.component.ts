import { Component } from '@angular/core';
import { Animal, AnimalService } from '../../services/animal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
    readonly Animal = Animal;

    selectedAnimal$: Observable<Animal | undefined> = this.animalService.getSelectedAnimal();

    constructor(private animalService: AnimalService) {}

    onClick(animal: Animal) {
      this.animalService.setSelectedAnimal(animal);
    }
}
