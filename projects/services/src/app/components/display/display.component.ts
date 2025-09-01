import { Component } from '@angular/core';
import { Animal, AnimalService } from '../../services/animal.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css'],
    imports: [AsyncPipe]
})
export class DisplayComponent {
    readonly Animal = Animal;
    selectedAnimal$: Observable<Animal | undefined> = this.animalService.getSelectedAnimal();

    constructor(private animalService: AnimalService) {}

    onReset() {
      this.animalService.resetSelection();
    }
}
