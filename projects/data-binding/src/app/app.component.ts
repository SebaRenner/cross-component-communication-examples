import { Component } from '@angular/core';
import { Animal } from './models/animal.model';
import { SelectionComponent } from './components/selection/selection.component';
import { DisplayComponent } from './components/display/display.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [SelectionComponent, DisplayComponent]
})
export class AppComponent {
    selectedAnimal?: Animal;
}
