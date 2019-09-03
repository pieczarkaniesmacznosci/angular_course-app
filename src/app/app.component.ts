import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3{
      color: dodgerblue;
    }
  `] // style or style URL can be added directly in ts file.
})
export class AppComponent {
  name = 'Lukasz';
}
