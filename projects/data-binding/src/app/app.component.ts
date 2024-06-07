import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedAnimal?: Animal;
}
