import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { MatButtonModule } from '@angular/material/button';  // Optional if you want buttons in the cards



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatCardModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dynamic-Forms-Management';
}
