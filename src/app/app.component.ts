import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login-Ragistration';
  value = 35;

  formatLabel(value: number): string {

      return Math.round(value) + '%';

  }
}
