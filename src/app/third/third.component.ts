import { Component } from '@angular/core';
import { FourthComponent } from '../fourth/fourth.component';

@Component({
  selector: 'app-third',
  imports: [FourthComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
  standalone: true,
})
export class ThirdComponent {
  name = 'Third';
}
