import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularz';
  isSpecial = false;
  actualClass="casual";

  currentStyle = {
    'font-size': this.isSpecial ? '24px' : '12px',
    'font-weight':'bold'
  };
}
