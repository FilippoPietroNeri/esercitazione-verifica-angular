import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SecondComponent, ThirdComponent, FourthComponent]
})
export class AppComponent {
  name = "app component";
}
