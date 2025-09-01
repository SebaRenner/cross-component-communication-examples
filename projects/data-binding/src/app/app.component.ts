import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    selectedAnimal?: Animal;
}
